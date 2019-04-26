import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { IDwIframeFinereportService } from '../interface/finereport-service.interface';
import { IDwIframe } from '../../../../components/dw-iframe/interface/dw-iframe.interface';


@Injectable()
export class DwIframeFinereportService implements IDwIframeFinereportService {
  itemRxjsBehavior: BehaviorSubject<IDwIframe>;

  constructor() { }

  /**
   * Finereport動態串接網址可插入Service設計邏輯, 在 framework 裡, 不操作而直接 return.
   *
   * @param item: DwIframeComponent 操作 object.
   */
  public getIframeFinereportData(item: IDwIframe): Observable<IDwIframe> {
    this.itemRxjsBehavior = new BehaviorSubject<IDwIframe>(null);
    this.itemRxjsBehavior.next(item);

    return this.itemRxjsBehavior.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }
}
