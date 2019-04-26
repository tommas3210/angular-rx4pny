/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DwMessageContainerComponent } from './dw-message-container.component';
var DwMessageComponent = /** @class */ (function () {
    function DwMessageComponent(_messageContainer) {
        this._messageContainer = _messageContainer;
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    DwMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._options = this.dwMessage.options;
        if (this._options.dwAnimate) {
            this.dwMessage.state = 'enter';
        }
        this._autoErase = this._options.dwDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.dwPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.dwPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    /**
     * @return {?}
     */
    DwMessageComponent.prototype._destroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._options.dwAnimate) {
            this.dwMessage.state = 'leave';
            setTimeout(function () { return _this._messageContainer.removeMessage(_this.dwMessage.messageId); }, 200);
        }
        else {
            this._messageContainer.removeMessage(this.dwMessage.messageId);
        }
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype._initErase = /**
     * @return {?}
     */
    function () {
        this._eraseTTL = this._options.dwDuration;
        this._eraseTimingStart = Date.now();
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype._updateTTL = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype._startEraseTimeout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            this._eraseTimer = window.setTimeout(function () { return _this._destroy(); }, this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    /**
     * @return {?}
     */
    DwMessageComponent.prototype._clearEraseTimeout = /**
     * @return {?}
     */
    function () {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
    DwMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-message',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('enterLeave', [
                            state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
                            transition('* => enter', [
                                style({ opacity: 0, transform: 'translateY(-50%)' }),
                                animate('100ms linear')
                            ]),
                            state('leave', style({ opacity: 0, transform: 'translateY(-50%)' })),
                            transition('* => leave', [
                                style({ opacity: 1, transform: 'translateY(0)' }),
                                animate('100ms linear')
                            ])
                        ])
                    ],
                    template: "<div class=\"ant-message-notice\"\n  [@enterLeave]=\"dwMessage.state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div class=\"ant-message-notice-content\">\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + dwMessage.type\">\n      <ng-container [ngSwitch]=\"dwMessage.type\">\n        <i *ngSwitchCase=\"'success'\" class=\"anticon anticon-check-circle\"></i>\n        <i *ngSwitchCase=\"'info'\" class=\"anticon anticon-info-circle\"></i>\n        <i *ngSwitchCase=\"'warning'\" class=\"anticon anticon-exclamation-circle\"></i>\n        <i *ngSwitchCase=\"'error'\" class=\"anticon anticon-cross-circle\"></i>\n        <i *ngSwitchCase=\"'loading'\" class=\"anticon anticon-spin anticon-loading\"></i>\n      </ng-container>\n      <span [innerHTML]=\"dwMessage.content\"></span>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwMessageComponent.ctorParameters = function () { return [
        { type: DwMessageContainerComponent }
    ]; };
    DwMessageComponent.propDecorators = {
        dwMessage: [{ type: Input }],
        dwIndex: [{ type: Input }]
    };
    return DwMessageComponent;
}());
export { DwMessageComponent };
function DwMessageComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMessageComponent.prototype.dwMessage;
    /** @type {?} */
    DwMessageComponent.prototype.dwIndex;
    /** @type {?} */
    DwMessageComponent.prototype._options;
    /** @type {?} */
    DwMessageComponent.prototype._autoErase;
    /** @type {?} */
    DwMessageComponent.prototype._eraseTimer;
    /** @type {?} */
    DwMessageComponent.prototype._eraseTimingStart;
    /** @type {?} */
    DwMessageComponent.prototype._eraseTTL;
    /** @type {?} */
    DwMessageComponent.prototype._messageContainer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvZHctbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBbUM3RSw0QkFBb0IsaUJBQThDO1FBQTlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7MkJBSnBDLElBQUk7S0FLakM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBRXZDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFL0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxvQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFD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QUFDO2dDQUNqRCxPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsdTJCQUFtRDtpQkFDcEQ7Ozs7Z0JBckJRLDJCQUEyQjs7OzRCQXdCakMsS0FBSzswQkFDTCxLQUFLOzs2QkF2Q1I7O1NBb0NhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd01lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2R3LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd01lc3NhZ2VEYXRhRmlsbGVkLCBEd01lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vZHctbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctbWVzc2FnZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcbiAgICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2xlYXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgIDogJy4vZHctbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGR3TWVzc2FnZTogRHdNZXNzYWdlRGF0YUZpbGxlZDtcbiAgQElucHV0KCkgZHdJbmRleDogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBfb3B0aW9uczogRHdNZXNzYWdlRGF0YU9wdGlvbnM7IC8vIFNob3J0Y3V0IHJlZmVyZW5jZSB0byBkd01lc3NhZ2Uub3B0aW9uc1xuXG4gIC8vIEZvciBhdXRvIGVyYXNpbmcoZGVzdHJveSkgc2VsZlxuICBwcml2YXRlIF9hdXRvRXJhc2U6IGJvb2xlYW47IC8vIFdoZXRoZXIgcmVjb3JkIHRpbWVvdXQgdG8gYXV0byBkZXN0cm95IHNlbGZcbiAgcHJpdmF0ZSBfZXJhc2VUaW1lcjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBfZXJhc2VUaW1pbmdTdGFydDogbnVtYmVyO1xuICBwcml2YXRlIF9lcmFzZVRUTDogbnVtYmVyOyAvLyBUaW1lIHRvIGxpdmVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlQ29udGFpbmVyOiBEd01lc3NhZ2VDb250YWluZXJDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLmR3TWVzc2FnZS5vcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZHdBbmltYXRlKSB7XG4gICAgICB0aGlzLmR3TWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5kd0R1cmF0aW9uID4gMDtcblxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2luaXRFcmFzZSgpO1xuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLmR3UGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xuICAgICAgdGhpcy5fdXBkYXRlVFRMKCk7XG4gICAgfVxuICB9XG5cbiAgb25MZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMuZHdQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIHNlbGZcbiAgcHJvdGVjdGVkIF9kZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmR3QW5pbWF0ZSkge1xuICAgICAgdGhpcy5kd01lc3NhZ2Uuc3RhdGUgPSAnbGVhdmUnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5kd01lc3NhZ2UubWVzc2FnZUlkKSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMuZHdNZXNzYWdlLm1lc3NhZ2VJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdEVyYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VyYXNlVFRMID0gdGhpcy5fb3B0aW9ucy5kd0R1cmF0aW9uO1xuICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVFRMKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2VyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0RXJhc2VUaW1lb3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lcmFzZVRUTCA+IDApIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7IC8vIFRvIHByZXZlbnQgY2FsbGluZyBfc3RhcnRFcmFzZVRpbWVvdXQoKSBtb3JlIHRpbWVzIHRvIGNyZWF0ZSBtb3JlIHRpbWVyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGVzdHJveSgpLCB0aGlzLl9lcmFzZVRUTCk7XG4gICAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyRXJhc2VUaW1lb3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lcmFzZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2VyYXNlVGltZXIpO1xuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=