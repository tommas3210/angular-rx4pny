import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

import { IDwOperationInfoListService } from './interface/operation-info-list-service.interface';
import { IDwOperationMap, IDwProgram } from './interface/program.interface';
import { DwOperationInfoAttributeService } from './operation-info-attribute.service';
import { DwProgramInfoListJsonService } from './program-info-list-json.service';
import { IDwMenuConfigMap } from '../components/menu/interface/menu.interface';
import { DwMenuService } from '../components/menu/service/menu.service';
import { DwAuthService } from '../auth/auth.service';

@Injectable()
export class DwOperationInfoListService implements IDwOperationInfoListService {
  private operationSubject: BehaviorSubject<IDwOperationMap>;

  constructor(
    private operationInfoAttributeService: DwOperationInfoAttributeService,
    private programInfoListJsonService: DwProgramInfoListJsonService,
    private menuService: DwMenuService,
    private authService: DwAuthService
  ) {
    this.operationSubject = new BehaviorSubject<IDwOperationMap>(null);
    let subscription: Subscription;

    let isInit = false;
    this.authService.isLoggedIn$.subscribe(
      value => {
        if (!value) {
          isInit = false;
          const operationMap: IDwOperationMap = null;
          this.operationSubject.next(operationMap);
          if (subscription) {
            subscription.unsubscribe();
          }
        } else if (!isInit) {
          isInit = true;

          subscription = this.programInfoListJsonService.programListJsonMap$.pipe(
            switchMap(
              (programListJsonMap: IDwOperationMap) => {
                return this.menuService.getMenuConfigMap();
              },
              (programListJsonMap: IDwOperationMap, getMenuConfigMap: IDwMenuConfigMap) => {
                let operationMapResult: IDwOperationMap = null;

                if (getMenuConfigMap !== null) { // 等Menu準備好再合併
                  operationMapResult = this.concatSource(programListJsonMap, getMenuConfigMap);
                }

                return operationMapResult;
              }
            )
          ).subscribe(
            (operationMap: IDwOperationMap) => {
              this.operationSubject.next(operationMap);
            },
            error => {
              console.log(error);
              this.operationSubject.next({});
            }
          );
        }
      }
    );
  }

  /**
   * 取得作業清單
   */
  get operationListMap$(): Observable<IDwOperationMap> {
    return this.operationSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  private concatSource(programListJsonMap: IDwOperationMap, getMenuConfigMap: IDwMenuConfigMap): IDwOperationMap {
    const operationMap: IDwOperationMap = Object.assign({}, programListJsonMap);
    const _dwProgramInfoJson = this.programInfoListJsonService.dwProgramInfoJson;

    Object.keys(getMenuConfigMap).forEach(
      key => {
        // 作業
        let programId = getMenuConfigMap[key].programId;
        const programCode = getMenuConfigMap[key].code;
        const menuType = getMenuConfigMap[key].type;
        const openMode = getMenuConfigMap[key].openMode;
        let programBase = '';

        if (menuType === 'fineReport' || (menuType === 'externalUrl' && openMode === 'iframe')) {
          _dwProgramInfoJson.forEach(
            dwProg => {
              if (dwProg.type === menuType) {
                programBase = dwProg.id;
              }
            }
          );

          programId = key; // menuId當作業編號，為了查詢設定在Menu的資訊
          const base = programListJsonMap[programBase];
          if (!programListJsonMap[programId] && base) {
            const newProg: IDwProgram = {
              module: base.module,
              type: base.type || '',
              routerLink: base.routerLink || '', // 頁面路由
              menuId: programId,
              code: programCode,
              parameter: getMenuConfigMap[key].parameter // 作業參數
            };

            this.operationInfoAttributeService.setAttr(newProg);
            newProg.routerLink = newProg.routerLink + '/' + programId; // 路由參數帶入作業編號，才能取得作業資訊，例如取作業參數
            operationMap[programId] = newProg;
          }
        }
      }
    );

    return Object.assign({}, operationMap);
  }
}
