import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { IDwIframe } from '../../../components/dw-iframe/interface/dw-iframe.interface';
import { DwIframeItemSubjectService } from '../../../components/dw-tab-routing/service/iframe-item-subject.service';
import { DW_USING_TAB } from '../../../config/system.config';
import { DwIframeFinereportInfoService } from './service/iframe-finereport-info.service';

@Component({
  selector: 'dw-iframe-finereport',
  templateUrl: './finereport.component.html',
  styleUrls: ['./finereport.component.css']
})
export class DwIframeFinereportComponent implements OnInit {
  itemRxjsBehavior: BehaviorSubject<IDwIframe>; // 需要透過 service 取得 url.
  item: IDwIframe = {
    url: '',
    type: 'fineReport'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private iframeItemSubjectService: DwIframeItemSubjectService,
    private iframeFinereportInfoService: DwIframeFinereportInfoService,
    @Inject(DW_USING_TAB) public usingTab: boolean
  ) {
    this.itemRxjsBehavior = new BehaviorSubject<IDwIframe>(null);
    // this.item.attr = 'allow-forms allow-scripts allow-popups'; // iframe 的 屬性. 要配合報表主機設定
  }

  ngOnInit(): void {
    // TODO：[多頁佈局首頁內嵌iframe非同步混亂] (dw-tab-routing.component.ts)
    // 暫解：首頁內嵌iframe時，1.提供programId='home'做辨識 2.作業資訊指定type
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const programId = paramMap.get('programId');

        this.iframeFinereportInfoService.finereportInfo(programId).subscribe(
          (iframeData: IDwIframe) => {
            this.item = iframeData;
            // this.item.programId = 'home';
            this.itemRxjsBehavior.next(this.item);

            if (this.usingTab && this.item.url !== '') {
              this.iframeItemSubjectService.item = this.item;
            }
          },
          error => {
            console.log(error);
          },
          () => {
            // console.log('DwIframeFinereportComponent complete:' + programId);
          }
        );
      }
    );
  }
}
