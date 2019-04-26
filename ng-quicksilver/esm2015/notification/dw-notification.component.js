/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DwMessageComponent } from '../message/dw-message.component';
import { DwNotificationContainerComponent } from './dw-notification-container.component';
export class DwNotificationComponent extends DwMessageComponent {
    /**
     * @param {?} container
     */
    constructor(container) {
        super(container);
        this.container = container;
    }
    /**
     * @return {?}
     */
    close() {
        this._destroy();
    }
    /**
     * @return {?}
     */
    get state() {
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
    }
}
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
DwNotificationComponent.ctorParameters = () => [
    { type: DwNotificationContainerComponent }
];
DwNotificationComponent.propDecorators = {
    dwMessage: [{ type: Input }]
};
function DwNotificationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwNotificationComponent.prototype.dwMessage;
    /** @type {?} */
    DwNotificationComponent.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL2R3LW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFtQ3pGLE1BQU0sOEJBQStCLFNBQVEsa0JBQWtCOzs7O0lBRzdELFlBQW9CLFNBQTJDO1FBQzdELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURDLGNBQVMsR0FBVCxTQUFTLENBQWtDO0tBRTlEOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUVELElBQUksS0FBSztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sb0JBQWlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLG9CQUFpQixZQUFZLENBQUMsRUFBRTtnQkFDN0csT0FBTyxXQUFXLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsT0FBTyxZQUFZLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUM3QjtLQUVGOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxpQkFBaUI7Z0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVztvQkFDbkIsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RSxVQUFVLENBQUMsaUJBQWlCLEVBQUU7NEJBQzVCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUM7NEJBQ2xELE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7d0JBQ0YsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3dCQUNyRSxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLENBQUM7NEJBQ25ELE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7d0JBQ0YsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7NEJBQ25CLE9BQU8sRUFBVSxDQUFDOzRCQUNsQixTQUFTLEVBQVEsYUFBYTs0QkFDOUIsZUFBZSxFQUFFLE9BQU87eUJBQ3pCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsWUFBWSxFQUFFOzRCQUN2QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFVLENBQUM7Z0NBQ2xCLFNBQVMsRUFBUSxXQUFXO2dDQUM1QixlQUFlLEVBQUUsT0FBTzs2QkFDekIsQ0FBQzs0QkFDRixPQUFPLENBQUMsY0FBYyxDQUFDO3lCQUN4QixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsaXdEQUF3RDthQUN6RDs7OztZQWxDUSxnQ0FBZ0M7Ozt3QkFvQ3RDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4uL21lc3NhZ2UvZHctbWVzc2FnZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEd05vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHctbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkIH0gZnJvbSAnLi9kdy1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LW5vdGlmaWNhdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcbiAgICAgIHN0YXRlKCdlbnRlclJpZ2h0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyUmlnaHQnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1JSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnZW50ZXJMZWZ0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyTGVmdCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01JSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnbGVhdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gbGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICAgOiAnLi9kdy1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3Tm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgRHdNZXNzYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZHdNZXNzYWdlOiBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IER3Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoY29udGFpbmVyKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmR3TWVzc2FnZS5zdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRhaW5lci5jb25maWcuZHdQbGFjZW1lbnQgPT09ICd0b3BMZWZ0JykgfHwgKHRoaXMuY29udGFpbmVyLmNvbmZpZy5kd1BsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnKSkge1xuICAgICAgICByZXR1cm4gJ2VudGVyTGVmdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2VudGVyUmlnaHQnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kd01lc3NhZ2Uuc3RhdGU7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==