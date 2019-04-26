/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { DW_MESSAGE_CONFIG, DW_MESSAGE_DEFAULT_CONFIG } from './dw-message-config';
var DwMessageContainerComponent = /** @class */ (function () {
    function DwMessageContainerComponent(defaultConfig, config) {
        this.messages = [];
        this.config = {};
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DwMessageContainerComponent.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = tslib_1.__assign({}, this.config, config);
    };
    // Create a new message
    /**
     * @param {?} message
     * @return {?}
     */
    DwMessageContainerComponent.prototype.createMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.dwMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
    };
    // Remove a message by messageId
    /**
     * @param {?} messageId
     * @return {?}
     */
    DwMessageContainerComponent.prototype.removeMessage = /**
     * @param {?} messageId
     * @return {?}
     */
    function (messageId) {
        var _this = this;
        this.messages.some(function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                return true;
            }
        });
    };
    // Remove all messages
    /**
     * @return {?}
     */
    DwMessageContainerComponent.prototype.removeMessageAll = /**
     * @return {?}
     */
    function () {
        this.messages = [];
    };
    // Merge default options and cutom message options
    /**
     * @param {?} options
     * @return {?}
     */
    DwMessageContainerComponent.prototype._mergeMessageOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            dwDuration: this.config.dwDuration,
            dwAnimate: this.config.dwAnimate,
            dwPauseOnHover: this.config.dwPauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    DwMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-message-container',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\">\n  <dw-message *ngFor=\"let message of messages; let i = index\" [dwMessage]=\"message\" [dwIndex]=\"i\"></dw-message>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwMessageContainerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_MESSAGE_CONFIG,] }] }
    ]; };
    return DwMessageContainerComponent;
}());
export { DwMessageContainerComponent };
function DwMessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMessageContainerComponent.prototype.messages;
    /** @type {?} */
    DwMessageContainerComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtZXNzYWdlL2R3LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQW1CLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBWWxHLHFDQUEyRCxhQUE4QixFQUN0QyxNQUF1Qjt3QkFKeEMsRUFBRTtzQkFDVixFQUFFO1FBSTFCLElBQUksQ0FBQyxTQUFTLHNCQUFNLGFBQWEsRUFBSyxNQUFNLEVBQUcsQ0FBQztLQUNqRDs7Ozs7SUFFRCwrQ0FBUzs7OztJQUFULFVBQVUsTUFBdUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sd0JBQVEsSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLENBQUUsQ0FBQztLQUM3QztJQUVELHVCQUF1Qjs7Ozs7SUFDdkIsbURBQWE7Ozs7SUFBYixVQUFjLE9BQTRCO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0lBRUQsZ0NBQWdDOzs7OztJQUNoQyxtREFBYTs7OztJQUFiLFVBQWMsU0FBaUI7UUFBL0IsaUJBT0M7UUFOQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsc0JBQXNCOzs7O0lBQ3RCLHNEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7SUFFRCxrREFBa0Q7Ozs7O0lBQ3hDLDBEQUFvQjs7OztJQUE5QixVQUErQixPQUE2Qjs7UUFDMUQsSUFBTSxjQUFjLEdBQXlCO1lBQzNDLFVBQVUsRUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDdEMsU0FBUyxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1NBQzNDLENBQUM7UUFDRiw0QkFBWSxjQUFjLEVBQUssT0FBTyxFQUFHO0tBQzFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxzQkFBc0I7b0JBQzNDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHNLQUE0RDtpQkFDN0Q7Ozs7Z0RBS2MsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7Z0RBQzVDLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOztzQ0FmbkQ7O1NBVWEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3TWVzc2FnZUNvbmZpZywgRFdfTUVTU0FHRV9DT05GSUcsIERXX01FU1NBR0VfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL2R3LW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IER3TWVzc2FnZURhdGFGaWxsZWQsIER3TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9kdy1tZXNzYWdlLmRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1tZXNzYWdlLWNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgbWVzc2FnZXM6IER3TWVzc2FnZURhdGFGaWxsZWRbXSA9IFtdO1xuICBjb25maWc6IER3TWVzc2FnZUNvbmZpZyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoRFdfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogRHdNZXNzYWdlQ29uZmlnLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERXX01FU1NBR0VfQ09ORklHKSBjb25maWc6IER3TWVzc2FnZUNvbmZpZykge1xuICAgIHRoaXMuc2V0Q29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pO1xuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZzogRHdNZXNzYWdlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIG5ldyBtZXNzYWdlXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogRHdNZXNzYWdlRGF0YUZpbGxlZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5kd01heFN0YWNrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgbWVzc2FnZS5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhtZXNzYWdlLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBhIG1lc3NhZ2UgYnkgbWVzc2FnZUlkXG4gIHJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnNvbWUoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlSWQgPT09IG1lc3NhZ2VJZCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGFsbCBtZXNzYWdlc1xuICByZW1vdmVNZXNzYWdlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgfVxuXG4gIC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyBhbmQgY3V0b20gbWVzc2FnZSBvcHRpb25zXG4gIHByb3RlY3RlZCBfbWVyZ2VNZXNzYWdlT3B0aW9ucyhvcHRpb25zOiBEd01lc3NhZ2VEYXRhT3B0aW9ucyk6IER3TWVzc2FnZURhdGFPcHRpb25zIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogRHdNZXNzYWdlRGF0YU9wdGlvbnMgPSB7XG4gICAgICBkd0R1cmF0aW9uICAgIDogdGhpcy5jb25maWcuZHdEdXJhdGlvbixcbiAgICAgIGR3QW5pbWF0ZSAgICAgOiB0aGlzLmNvbmZpZy5kd0FuaW1hdGUsXG4gICAgICBkd1BhdXNlT25Ib3ZlcjogdGhpcy5jb25maWcuZHdQYXVzZU9uSG92ZXJcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gIH1cbn1cbiJdfQ==