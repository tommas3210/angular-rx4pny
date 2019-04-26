import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { DwModalService } from 'ng-quicksilver';
import { TranslateService } from '@ngx-translate/core';

import { DwUserService } from '../../../auth/user.service';
import { DwAuthService } from '../../../auth/auth.service';
import { APP_DEFAULT, DW_USING_TAB } from '../../../config/system.config';


@Component({
  selector: 'dw-tenant-block',
  templateUrl: './tenant-block.component.html',
  styleUrls: ['./tenant-block.component.css']
})

export class DwTenantBlockComponent implements OnInit, OnDestroy {
  userDetail: any = {}; // 登入者詳細資料.
  currTenantList = []; // 租戶清單.

  private tenantSubscription: Subscription;
  visibleFromIcon: boolean;
  visibleFromTitle: boolean;

  constructor(
    private authService: DwAuthService,
    private userService: DwUserService,
    private dwModalService: DwModalService,
    private translateService: TranslateService,
    private router: Router,
    @Inject(APP_DEFAULT) private defaultApp: string,
    @Inject(DW_USING_TAB) private usingTab: boolean
  ) {
    // 當 sesstion storage 值改變後, this.userDetail 也會跟著改變.
    this.userDetail = this.userService.getUserDetail();
  }


  ngOnDestroy(): void {
    // 對服務 subscribe() 的要解除, 如果是 httpClient 或是 router 則不用.
    if (this.tenantSubscription) {
      this.tenantSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // 取得租戶清單
    this.tenantSubscription = this.userService.currTenantList$.subscribe(
      lists => {
        this.currTenantList = lists;
      }
    );
  }

  /**
   * 改變租戶清單
   */
  changeTenant(tenantSid: number): void {
    console.log('tenantSid>>>', tenantSid);
    if (this.userDetail.tenantSid === tenantSid) {
      return;
    }

    this.dwModalService.confirm({
      dwIconType: 'exclamation-circle',
      dwTitle: this.translateService.instant('dw-tenant-changeTenant-title'),
      dwContent: this.translateService.instant('dw-tenant-changeTenant-content'),
      dwOnOk: (): void => {
        // 改變租戶時, 關閉租戶選單.
        this.visibleFromIcon = false;
        this.visibleFromTitle = false;

        // 只是改變租戶, 並非跑登入程序.
        this.authService.tokenRefreshTenant(tenantSid).subscribe(
          () => {
            this.router.navigateByUrl(this.defaultApp);
        });
      }
    });

  }

}
