import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DwSelectModalService, IDwSelectModalCustomizeConfig } from '@webdpt/framework';
import { MockDataDataSourceService } from './mock-data-data-source.service';



@Injectable()
export class MockDataClientPagingService {
  public config: IDwSelectModalCustomizeConfig;

  constructor(
    private selectModalService: DwSelectModalService,
    private http: HttpClient
  ) {
    this.http = http;
    this.config = {
      modalTitle: 'select-modal-mock-data-開窗',
      tableMultiSelect: false,
      tableIdField: 'id',
      tableNameField: 'name',
      tableColDefs: [
        {title: 'select-modal-mock-data-客戶名稱', field: 'name', width: '20%'},
        {title: 'select-modal-mock-data-數量', field: 'quantity', width: '40%'},
        {title: 'select-modal-mock-data-送貨地址', field: 'address', width: '40%'}
      ],
      dataSource: new MockDataDataSourceService(this.http, 'showcase/demo2/input-listwin/getInputListwinData')
    };

  }

  public open(selected: Array<any>): Observable<any> {
    return this.selectModalService.open(this.config, selected);
  }

}
