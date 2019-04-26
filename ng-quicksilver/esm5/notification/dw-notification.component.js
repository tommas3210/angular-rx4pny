/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DwMessageComponent } from '../message/dw-message.component';
import { DwNotificationContainerComponent } from './dw-notification-container.component';
var DwNotificationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwNotificationComponent, _super);
    function DwNotificationComponent(container) {
        var _this = _super.call(this, container) || this;
        _this.container = container;
        return _this;
    }
    /**
     * @return {?}
     */
    DwNotificationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._destroy();
    };
    Object.defineProperty(DwNotificationComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwMessage.state === 'enter') {
                if ((this.container.config["dwPlacement"] === 'topLeft') || (this.container.config["dwPlacement"] === 'bottomLeft')) {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.dwMessage.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    DwNotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-notification',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('enterLeave', [
                            state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
                            transition('* => enterRight', [
                                style({ opacity: 0, transform: 'translateX(5%)' }),
                                animate('100ms linear')
                            ]),
                            state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
                            transition('* => enterLeft', [
                                style({ opacity: 0, transform: 'translateX(-5%)' }),
                                animate('100ms linear')
                            ]),
                            state('leave', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            })),
                            transition('* => leave', [
                                style({
                                    opacity: 1,
                                    transform: 'scaleY(1)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('100ms linear')
                            ])
                        ])
                    ],
                    template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\n  [ngStyle]=\"dwMessage.options.dwStyle\"\n  [ngClass]=\"dwMessage.options.dwClass\"\n  [@enterLeave]=\"state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div *ngIf=\"!dwMessage.template\" class=\"ant-notification-notice-content\">\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': dwMessage.type !== 'blank' }\">\n      <div [class.ant-notification-notice-with-icon]=\"dwMessage.type !== 'blank'\">\n        <ng-container [ngSwitch]=\"dwMessage.type\">\n          <i *ngSwitchCase=\"'success'\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success anticon anticon-check-circle-o\"></i>\n          <i *ngSwitchCase=\"'info'\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info anticon anticon-info-circle-o\"></i>\n          <i *ngSwitchCase=\"'warning'\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning anticon anticon-exclamation-circle-o\"></i>\n          <i *ngSwitchCase=\"'error'\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error anticon anticon-cross-circle-o\"></i>\n        </ng-container>\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"dwMessage.title\"></div>\n        <div class=\"ant-notification-notice-description\" [innerHTML]=\"dwMessage.content\"></div>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngIf]=\"dwMessage.template\" [ngTemplateOutlet]=\"dwMessage.template\" [ngTemplateOutletContext]=\"{ $implicit: this }\"></ng-template>\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n    <span class=\"ant-notification-notice-close-x\"></span>\n  </a>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwNotificationComponent.ctorParameters = function () { return [
        { type: DwNotificationContainerComponent }
    ]; };
    DwNotificationComponent.propDecorators = {
        dwMessage: [{ type: Input }]
    };
    return DwNotificationComponent;
}(DwMessageComponent));
export { DwNotificationComponent };
function DwNotificationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwNotificationComponent.prototype.dwMessage;
    /** @type {?} */
    DwNotificationComponent.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL2R3LW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQW1DNUMsbURBQWtCO0lBRzdELGlDQUFvQixTQUEyQztRQUEvRCxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZtQixlQUFTLEdBQVQsU0FBUyxDQUFrQzs7S0FFOUQ7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7SUFFRCxzQkFBSSwwQ0FBSzs7OztRQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sb0JBQWlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLG9CQUFpQixZQUFZLENBQUMsRUFBRTtvQkFDN0csT0FBTyxXQUFXLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLE9BQU8sWUFBWSxDQUFDO2lCQUNyQjthQUNGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDN0I7U0FFRjs7O09BQUE7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtvQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFXO3dCQUNuQixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NEJBQ3RFLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQ0FDNUIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztnQ0FDbEQsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzs0QkFDRixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7NEJBQ3JFLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDM0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztnQ0FDbkQsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzs0QkFDRixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztnQ0FDbkIsT0FBTyxFQUFVLENBQUM7Z0NBQ2xCLFNBQVMsRUFBUSxhQUFhO2dDQUM5QixlQUFlLEVBQUUsT0FBTzs2QkFDekIsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxZQUFZLEVBQUU7Z0NBQ3ZCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQVUsQ0FBQztvQ0FDbEIsU0FBUyxFQUFRLFdBQVc7b0NBQzVCLGVBQWUsRUFBRSxPQUFPO2lDQUN6QixDQUFDO2dDQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7NkJBQ3hCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtvQkFDRCxpd0RBQXdEO2lCQUN6RDs7OztnQkFsQ1EsZ0NBQWdDOzs7NEJBb0N0QyxLQUFLOztrQ0EvQ1I7RUE4QzZDLGtCQUFrQjtTQUFsRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4uL21lc3NhZ2UvZHctbWVzc2FnZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEd05vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHctbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkIH0gZnJvbSAnLi9kdy1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LW5vdGlmaWNhdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcbiAgICAgIHN0YXRlKCdlbnRlclJpZ2h0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyUmlnaHQnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1JSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnZW50ZXJMZWZ0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyTGVmdCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01JSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnbGVhdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gbGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICAgOiAnLi9kdy1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3Tm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgRHdNZXNzYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZHdNZXNzYWdlOiBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IER3Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoY29udGFpbmVyKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmR3TWVzc2FnZS5zdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRhaW5lci5jb25maWcuZHdQbGFjZW1lbnQgPT09ICd0b3BMZWZ0JykgfHwgKHRoaXMuY29udGFpbmVyLmNvbmZpZy5kd1BsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnKSkge1xuICAgICAgICByZXR1cm4gJ2VudGVyTGVmdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2VudGVyUmlnaHQnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kd01lc3NhZ2Uuc3RhdGU7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==