import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { DwAuthService } from '../auth/auth.service';
// import { DwIamMenuRepository } from './repository';
import { IDwAuthorizedList } from '../auth/model/authorized.model';
import { DwDapHttpClient } from '../partner/dap/http/dap-http-client';
// import { DwProgramInfoListJsonService } from '../program-info/program-info-list-json.service';
// import { IDwOperationMap } from '../program-info/interface/program.interface';


/**
 * IAM權限中心資料
 */
@Injectable()
export class DwIamPermissionInfoService {
  isPermissionInit: boolean = false;
  // iamTree: IDwAuthorized[]; // 權限中心資料
  // iamSubject: BehaviorSubject<IDwAuthorized[]>;
  authorizedList: IDwAuthorizedList; // 作業與功能權限
  authorizedListSubject: BehaviorSubject<IDwAuthorizedList>;

  constructor(
    private authService: DwAuthService,
    // private dwIamMenuRepository: DwIamMenuRepository,
    // private programInfoListJsonService: DwProgramInfoListJsonService,
    private http: DwDapHttpClient
  ) {
    // this.iamTree = null;
    // this.iamSubject = new BehaviorSubject<IDwAuthorized[]>(this.iamTree);

    this.authorizedList = null;
    this.authorizedListSubject = new BehaviorSubject<IDwAuthorizedList>(this.authorizedList);

    this.authService.isLoggedIn$.subscribe(
      value => {
        if (!value) {
          this.clearPermissTree();
        } else if (!this.isPermissionInit) {

          this.isPermissionInit = true;

          const queryStringParam: object = {
            params: {
              // product: this.dwAppId,
              code: JSON.stringify([])
            }
          };
          // this.dwIamMenuRepository.getMenu().subscribe( // 取權限中心資料
          this.authorizedList = {}; // 作業與功能權限

          this.http.get('DWSys/functionPermission', queryStringParam).subscribe(
            (response: any) => {
              // response = { // test
              //   'data': [
              //     {
              //       'code': 'dw-sys-menu',
              //       'page': [],
              //       'action': []
              //     },
              //     {
              //       'code': 'dw-order',
              //       'page': [
              //         {
              //           'id': 'dw-order-modify',
              //           'restriction': 'allow'
              //         }
              //       ],
              //       'action': [
              //         {
              //           'id': 'query',
              //           'restriction': 'allow'
              //         },
              //         {
              //           'id': 'modify',
              //           'restriction': 'disabled'
              //         }
              //       ]
              //     },
              //     {
              //       'code': 'dw-group',
              //       'page': [
              //         {
              //           'id': 'dw-group-add',
              //           'restriction': 'allow'
              //         },
              //         {
              //           'id': 'dw-group-view',
              //           'restriction': 'disabled'
              //         }
              //       ],
              //       'action': [
              //         {
              //           'id': 'query',
              //           'restriction': 'allow'
              //         },
              //         {
              //           'id': 'view',
              //           'restriction': 'disabled'
              //         }
              //       ]
              //     }
              //   ],
              //   'message': '测试内容eic8',
              //   'success': true
              // };

              const respData = response.data;
              respData.forEach(
                resp => {
                  // 作業功能按鈕
                  if (resp.hasOwnProperty('action')) {
                    resp.action.forEach(
                      respAction => {
                        if (respAction === '') {
                          respAction = 'disabled';
                        }
                      }
                    );
                  }

                  const mainPage = {
                    programId: resp.code,
                    action: resp.action ? resp.action : []
                  };

                  this.authorizedList[resp.code] = mainPage;

                  // 作業內部頁面
                  if (resp.hasOwnProperty('page')) {
                    const pageLen = resp.page.length;
                    for (let j = 0; j < pageLen; j++) {
                      if (resp.page[j].restriction === 'allow') {
                        const otherPage = {
                          programId: mainPage.programId,
                          action: resp.action ? resp.action : []
                        };

                        otherPage.action = [];

                        this.authorizedList[resp.page[j].id] = otherPage;
                      }
                    }
                  }
                }
              );

              this.authorizedListSubject.next(this.authorizedList);
            },
            (error: any) => {
              console.log(error);
              this.authorizedList = undefined;
              this.authorizedListSubject.next(this.authorizedList);
              this.clearPermissTree(); // 清空，避免再次登入時誤以為有error
            }
          );

          // this.dwIamMenuRepository.getMenu().subscribe( // 取權限中心資料
          //   response => {
          //     this.iamTree = <IDwAuthorized[]>response.datas;
          //     this.iamSubject.next(this.iamTree); // 廣播權限中心資料

          //     this.programInfoListJsonService.programListJsonMap$.subscribe(
          //       (programListJsonMap: IDwOperationMap) => {
          //         this.iamTreeDelivery(this.iamTree, programListJsonMap, true);
          //         this.authorizedListSubject.next(this.authorizedList);
          //       }
          //     );
          //   },
          //   (error: any) => {
          //     console.log(error);
          //     this.iamTree = [];
          //     this.iamSubject.next(this.iamTree);

          //     this.setAuthorizedList(null, true);
          //     this.authorizedListSubject.next(this.authorizedList);
          //   }
          // );

        }
      },
      error => {
        console.log(error);
        this.clearPermissTree();
      }
    );
  }

  /**
   * 取權限中心資料
   */
  // get iamTree$(): Observable<IDwAuthorized[]> {
  //   return this.iamSubject.asObservable().pipe(
  //     filter(obsData => obsData !== null), // 不廣播初始值
  //     distinctUntilChanged() // 有改變時才廣播
  //   );
  // }

  /**
   * 取作業與功能權限
   * null：登出時未取權限, []:已登入時無權限, undefined: 發生http error
   */
  get authorizedList$(): Observable<IDwAuthorizedList> {
    return this.authorizedListSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  /**
   * 設定作業與功能權限
   */
  // private setAuthorizedList(permissItem: IDwAuthorized, isInit: boolean): void {
  //   if (isInit) { // 初始化
  //     this.authorizedList = {}; // 作業與功能權限
  //   } else {
  //     const obj: IDwAuthorized = JSON.parse(JSON.stringify(permissItem));

  //     // 作業
  //     if (obj.programId) {
  //       const mainPage = {
  //         programId: obj.programId,
  //         action: []
  //       };

  //       // 功能權限
  //       if (obj.hasOwnProperty('action')) {
  //         mainPage.action = obj.action;
  //       }

  //       this.authorizedList[obj.programId] = mainPage;

  //       // 作業內部頁面
  //       if (obj.hasOwnProperty('page')) {
  //         const pageLen = obj.page.length;
  //         for (let j = 0; j < pageLen; j++) {
  //           const otherPage = {
  //             programId: obj.programId,
  //             action: []
  //           };

  //           this.authorizedList[obj.page[j].id] = otherPage;
  //         }
  //       }
  //     }
  //   }
  // }

  // private iamTreeDelivery(permissTree: IDwAuthorized[], programListJsonMap: IDwOperationMap, isInit: boolean): void {
  //   if (isInit) {
  //     this.setAuthorizedList(null, isInit);
  //     isInit = false;
  //   }

  //   const len = permissTree.length;
  //   for (let i = 0; i < len; i++) {
  //     const permissItem: IDwAuthorized = JSON.parse(JSON.stringify(permissTree[i]));

  //     this.setAuthorizedList(permissItem, isInit);

  //     if (permissItem.child.length > 0) {
  //       this.iamTreeDelivery(permissItem.child, programListJsonMap, isInit);
  //     }
  //   }
  // }

  /**
   * 清除權限資料
   */
  private clearPermissTree(): void {
    this.isPermissionInit = false;
    // 清空權限中心資料
    // this.iamTree = [];
    // this.iamSubject.next(this.iamTree);
    // 清空作業與功能權限
    // this.setAuthorizedList(null, true);
    this.authorizedList = null; // null：登出時未取權限, []:已登入時無權限, undefined: 發生http error
    this.authorizedListSubject.next(this.authorizedList);
  }
}
