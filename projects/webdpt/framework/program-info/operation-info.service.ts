import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

import { IDwProgram, IDwProgramData } from './interface/program.interface';
import { IDwOperationInfoService } from './interface/operation-info-service.interface';
import { DwOperationInfoListService } from './operation-info-list.service';
import { DwRouterInfoService } from '../router-info/router-info.service';

@Injectable()
export class DwOperationInfoService implements IDwOperationInfoService {
  constructor(
    private dwOperationInfoListService: DwOperationInfoListService,
    private dwRouterInfoService: DwRouterInfoService
  ) {
  }

  /**
   * 取得作業資訊
   */
  operationInfo$(programId: string): Observable<IDwProgram> {
    const programSubject = new BehaviorSubject<IDwProgram>(null);

    let program: IDwProgram = {
      module: '',
      type: '', // category, program
      routerLink: '', // 頁面路由
      menuId: '',
      code: '',
      parameter: [] // 作業參數
    };

    this.dwOperationInfoListService.operationListMap$.subscribe(
      list => {
        if (list !== null) {
          if (list[programId]) {
            program = list[programId];
          }
        }

        programSubject.next(program);
      },
      error => {
        programSubject.next(program);
      },
    );

    return programSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  /**
   * 從路由資訊中的作業編號查作業資訊
   *
   * @param activatedRoute 激活的路由
   */
  public routerOperationInfo(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<IDwProgramData> {
    let programId = '';

    const params = activatedRouteSnapshot.params;
    if (params.hasOwnProperty('programId')) {
      programId = params.programId;
    } else {
      programId = this.dwRouterInfoService.routeSnapshotProgramId(activatedRouteSnapshot);
    }

    return this.operationInfo$(programId).pipe(
      map(
        programMapItem => {
          const programData: IDwProgramData = {
            id: programId,
            module: programMapItem.module,
            type: programMapItem.type,
            routerLink: programMapItem.routerLink,
            menuId: programMapItem.menuId,
            code: programMapItem.code,
            parameter: programMapItem.parameter
          };

          return programData;
        }
      )
    );
  }
}
