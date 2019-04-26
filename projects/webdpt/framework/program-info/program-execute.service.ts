import { Injectable, Inject } from '@angular/core';
import { Router, Params, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DwOperationInfoService } from './operation-info.service';
import { IDwRouteInfo } from '../components/dw-tab-routing/interface/route-info.interface';
import { DW_USING_TAB } from '../config/system.config';
import { DwTabRoutingService } from '../components/dw-tabset/tab-routing.service';


/**
 * 執行作業
 *
 * @export
 */
@Injectable()
export class DwProgramExecuteService {

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private dwTabRoutingService: DwTabRoutingService,
    @Inject(DW_USING_TAB) private _usingTab: boolean,
    private dwOperationInfoService: DwOperationInfoService
  ) { }

  /**
   * 依作業編號執行
   */
  public byId(programId: string, queryParams?: Params): void {
    if (programId !== '') {
      this.dwOperationInfoService.operationInfo$(programId).subscribe(
        operationInfo => {
          this.exec(programId, operationInfo.routerLink, queryParams);
        }
      ).unsubscribe();
    }
  }

  /**
   * Menu執行作業
   */
  public byMenu(menuId: string, programId: string, queryParams?: Params): void {
    if (menuId !== '' && programId !== '') {
      this.dwOperationInfoService.operationInfo$(programId).subscribe(
        operationInfo => {
          this.exec(programId, operationInfo.routerLink, queryParams, menuId);
        }
      ).unsubscribe();
    }
  }

  private exec(programId: string, routerLink: string, queryParams?: Params, menuId?: string): boolean {
    if (programId !== '') {
      if (this._usingTab) {
        if (!menuId) {
          menuId = '';
        }

        const routeInfo: IDwRouteInfo = {
          id: programId,
          menuId: menuId,
          name: '',
          routerLink: routerLink,
          queryParams: queryParams
        };

        this.dwTabRoutingService.create(routeInfo);
      } else {
        // 導航額外選項
        const navigationExtras: NavigationExtras = {
          relativeTo: this.activatedRoute, // 相對路徑導頁
          queryParams: queryParams
        };
        this.router.navigate([routerLink], navigationExtras);
      }

      return true;
    } else {
      return false;
    }
  }
}
