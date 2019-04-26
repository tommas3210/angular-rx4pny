import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DwUserService } from '../../../../auth/user.service';
import { DwSystemConfigService } from '../../../../config/config.service';

@Injectable()
export class DwIframeFrSignService {
  private frSignUrl: string;

  constructor(
    private http: HttpClient,
    private userService: DwUserService,
    private configService: DwSystemConfigService
  ) {
    this.configService.get('frSignUrl').subscribe(
      url => this.frSignUrl = url
    );
  }

  /**
   * 取帆軟報表數位簽章
   * 需要4個參數: 1[原始作業或報表編號], 2[報表類型], 3[路徑path].
   */
  public getFrSign(formlet: string, code: string, op: string): Observable<object> {
    const token = this.userService.getUser('token');

    const postBody = {
      targetReportletPath: formlet, // 路徑path.
      targetReportletId: code, // 帆軟報表數位簽章需代入[原始作業或報表編號]
      targetReportletOp: op // 報表類型(page 或 view), default為空字串.
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'token': token
      })
    };

    // 直接調用報表主機的回參, 會少一層response.
    return this.http.post<any>(this.frSignUrl, postBody, httpOptions).pipe(
      map(
        response => {
          const info = {
            fr_dscurrenttime: response.fr_dscurrenttime ? response.fr_dscurrenttime : '',
            fr_dsigninfo: response.fr_dsigninfo ? response.fr_dsigninfo : '',
            token: token ? token : ''
          };

          return info;
        }
      )
    );
  }
}
