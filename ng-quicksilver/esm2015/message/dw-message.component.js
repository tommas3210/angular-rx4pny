/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DwMessageContainerComponent } from './dw-message-container.component';
export class DwMessageComponent {
    /**
     * @param {?} _messageContainer
     */
    constructor(_messageContainer) {
        this._messageContainer = _messageContainer;
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._options = this.dwMessage.options;
        if (this._options.dwAnimate) {
            this.dwMessage.state = 'enter';
        }
        this._autoErase = this._options.dwDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this._autoErase && this._options.dwPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this._autoErase && this._options.dwPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    _destroy() {
        if (this._options.dwAnimate) {
            this.dwMessage.state = 'leave';
            setTimeout(() => this._messageContainer.removeMessage(this.dwMessage.messageId), 200);
        }
        else {
            this._messageContainer.removeMessage(this.dwMessage.messageId);
        }
    }
    /**
     * @return {?}
     */
    _initErase() {
        this._eraseTTL = this._options.dwDuration;
        this._eraseTimingStart = Date.now();
    }
    /**
     * @return {?}
     */
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    /**
     * @return {?}
     */
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            this._eraseTimer = window.setTimeout(() => this._destroy(), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    /**
     * @return {?}
     */
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
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
DwMessageComponent.ctorParameters = () => [
    { type: DwMessageContainerComponent }
];
DwMessageComponent.propDecorators = {
    dwMessage: [{ type: Input }],
    dwIndex: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvZHctbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFzQi9FLE1BQU07Ozs7SUFhSixZQUFvQixpQkFBOEM7UUFBOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjsyQkFKcEMsSUFBSTtLQUtqQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBRXZDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFL0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNB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cEQ7Ozs7WUFyQlEsMkJBQTJCOzs7d0JBd0JqQyxLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdNZXNzYWdlRGF0YUZpbGxlZCwgRHdNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL2R3LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LW1lc3NhZ2UnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXG4gICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdsZWF2ZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgICA6ICcuL2R3LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3TWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBkd01lc3NhZ2U6IER3TWVzc2FnZURhdGFGaWxsZWQ7XG4gIEBJbnB1dCgpIGR3SW5kZXg6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgX29wdGlvbnM6IER3TWVzc2FnZURhdGFPcHRpb25zOyAvLyBTaG9ydGN1dCByZWZlcmVuY2UgdG8gZHdNZXNzYWdlLm9wdGlvbnNcblxuICAvLyBGb3IgYXV0byBlcmFzaW5nKGRlc3Ryb3kpIHNlbGZcbiAgcHJpdmF0ZSBfYXV0b0VyYXNlOiBib29sZWFuOyAvLyBXaGV0aGVyIHJlY29yZCB0aW1lb3V0IHRvIGF1dG8gZGVzdHJveSBzZWxmXG4gIHByaXZhdGUgX2VyYXNlVGltZXI6IG51bWJlciA9IG51bGw7XG4gIHByaXZhdGUgX2VyYXNlVGltaW5nU3RhcnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXJhc2VUVEw6IG51bWJlcjsgLy8gVGltZSB0byBsaXZlXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZUNvbnRhaW5lcjogRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5kd01lc3NhZ2Uub3B0aW9ucztcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLmR3QW5pbWF0ZSkge1xuICAgICAgdGhpcy5kd01lc3NhZ2Uuc3RhdGUgPSAnZW50ZXInO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9FcmFzZSA9IHRoaXMuX29wdGlvbnMuZHdEdXJhdGlvbiA+IDA7XG5cbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XG4gICAgICB0aGlzLl9pbml0RXJhc2UoKTtcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBvbkVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5kd1BhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRUTCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTGVhdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLmR3UGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSBzZWxmXG4gIHByb3RlY3RlZCBfZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5kd0FuaW1hdGUpIHtcbiAgICAgIHRoaXMuZHdNZXNzYWdlLnN0YXRlID0gJ2xlYXZlJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMuZHdNZXNzYWdlLm1lc3NhZ2VJZCksIDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VDb250YWluZXIucmVtb3ZlTWVzc2FnZSh0aGlzLmR3TWVzc2FnZS5tZXNzYWdlSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRFcmFzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9lcmFzZVRUTCA9IHRoaXMuX29wdGlvbnMuZHdEdXJhdGlvbjtcbiAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRUTCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XG4gICAgICB0aGlzLl9lcmFzZVRUTCAtPSBEYXRlLm5vdygpIC0gdGhpcy5fZXJhc2VUaW1pbmdTdGFydDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGFydEVyYXNlVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZXJhc2VUVEwgPiAwKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpOyAvLyBUbyBwcmV2ZW50IGNhbGxpbmcgX3N0YXJ0RXJhc2VUaW1lb3V0KCkgbW9yZSB0aW1lcyB0byBjcmVhdGUgbW9yZSB0aW1lclxuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuX2Rlc3Ryb3koKSwgdGhpcy5fZXJhc2VUVEwpO1xuICAgICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhckVyYXNlVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZXJhc2VUaW1lciAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9lcmFzZVRpbWVyKTtcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19