import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { DwRoutingMessageService, APP_DATE_FORMAT, DwDocument, DwDataTable, IDwDocumentOnRead } from '@webdpt/framework'; // 訊息傳遞
import {  DocumentOrderEnumModel } from '../model';

@Component({
  selector: 'app-dw-document-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [DwDocument]
})
export class DocumentOrderDetailComponent implements OnInit, IDwDocumentOnRead {

  public orderid: string = ''; // 訂單編號
  public searchLoading: boolean; // 是否顯示加載中
  public statusList = DocumentOrderEnumModel.orderStatus; // 訂單狀態枚舉
  public master: DwDataTable; // 單頭
  public detail: DwDataTable; // 單身

  constructor(public route: ActivatedRoute,
    public router: Router,
    protected _route: ActivatedRoute,
    public dwMessage: DwRoutingMessageService,
    public doc: DwDocument,
    @Inject(APP_DATE_FORMAT) public dwDateFormat: string
  ) {
    // 取得路由參數
    this.route.queryParamMap.subscribe(
      params => {
        this.orderid = params.get('orderId') || '';
      }
    );

    this.master = new DwDataTable([]);
    this.detail = new DwDataTable([]);
  }

  ngOnInit(): void {
    this.onBeforeGetOrder();

    this.doc.read({ orderid: this.orderid }).subscribe(response => {
      this.master = response.demo_order;
      this.detail = response.demo_orderdetail;

      this.onAfterGetOrder();
    });
    // 透過Http
  }

  reading(): boolean {
    return true;
  }

  readed(): void {
  }

  public getStatusName(status: string): string {
    let statusName = '';
    for (const item of this.statusList) {
      if (item.value === status) {
        statusName = item.label;
      }
    }
    return statusName;
  }

  public modify(): void {
    const navigationExtras: NavigationExtras = {
      relativeTo: this._route, // 相對路徑導頁
      queryParams: { 'orderId': this.orderid }
    };

    this.router.navigate(['../dw-document-order-modify'], navigationExtras);
  }

  public list(): void {
    this.router.navigate(['../'], { relativeTo: this._route }); // 相對路徑導頁

  }

  onBeforeGetOrder(): void {
    this.searchLoading = true; // 是否顯示加載中
  }

  onAfterGetOrder(): void {
    this.searchLoading = false; // 是否顯示加載中
  }
}
