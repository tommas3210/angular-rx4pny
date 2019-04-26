import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DwUserService } from '../../../../auth/user.service';
import { DwSystemConfigService } from '../../../../config/config.service';
import { DW_USING_FRSSO, DW_MULTI_TENANT } from '../../../../config/system.config';
import { DwFinereportConfigService } from './finereport-config.service';

@Injectable()
export class DwFinereportAuthService {
  private frUrl: string;

  constructor(
    private http: HttpClient,
    private userService: DwUserService,
    private configService: DwSystemConfigService,
    private dwFinereportConfigService: DwFinereportConfigService,
    @Inject(DW_USING_FRSSO) private usingFrSSO: boolean,
    @Inject(DW_MULTI_TENANT) protected dwMultiTenant: boolean
  ) {
    this.configService.get('frUrl').subscribe(
      url => this.frUrl = url
    );
  }

  /**
   * 帆軟報表是否啟用SSO
   */
  private frSsoEnable(): boolean {
    let ret = this.dwFinereportConfigService.frEnable();

    if (this.usingFrSSO && ret) {
      ret = true;
    } else {
      ret = false;
    }

    return ret;
  }

  /**
   * FineReport 的 SSO login.
   *
   * returns {void}
   */
  fineReportlogin(): void {
    if (!this.frSsoEnable()) {
      return;
    }

    const userToken = this.userService.getUser('token');
    const userId = this.userService.getUser('userId');
    const tenantId = this.userService.getUser('tenantId');

    if (!userToken || !userId || !tenantId) {
      return;
    }

    // fineReport SSO 登入時, fr_username 要用[租戶ID:用戶ID].
    // 雲端場景一：前端使用「tenantId:userId」與「token」登入
    let fr_username = tenantId + ':' + userId;
    // 地端場景一：前端使用「userId」與「token」登入
    if (!this.dwMultiTenant) {
      fr_username = userId;
    }
    const url = `${this.frUrl}?op=fs_load&cmd=sso&fr_username=${fr_username}&fr_password=${userToken}`;
    this.http.jsonp(url, 'callback').subscribe();
  }

  /**
   * FineReport 的 SSO logout.
   *
   * returns {void}
   */
  fineReportLogout(): void {
    if (!this.frSsoEnable()) {
      return;
    }

    const userToken = this.userService.getUser('token');
    if (!userToken) {
      return;
    }

    // fineReport SSO 登出時.
    const url = `${this.frUrl}?op=fs_load&cmd=ssout`;
    this.http.jsonp(url, 'callback').subscribe();
  }


}
