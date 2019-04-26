import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DW_PROGRAM_PAGE, DW_PROGRAM_ACTION } from '../../config/system.config';
import { IDwOperationMap } from '../../program-info/interface/program.interface';
import { DwProgramInfoListJsonService } from '../../program-info/program-info-list-json.service';
import { DwLanguageI18nRepository } from '../../components/language/repository/language-i18n-repository';
import { DwDapHttpClient } from '../../partner/dap/http/dap-http-client';

@Injectable()
export class DwIamPermissionRepository {
  constructor(
    private http: DwDapHttpClient,
    private programInfoListJsonService: DwProgramInfoListJsonService,
    private languageI18nRepository: DwLanguageI18nRepository,
    @Inject(DW_PROGRAM_PAGE) private programPageListJson: any[], // 作業子頁面設定檔
    @Inject(DW_PROGRAM_ACTION) private programActionListJson: any[] // 作業功能設定檔
  ) { }

  /**
   * 作業上傳互聯應用
   * 報表由後端上傳
   */
  public uploadCc(language: string): Observable<any> {
    return this.uploadCcList(language).pipe(
      switchMap(
        (uploadList: any[]) => {
          const params: any = {
            // product: this.dwAppId,
            program: uploadList,
            // reportProduct: this.dwProduct,
            language: language
          };

          params.program = uploadList;

          return this.http.post('DWSys/functionPermission/IAM', params);
        },
        (uploadList: any[], response: any) => {
          if (response.message) {
            response.message = response.message.replace(/\r\n/g, '<br>'); // 將換行字元(\r\n)替換成html的換行標籤(<br>)
          }

          return response;
        }
      )
    );
  }

  /**
   * 作業上傳互聯應用清單
   */
  public uploadCcList(language: string): Observable<any[]> {
    const _dwProgramInfoJson = this.programInfoListJsonService.dwProgramInfoJson;

    return this.languageI18nRepository.basic(language).pipe(
      switchMap(
        (translation: any) => {
          return this.programInfoListJsonService.programListJsonMap$;
        },
        (translation: any, programListJsonMap: IDwOperationMap) => {
          const translationProg = translation.prog ? translation.prog : {};
          const translationPage = translation.page ? translation.page : {};
          const uploadList: any[] = [];

          Object.keys(programListJsonMap).forEach(
            key => {
              const prog = programListJsonMap[key];
              let needAdd = true; // 是否列入上傳清單

              // 沒有模組歸屬不做模組切分，不上傳到IAM做權限控管
              if (prog.module === 'root') {
                needAdd = false;
              }

              if (needAdd) {
                // 平台共用程式不用列
                _dwProgramInfoJson.forEach(
                  frameworkProgram => {
                    if (key === frameworkProgram.id) {
                      needAdd = false;
                    }
                  }
                );
              }

              if (needAdd) {
                let progName = translationProg[key] ? translationProg[key] : '';

                if (progName === '') {
                  progName = key;
                }

                const newItem = {
                  code: key,
                  module: prog.module,
                  name: progName,
                  page: [],
                  action: []
                };

                // 頁面權限基本資料 // 頁面限制 allow,disabled
                const pageKeyLen = this.programPageListJson.length;
                for (let pageKeyIdx = 0; pageKeyIdx < pageKeyLen; pageKeyIdx++) {
                  if (this.programPageListJson[pageKeyIdx].programId === newItem.code) {
                    const pageList: any[] = this.programPageListJson[pageKeyIdx].page;
                    pageList.forEach(
                      pageItem => {
                        let pageName = translationPage[pageItem.id] ? translationPage[pageItem.id] : '';
                        if (pageName === '') {
                          pageName = pageItem.id;
                        }

                        newItem.page.push(
                          {
                            id: pageItem.id,
                            name: pageName,
                            restriction: 'allow,disabled' // API以第一個值為預設值
                          }
                        );
                      }
                    );
                  }
                }

                // 功能按鈕權限基本資料 // 按鈕功能限制 allow, hidden, disabled
                const actionKeyLen = this.programActionListJson.length;
                for (let actionKeyIdx = 0; actionKeyIdx < actionKeyLen; actionKeyIdx++) {
                  if (this.programActionListJson[actionKeyIdx].programId === newItem.code) {
                    const actionList: any[] = this.programActionListJson[actionKeyIdx].action;
                    actionList.forEach(
                      actionItem => {
                        let actionName = actionItem.name ? actionItem.name : '';
                        if (actionName === '') {
                          actionName = actionItem.id;
                        }

                        newItem.action.push(
                          {
                            id: actionItem.id,
                            name: actionName,
                            restriction: 'allow,hidden,disabled' // API以第一個值為預設值
                          }
                        );
                      }
                    );
                  }
                }

                uploadList.push(newItem);
              }
            }
          );

          // const params: any = {
          //   // product: this.dwAppId,
          //   program: uploadList,
          //   // reportProduct: this.dwProduct,
          //   language: language
          // };

          // params.program = uploadList;
          return uploadList;
        }
      )
    );
  }
}
