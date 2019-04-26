import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { IDwIframeFinereportInfoService } from '../interface/finereport-service.interface';
import { DW_USING_TAB, DW_APP_ID } from '../../../../config/system.config';
import { IDwProgram } from '../../../../program-info/interface/program.interface';
import { IDwIframe } from '../../../../components/dw-iframe/interface/dw-iframe.interface';
import { DwOperationInfoService } from '../../../../program-info/operation-info.service';
import { DwFinereportRepository } from '../repository/finereport-repository';
import { DwIframeFrSignService } from './iframe-fr-sign.service';
import { DwIframeFinereportService } from './iframe-finereport.service';
import { DwSystemConfigService } from '../../../../config/config.service';
import { DwFinereportAuthService } from './finereport-auth.service';
import { DwAuthService } from '../../../../auth/auth.service';
import { DwLanguageService } from '../../../../components/language/service/language.service';

@Injectable()
export class DwIframeFinereportInfoService implements IDwIframeFinereportInfoService {
  private frUrl: string;
  private reportType = 'formlet'; // formlet 不是固定的報表參數名稱, 有可能會開CPT的類型.

  constructor(
    private dwOperationInfoService: DwOperationInfoService,
    private sysReportRepository: DwFinereportRepository,
    private dwLanguageService: DwLanguageService,
    private iframeFrSignService: DwIframeFrSignService,
    private dwIframeFinereportService: DwIframeFinereportService,
    @Inject(DW_APP_ID) private dwAppId: string,
    @Inject(DW_USING_TAB) public usingTab: boolean,
    private configService: DwSystemConfigService,
    private authService: DwAuthService,
    private dwIframeFinereportAuthService: DwFinereportAuthService
  ) {
    this.configService.get('frUrl').subscribe(
      url => this.frUrl = url
    );

    this.authService.isLoggedIn$.subscribe((isLogin: boolean) => {
      if (isLogin === false) {
        this.dwIframeFinereportAuthService.fineReportLogout();
      } else {
        this.dwIframeFinereportAuthService.fineReportlogin();
      }

    });

  }

  public finereportInfo(programId: string): Observable<IDwIframe> {
    const item: IDwIframe = {
      url: '',
      type: 'fineReport'
    };

    let code = programId; // 原始作業或報表編號
    const dwFrUrl = this.frUrl; // 帆軟報表網址
    let formlet = '';
    const langCode: string = this.dwLanguageService.currentLanguage;

    // 報表參數 = 報表固定參數 + 設定的參數 + 帆軟報表數位簽章
    // 最後交給dwIframeFinereportService主導最終報表網址資訊
    return this.dwOperationInfoService.operationInfo$(programId).pipe(
      // 報表固定參數 +設定的參數
      switchMap(
        (operationInfo: IDwProgram) => {
          if (operationInfo.code !== '') {
            code = operationInfo.code;
          }

          return this.sysReportRepository.getReport(code);
        },
        (operationInfo: IDwProgram, reportData: any) => {
          // const operationInfo = response.operationInfo;
          // const reportInfo = response.reportInfo;
          const paramQry = {}; // 帆軟報表的 url 的參數.
          const reportInfo = reportData.data;

          // 設定的參數(避免覆蓋固定參數，所以要在固定參數之前設值)
          if (operationInfo.hasOwnProperty('parameter')) {
            operationInfo.parameter.forEach(
              paramItem => {
                paramQry[paramItem.name] = paramItem.value;
              }
            );
          }

          if (reportInfo) {
            // const type = reportInfo.type ? reportInfo.type : '';
            if (reportInfo.type) {
              this.reportType = reportInfo.type;
            }
            const from = reportInfo.from ? reportInfo.from : '';
            const dwAppId = this.dwAppId;
            const name = reportInfo.name ? reportInfo.name : '';
            const fixparam = reportInfo.fixparam ? reportInfo.fixparam : [];

            // http://IP:Port/站台名稱(digiwin)/子站名稱(kanban)?formlet=標準(客製)/appId產品代號/語系/主頁名稱
            formlet = from + '/' + dwAppId + '/' + langCode + '/' + name;

            paramQry[this.reportType] = formlet;

            // 帆軟報表數位簽章需代入[原始作業或報表編號].
            code = reportInfo.code;

            // 固定參數
            fixparam.forEach(
              paramItem => {
                paramQry[paramItem.name] = paramItem.value;
              }
            );
          }

          return paramQry;
        }
      ),
      // +帆軟報表數位簽章
      switchMap(
        (paramQry: Object) => {
          const reportFormlet = paramQry[this.reportType] ? paramQry[this.reportType] : '';

          // 取數位簽章必須有op參數，前端只管變動參數的部份, 如果選單未設定, 則代入空字串.
          // op=報表類型(page 或 view), default為空字串.
          const _op = paramQry['op'] ? paramQry['op'] : '';
          return this.iframeFrSignService.getFrSign(reportFormlet, code, _op);
        },
        (paramQry: Object, frSignInfo: object) => {
          Object.keys(frSignInfo).forEach(
            infoKey => {
              paramQry[infoKey] = frSignInfo[infoKey];
            }
          );

          return paramQry;
        }
      ),
      switchMap(
        (paramQry: any) => {
          item.url = dwFrUrl;
          let i = 0;
          Object.keys(paramQry).forEach(
            paramKey => {
              let symbol = '&';
              if (i === 0) {
                symbol = '?';
              }

              let newValue = paramQry[paramKey].toString();
              newValue = newValue.replace('{{lang_code}}', langCode); // 替換使用語系.
              // newValue = newValue.replace('{{user_Name}}', ''); // 替換使用者帳號(保留).
              // newValue = newValue.replace('{{user_token}}', ''); // 替換 token(保留).

              item.url = item.url + symbol + paramKey + '=' + newValue;
              i = i + 1;
            }
          );

          return this.dwIframeFinereportService.getIframeFinereportData(item);
        }
      ),
      first()
    );
  }
}
