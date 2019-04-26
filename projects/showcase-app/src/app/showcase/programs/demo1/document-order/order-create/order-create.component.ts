import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DwModalService } from 'ng-quicksilver';
import { DwRoutingMessageService, APP_DATE_FORMAT, DwDocument, DwDataTable, DwDataRow, IDwDocumentOnSave } from '@webdpt/framework'; // 訊息傳遞
import { DocumentOrderProductInfo, DocumentOrderEnumModel } from '../model';
import { DocumentOrderSlaveEditComponent } from '../modals/order-slave-edit/order-slave-edit.component';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { CustomerClientPagingService } from '../modals/customer/customer-client-paging.service';

@Component({
  selector: 'app-dw-document-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
  providers: [DwDocument]
})
export class DocumentOrderCreateComponent implements OnInit, IDwDocumentOnSave {

  public orderid: string = ''; // 訂單編號
  public searchLoading: boolean = false; // 是否顯示加載中
  public statusList = DocumentOrderEnumModel.orderStatus; // 訂單狀態枚舉
  public master: DwDataTable; // 單頭
  public detail: DwDataTable; // 單身

  // 訂單明細開窗用，僅為了展示開窗標題可以使用template
  @ViewChild('modifyDetailTitle') modifyTitle: TemplateRef<any>;
  @ViewChild('addDetailTitle') addDetailTitle: TemplateRef<any>;

  constructor(public route: ActivatedRoute,
    public router: Router,
    public dwModalService: DwModalService,
    public dwMessage: DwRoutingMessageService,
    public doc: DwDocument,
    private customerClientPagingService: CustomerClientPagingService,
    @Inject(APP_DATE_FORMAT) public dwDateFormat: string
  ) {
    this.doc.registerEvent(this);
    // 取得路由參數
    this.route.queryParamMap.subscribe(
      params => {
        this.orderid = params.get('orderId') || '';
      }
    );
  }

  ngOnInit(): void {
    this.orderid = (new Date()).getTime().toString();
    this.master = new DwDataTable([{
      address: '',
      customerid: '',
      employeeid: '',
      employeename: '',
      gender: '',
      orderdate: '',
      orderid: this.orderid,
      status: '',
      totalcount: ''
    }]);
    this.detail = new DwDataTable([]);

    this.doc.addControl('demo_order', this.master);
    this.doc.addControl('demo_orderdetail', this.detail);
    // 透過Http
  }

  /**
   * 刪除訂單明細
   *
   * @param {number} idx
   * @memberof OrderModifyComponent
   */
  public detailDelete(idx: number): void {
    this.detail.deleteRow(idx);
  }

  /**
   * 修改訂單明細
   *
   * @param {number} idx
   * @memberof OrderModifyComponent
   */
  public detailModify(idx: number): void {

    // let productInfo: DocumentOrderProductInfo;

    // const modifyFn = (): void => {
    //   this.detail[idx] = productInfo;
    //   this.totalSum();
    // };

    const control = (this.detail.controls[idx] as DwDataRow).getRawValue();
    control.productCode = control.productid;
    console.log(control, 'rawvalue');
    this.dwModalService.create({
      dwTitle: this.modifyTitle,
      dwContent: DocumentOrderSlaveEditComponent,
      dwOnOk: (data: any): void => {
        const detail = data.detailEdit;
        console.log(detail);
        this.detail.updateRow(idx, {
          count: 0,
          deliverystatus: detail.distributionStatus,
          price: detail.price,
          productid: detail.productCode,
          quantity: detail.quantity,
          seq: detail.seq
        });

      },
      dwOnCancel(): void { },
      dwFooter: null,
      dwComponentParams: {
        cmd: 'modify',
        orderDetail: new DocumentOrderProductInfo(control)
      }
    });

  }

  /**
   * 新增訂單明細
   *
   * @memberof OrderModifyComponent
   */
  public detailAdd(): void {

    this.dwModalService.create({
      dwTitle: this.addDetailTitle,
      dwContent: DocumentOrderSlaveEditComponent,
      dwOnOk: (data: any): void => {
        const detail = data.detailEdit;
        console.log(detail);
        this.detail.insertRow(0, {
          count: 0,
          deliverystatus: detail.distributionStatus,
          price: detail.price,
          productid: detail.productCode,
          quantity: detail.quantity,
          seq: this.getNewSeq(),
          orderid: this.orderid
        });

        console.log(this.detail);
      },
      dwOnCancel(): void { },
      dwFooter: null,
      dwComponentParams: { cmd: 'add' }
    });

  }

  public saving(): boolean {
    // const row = (this.master.at(0) as DwDataRow);
    // const orderdate = row.get('orderdate').value;
    // const newdate = (new DatePipe('zh_tw')).transform(orderdate, 'yyyy/MM/dd');
    // row.get('orderdate').setValue(newdate);
    // console.log('saving:' , row.get('orderdate').value);

    return true;
  }

  public saved(result: any): void {
    const msg = result.message;
    if (result.success) {
      if (msg) {
        this.dwMessage.addToRoute(msg);
      }
      this.router.navigate(['../'], { relativeTo: this.route }); // 相對路徑導頁
    } else {
      if (msg) {
        this.dwMessage.success(msg); // 單一訊息顯示
      }
    }
  }

  getNewSeq(): number {
    let seq = 0;
    this.detail.controls.forEach(control => {
      if (control.get('seq').value > seq) {
        seq = control.get('seq').value;
      }
    });

    return seq + 1;
  }

  /**
   * 取消
   *
   * @memberof OrderModifyComponent
   */
  public cancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route }); // 相對路徑導頁
  }

  onAfterSaveOrder(result: any): void {
    console.log(result);
    const msg = result.message;
    if (result.success) {
      if (msg) {
        this.dwMessage.addToRoute(msg);
      }
      this.router.navigate(['../'], { relativeTo: this.route }); // 相對路徑導頁
    } else {
      if (msg) {
        this.dwMessage.success(msg); // 單一訊息顯示
      }
    }
  }

  /**
   * 客戶編號的開窗 mock
   *
   * param {MouseEvent} $event
   */
  public openCustomerDataWin($event: MouseEvent): void {
    $event.preventDefault();
    const row = (this.master.at(0) as DwDataRow);
    const customerid = row.get('customerid').value;

    this.customerClientPagingService.open([customerid]).subscribe(
      (result) => {
        row.get('customerid').setValue(result[0]);
      }
    );
  }

}
