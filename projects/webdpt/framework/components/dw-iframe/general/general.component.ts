import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { IDwIframe } from '../interface/dw-iframe.interface';
import { DwIframeItemSubjectService } from '../../dw-tab-routing/service/iframe-item-subject.service';
import { DW_USING_TAB } from '../../../config/system.config';
import { DwIframeGeneralInfoService } from '../service/iframe-general-info.service';

@Component({
  selector: 'dw-iframe-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class DwIframeGeneralComponent implements OnInit {
  itemRxjsBehavior: BehaviorSubject<IDwIframe>; // 需要透過 service 取得 url.
  public item: IDwIframe = {
    url: '',
    type: 'externalUrl'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private iframeGeneralInfoService: DwIframeGeneralInfoService,
    private iframeItemSubjectService: DwIframeItemSubjectService,
    @Inject(DW_USING_TAB) public usingTab: boolean
  ) {
    this.itemRxjsBehavior = new BehaviorSubject<IDwIframe>(null);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const programId = paramMap.get('programId'); // menuId當作業編號，為了查詢設定在Menu的資訊

        this.iframeGeneralInfoService.generalInfo(programId).subscribe(
          (iframeData: IDwIframe) => {
            this.item = iframeData;
            this.itemRxjsBehavior.next(this.item);
            if (this.usingTab && this.item.url !== '') {
              this.iframeItemSubjectService.item = this.item;
            }
          },
          error => {
            console.log(error);
          },
          () => {
            // console.log('DwIframeGeneralComponent complete:' + programId);
          }
        );
      }
    );
  }
}
