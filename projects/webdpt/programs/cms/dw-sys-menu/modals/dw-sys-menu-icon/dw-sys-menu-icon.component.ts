import { Component, OnInit, Input } from '@angular/core';
import { DwModalRef } from 'ng-quicksilver';

/**
 * 選擇圖示樣式
 */
@Component({
  selector: 'app-dw-sys-menu-icon',
  templateUrl: './dw-sys-menu-icon.component.html',
  styleUrls: ['./dw-sys-menu-icon.component.less']
})
export class DwSysMenuIconComponent implements OnInit {
  iconClassSelect = '';
  iconList = [
    'anticon anticon-profile',
    'anticon anticon-appstore',
    'anticon anticon-appstore-o',
    'anticon anticon-user',
    'anticon anticon-team',
    'anticon anticon-idcard',
    'anticon anticon-contacts',
    'anticon anticon-solution',
    'anticon anticon-tag-o',
    'anticon anticon-tag',
    'anticon anticon-line-chart',
    'anticon anticon-area-chart',
    'anticon anticon-pie-chart',
    'anticon anticon-bar-chart',
    'anticon anticon-dot-chart',
    'anticon anticon-credit-card',
    'anticon anticon-global',
    'anticon anticon-cloud-o',
    'anticon anticon-cloud',
    'anticon anticon-calendar',
    'anticon anticon-schedule',
    'anticon anticon-book',
    'anticon anticon-smile-o',
    'anticon anticon-smile',
    'anticon anticon-link',
    'anticon anticon-disconnect',
    'anticon anticon-star-o',
    'anticon anticon-star',
    'anticon anticon-heart-o',
    'anticon anticon-heart',
    'anticon anticon-aliwangwang-o',
    'anticon anticon-aliwangwang'
  ];

  @Input()
  set iconClass(iconClass: string) {
    this.iconClassSelect = iconClass;
  }

  constructor(
    private modalSubject: DwModalRef
  ) { }

  ngOnInit(): void {
  }

  public selected(item: string): void {
    this.iconClassSelect = item;
    this.emitDataOutside();
  }

  /**
   * 確定
   */
  public emitDataOutside(): void {
    this.modalSubject.triggerOk(); // 表示銷毀模式的時候會執行用戶傳入的選項中的onCancel還是的OnOK方法
  }

  /**
   * 取消
   */
  public handleCancel(e: any): void {
    this.modalSubject.triggerCancel();
  }

}
