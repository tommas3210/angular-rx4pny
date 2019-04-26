import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DwSelectModalService, IDwSelectModalCustomizeConfig, ApiServerPagingService } from '@webdpt/framework';


@Injectable()
export class DemoOrderServerPagingService {
  public config: IDwSelectModalCustomizeConfig;

  constructor(
    private selectModalService: DwSelectModalService,
    private http: HttpClient
  ) {
    this.http = http;
    this.config = {
      modalTitle: 'select-modal-demo-order-修改訂單明細',
      tableMultiSelect: true,
      tableIdField: 'orderid',
      tableNameField: 'orderdate',
      tableColDefs: [
        {title: 'select-modal-demo-order-訂單編號', field: 'orderid', width: '20%'},
        {title: 'select-modal-demo-order-訂單日期', field: 'orderdate', width: '20%'},
        {title: 'select-modal-demo-order-員工編號', field: 'employeeid', width: '20%'},
        {title: 'select-modal-demo-order-客戶編號', field: 'customerid', width: '20%'},
        {title: 'select-modal-demo-order-狀態碼', field: 'status', width: '20%'}
      ],
      dataSource: new ApiServerPagingService(
        this.http,
        'DEMO_DAP_CURRENT/DemoOrder/List',
        'demo_order',
        ['orderid', 'orderdate', 'employeeid', 'customerid']
      )
    };
  }

  public open(selected: Array<any>): Observable<any> {
    return this.selectModalService.open(this.config, selected);
  }

}
