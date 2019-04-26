import { Component, OnInit } from '@angular/core';

import { DemoOrderServerPagingService } from '../../../shared/select-modal/demo-order/demo-order-server-paging.service';
import { MockDataClientPagingService } from '../../../shared/select-modal/mock-data/mock-data-client-paging.service';



@Component({
  selector: 'app-input-listwin',
  templateUrl: './input-listwin.component.html',
  styleUrls: ['./input-listwin.component.css']
})
export class InputListwinComponent implements OnInit {
  demoOrder = [];
  mockData = [];

  constructor(
    private demoOrderServerPagingService: DemoOrderServerPagingService,
    private mockDataClientPagingService: MockDataClientPagingService
  ) {
  }


  // (展開設定) - 左邊點擊事件-多選-[接後端 - 服務控制分頁] - subscribe
  public openDemoOrderWin($event: MouseEvent): void {
    $event.preventDefault();
    this.demoOrderServerPagingService.open(this.demoOrder).subscribe(
      (result) => {
        this.demoOrder = result;
      }
    );
  }


  // (展開設定) - 中間點擊事件-單選 - [資料一次全帶入: ng-zrror 的 Table 控制分頁]
  public openMockDataWin($event: MouseEvent): void {
    $event.preventDefault();

    this.mockDataClientPagingService.open(this.mockData).subscribe(
      (result) => {
        this.mockData = result;
      }
    );
  }


  ngOnInit(): void {
  }

}
