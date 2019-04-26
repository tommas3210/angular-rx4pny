import {
  Directive, ElementRef, Renderer, Input, Output, OnInit, OnDestroy,
  HostListener, EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { DwActionAuthorizedService } from './action-authorized.service';

/**
 * 功能權限
 * 支援的HTML Tags：<button>, <a>, <div>
 *
 * @export
 */
@Directive({
  selector: '[dwActionAuthorized]'
})
export class DwActionAuthorizedDirective implements OnInit, OnDestroy {
  @Input() dwAuthorizedId: string; // 作業權限ID
  @Input() dwActionId: string; // 功能按鈕ID
  @Input() dwDefaultAuthorized: string; // 預設權限 hidden, disabled
  @Output() dwClick = new EventEmitter(); // 在指令上創建自定義事件

  private clicks = new Subject();
  private clicksSubscription: Subscription;
  private clickAllow: boolean; // 是否可以觸發功能事件

  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private actionAuthorizedService: DwActionAuthorizedService, // 提供功能權限資料來源
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.clickAllow = true;

    // 實現事件的延時發送(抖動處理)，然後將它重新發送回父節點
    this.clicksSubscription = this.clicks.pipe(
      debounceTime(500) // 設置給定的毫秒數來延時發送點擊事件，避免短時間內重複點擊
    ).subscribe(
      e => this.dwClick.emit(e) // 調用 EventEmitter 實例上的 emit() 方法，發出事件回父節點
    );

    // 預設權限
    if (this.dwDefaultAuthorized) {
      this.seAttribute(this.dwDefaultAuthorized);
    }

    if (this.dwAuthorizedId) {
      // 已從畫面取得作業權限ID
      this.actionAuthorizedInit(this.dwAuthorizedId, this.dwActionId);
    } else {
      // 從路由取得作業權限ID
      this.activatedRoute.data.subscribe(
        value => {
          if (value['dwRouteData']) {
            if (value['dwRouteData'].hasOwnProperty('dwAuthId')) {
              this.dwAuthorizedId = value['dwRouteData'].dwAuthId;
            }
          }

          this.actionAuthorizedInit(this.dwAuthorizedId, this.dwActionId);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.clicksSubscription) { // dwActionId用在ng-template時，不會觸發onInit()
      this.clicksSubscription.unsubscribe(); // 取消訂閱
    }
  }

  // 攔截宿主元素的 click 事件
  @HostListener('click', ['$event', '$event.target']) clickEvent(event: any, elt: any): void {
    // 阻止瀏覽器的默認行為和事件冒泡
    event.preventDefault();
    event.stopPropagation();

    if (this.clickAllow && !elt.disabled) {
      this.clicks.next(event);
    }
  }

  /**
   * 功能權限初始化
   *
   * @param  dwAuthorizedId 作業權限ID
   * @param  dwActionId 功能按鈕ID
   */
  private actionAuthorizedInit(authorizedId: string, actionId: string): void {
    if (authorizedId && actionId) {
      this.actionAuthorizedService.setActionAuth(authorizedId, actionId);
      this.actionAuthorizedService.actionAuthorizedSubject$.subscribe(
        restriction => {
          this.seAttribute(restriction);
        },
        error => {
          console.log(actionId + ':' + error);
        }
      );
    }
  }

  private seAttribute(restriction: string): void {
    switch (restriction) {  // 按鈕功能限制：allow 允許, hidden 隱藏, disabled 禁用
      case 'allow': // 允許
        this.seAttributeAllow();
        this.clickAllow = true;
        break;
      case 'hidden': // 隱藏
        this.seAttributeHidden(true);
        this.clickAllow = false;
        break;
      case 'disabled': // 禁用
        this.seAttributeDisabled(true);
        this.seAttributeHidden(false);
        this.clickAllow = false;
        break;
    }
  }

  // 允許
  private seAttributeAllow(): void {
    this.seAttributeHidden(false);
    this.seAttributeDisabled(false);
  }

  // 隱藏
  private seAttributeHidden(isHidden: boolean): void {
    let display = '';
    if (isHidden) {
      display = 'none';
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'display', display);
  }

  // 禁用
  private seAttributeDisabled(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
    this.renderer.setElementClass(this.el.nativeElement, 'dw-f-action-disable', isDisabled);
  }
}
