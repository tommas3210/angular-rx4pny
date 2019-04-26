import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { DwModalService, DwModalRef } from 'ng-quicksilver';
import { DwExceptionComponent } from './exception.component';
import { APP_DEFAULT, DW_USING_TAB } from '../../config/system.config';
import { Location } from '@angular/common';
@Injectable()
export class DwExceptionService {
  private _descDetail: Array<string>;

  constructor(
    private router: Router,
    private dwModalService: DwModalService,
    private location: Location,
    @Inject(DW_USING_TAB) protected usingTab: boolean,
    @Inject(APP_DEFAULT) protected defaultApp: string
  ) { }

  get descDetail(): Array<string> {
    return this._descDetail;
  }

  public showMessage(status: number, _descDetail?: Array<string>): void {
    this._descDetail = _descDetail;
    switch (status) {
      default:
        // const errMsgUrl = '/exception/' + status;
        // this.router.navigate([errMsgUrl]);
        this.showMessageModal(status);
        break;
    }
  }

  public showMessageModal(status: number): void {
    const modalRef: DwModalRef = this.dwModalService.create({
      dwTitle: status.toString(),
      dwContent: DwExceptionComponent,
      // dwStyle: { top: '5px' },
      dwWidth: '80%',
      dwBodyStyle: { background: '#ececec' },
      dwFooter: null,
      dwOnOk: (data: any): void => { },
      dwOnCancel(): void { },
      dwComponentParams: { statusCode: status, statusDescDetail: this._descDetail }
    });

    // 只有當 ssologin 導無權限頁面時，才需導向首頁, 如果是因站內點選而出現的無權限頁面時, 只需出403,關閉403後不導頁.
    if (this.location.path().indexOf('sso-login') >= 0) {
      modalRef.afterClose.subscribe(() => {
        if (this.usingTab) {
          this.router.navigateByUrl(this.location.path());
        } else {
          this.router.navigateByUrl(this.defaultApp);
        }
      });
    }

  }
}
