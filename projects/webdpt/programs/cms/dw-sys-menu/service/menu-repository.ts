import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DwDapHttpClient, DwHttpClientOptionsService } from '@webdpt/framework';

@Injectable()
export class DwSysMenuRepository {

  constructor(
    private http: DwDapHttpClient,
    private dwHttpClientOptionsService: DwHttpClientOptionsService
  ) { }

  /**
   * 讀取選單詳情
   */
  menuRead(ids: Array<string>): Observable<any> {
    const queryStringParam: object = {
      params: {
        ids: JSON.stringify(ids)
      }
    };

    return this.http.get('DWSys/menu', queryStringParam);
  }

  /**
   * 讀取選單結構
   */
  tree(ids: Array<string>): Observable<any> {
    const queryStringParam: object = {
      params: {
        ids: JSON.stringify(ids)
      }
    };

    return this.http.get('DWSys/menu/tree', queryStringParam);
    // return this.http.get(url, { params: {oids: JSON.stringify([])}}); // CRUD

    // if (ids.length === 0) {
    //   return Observable.create(
    //     observer => {
    //       const test = [
    //         {
    //           'sequence': 1,
    //           'id': 'showcase',
    //           'version': 3,
    //           'type': 'category',
    //           'icon_class': 'anticon anticon-appstore',
    //           'code': '',
    //           'submenu': [
    //             {
    //               'sequence': 1,
    //               'id': 'dw-demo1',
    //               'version': 3,
    //               'type': 'category',
    //               'icon_class': 'anticon anticon-appstore',
    //               'code': '',
    //               'submenu': [
    //                 {
    //                   'sequence': 1,
    //                   'id': '1119', // dw-order
    //                   'version': 3,
    //                   'type': 'program',
    //                   'icon_class': 'anticon anticon-chrome',
    //                   'code': 'dw-order',
    //                   'submenu': []
    //                 },
    //                 {
    //                   'sequence': 2,
    //                   'id': 'dw-mock-demo',
    //                   'version': 3,
    //                   'type': 'program',
    //                   'icon_class': 'anticon anticon-chrome',
    //                   'code': 'dw-mock-demo',
    //                   'submenu': []
    //                 }
    //               ]
    //             },
    //             {
    //               'sequence': 2,
    //               'id': 'dw-doc',
    //               'version': 3,
    //               'type': 'category',
    //               'icon_class': 'anticon anticon-book',
    //               'code': '',
    //               'submenu': [
    //                 {
    //                   'sequence': 1,
    //                   'id': 'dw-doc-ng-quicksilver',
    //                   'version': 3,
    //                   'type': 'externalUrl',
    //                   'icon_class': '',
    //                   'code': '',
    //                   'submenu': []
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ];

    //       observer.next(test);
    //     }
    //   );
    // } else {
    //   return Observable.create(
    //     observer => {
    //       const test = [
    //         {
    //           'sequence': 1,
    //           'id': 'dw-demo1',
    //           'version': 3,
    //           'type': 'category',
    //           'icon_class': 'anticon anticon-appstore',
    //           'code': '',
    //           'submenu': [
    //             {
    //               'sequence': 1,
    //               'id': '1119', // dw-order
    //               'version': 3,
    //               'type': 'program',
    //               'icon_class': 'anticon anticon-chrome',
    //               'code': 'dw-order',
    //               'submenu': []
    //             },
    //             {
    //               'sequence': 2,
    //               'id': 'dw-group',
    //               'version': 1,
    //               'type': 'program',
    //               'icon_class': 'anticon anticon-chrome',
    //               'code': 'dw-group',
    //               'submenu': []
    //             },
    //             {
    //               'sequence': 3,
    //               'id': 'dw-asis',
    //               'version': 1,
    //               'type': 'program',
    //               'icon_class': 'anticon anticon-chrome',
    //               'code': 'dw-asis',
    //               'submenu': []
    //             },
    //             {
    //               'sequence': 4,
    //               'id': 'dw-mock-demo',
    //               'version': 3,
    //               'type': 'program',
    //               'icon_class': 'anticon anticon-chrome',
    //               'code': 'dw-mock-demo',
    //               'submenu': []
    //             }
    //           ]
    //         }
    //       ];

    //       observer.next(test);
    //     }
    //   );
    // }
  }

  /**
   * 按語言別獲取選單名稱
   *
   * [spinning=true] 是否顯示HTTP加載遮罩
   */
  language(language: string, spinning: boolean = true): Observable<any> {
    let queryStringParam: object = {
      params: {
        language: language
      }
    };

    if (!spinning) {
      queryStringParam = this.dwHttpClientOptionsService.setLoadMaskCfg(queryStringParam, false);
    }

    return this.http.get('DWSys/menu/language', queryStringParam).pipe(
      map(
        (response: any) => {
          const sourceList: Array<any> = response.data.dw_menu_language;
          const langList = {};
          // 轉換成翻譯檔格式key,value
          sourceList.forEach(
            (item: any) => {
              if (item.name !== '') {
                langList[item.menu_id] = item.name;
              }
            }
          );

          return langList;
        }
      )
    );

    // return Observable.create(
    //   observer => {
    //     const response = {
    //       'data': {
    //         'dw_menu_language': [
    //           {
    //             'menu_id': 'dw-demo-cms',
    //             'name': '平台系統管理'
    //           },
    //           {
    //             'menu_id': 'showcase',
    //             'name': '範本'
    //           },
    //           {
    //             'menu_id': 'dw-demo1',
    //             'name': '作業範本'
    //           },
    //           {
    //             'menu_id': 'dw-demo2',
    //             'name': '功能範本'
    //           },
    //           {
    //             'menu_id': 'dw-doc',
    //             'name': '參考文件'
    //           },
    //           {
    //             'menu_id': 'dw-doc-typescript',
    //             'name': 'TypeScript官網'
    //           },
    //           {
    //             'menu_id': 'dw-doc-angular',
    //             'name': 'Angular官網'
    //           },
    //           {
    //             'menu_id': 'dw-doc-ng-quicksilver',
    //             'name': 'UI套件'
    //           }
    //         ]
    //       }
    //     };
    //     const arr = response.data.dw_menu_language;
    //     const langData = {};
    //     arr.forEach(
    //       item => {
    //         langData[item.menu_id] = item.name;
    //       }
    //     );
    //     observer.next(langData);
    //   }
    // );
  }
}
