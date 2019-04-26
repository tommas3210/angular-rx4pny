import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { DwPaginationComponent } from 'ng-quicksilver';

import { tap } from 'rxjs/operators';
import { DwQueryInfo } from '../../document/model/query';
import { Observable } from 'rxjs/internal/Observable';
import { AgGridNg2 } from 'ag-grid-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'dw-pagination-client-side-wrap',
  template: `
    <dw-pagination #pagination
                   [dwTotal]="dwTotal"
                   [dwPageIndex]="dwPageIndex"
                   [dwPageSize]="dwPageSize"
                   [dwShowQuickJumper]="dwShowQuickJumper"
                   [dwShowSizeChanger]="dwShowSizeChanger"
                   [dwSimple]="dwSimple"
                   [dwSize]="dwSize"
                   [dwPageSizeOptions]="dwPageSizeOptions"
                   [dwItemRender]="dwItemRender"
                   [dwShowTotal]="dwShowTotal"
                   [dwHideOnSinglePage]="dwHideOnSinglePage"
                   (dwPageIndexChange)="onDwPageIndexChange($event)"
                   (dwPageSizeChange)="onDwPageSizeChange($event)"
    ></dw-pagination>
    <ng-template #renderItemTemplate let-type let-page="page">
      <a class="ant-pagination-item-link" *ngIf="type!='page'"></a>
      <a *ngIf="type=='page'">{{page}}</a>
    </ng-template>
  `
})
export class DwPaginationClientSideWrapperComponent implements AfterViewInit {
  @ViewChild('pagination') paginationComponent: DwPaginationComponent;
  @ViewChild('renderItemTemplate') private _itemRender: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>;

  @Output() dataSourceChange = new EventEmitter();

  @Input() dataSource: {
    getDataList(pageNumber: number, pageSize: number, queryInfo: DwQueryInfo): Observable<any>;
  };
  @Input() agGridComponent: AgGridNg2;
  @Input() rowCount: number = 0;
  @Input() queryInfo: DwQueryInfo;
  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 10;
  @Input() dwTotal = 0;
  @Input() dwPageIndex;
  @Input() dwPageSize = 10;
  @Input() dwShowQuickJumper = false;
  @Input() dwShowSizeChanger = false;
  @Input() dwSimple = undefined;
  @Input() dwSize = '';
  @Input() dwPageSizeOptions = [];

  @Input()
  set dwItemRender(value: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>) {
    this._itemRender = value;
  }

  get dwItemRender(): TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }> {
    return this._itemRender;
  }

  @Input() dwShowTotal;
  @Input() dwHideOnSinglePage = false;
  @Output() dwPageSizeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dwPageIndexChange: EventEmitter<any> = new EventEmitter<any>();

  pageable: boolean = true;

  onDwPageSizeChange(pageSize: number): void {
    if (this.agGridComponent) {
      this.dwPageSizeChange.subscribe((size: number) => {
        this.dwPageSize = size;
        if (this.agGridComponent) {
          this.agGridComponent.api.paginationSetPageSize(size);
        }
      });
    }
    this.dwPageSizeChange.emit(pageSize);

  }

  onDwPageIndexChange(pageIndex: number): void {

    this.dwPageIndexChange.subscribe((index: number) => {
        this.dwPageIndex = index;
        if (this.agGridComponent) {
          this.agGridComponent.api.paginationGoToPage(index - 1);
        }
      }
    );

    this.dwPageIndexChange.emit(pageIndex);
  }

  ngAfterViewInit(): void {

    if (this.dataSource) {
      this.reSendData();
    }

  }

  reSendData(): void {

    this.dataSource.getDataList(this.pageNumber, this.pageSize, this.queryInfo).subscribe(
      (result) => {
        this.dataSourceChange.emit(result);
        this.dwTotal = result.data.length;
      }
    );
  }

}
