/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { DW_MESSAGE_CONFIG, DW_MESSAGE_DEFAULT_CONFIG } from './dw-message-config';
export class DwMessageContainerComponent {
    /**
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(defaultConfig, config) {
        this.messages = [];
        this.config = {};
        this.setConfig(Object.assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = Object.assign({}, this.config, config);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createMessage(message) {
        if (this.messages.length >= this.config.dwMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
    }
    /**
     * @param {?} messageId
     * @return {?}
     */
    removeMessage(messageId) {
        this.messages.some((message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                return true;
            }
        });
    }
    /**
     * @return {?}
     */
    removeMessageAll() {
        this.messages = [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _mergeMessageOptions(options) {
        /** @type {?} */
        const defaultOptions = {
            dwDuration: this.config.dwDuration,
            dwAnimate: this.config.dwAnimate,
            dwPauseOnHover: this.config.dwPauseOnHover
        };
        return Object.assign({}, defaultOptions, options);
    }
}
DwMessageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-message-container',
                preserveWhitespaces: false,
                template: "<div class=\"ant-message\">\n  <dw-message *ngFor=\"let message of messages; let i = index\" [dwMessage]=\"message\" [dwIndex]=\"i\"></dw-message>\n</div>"
            }] }
];
/** @nocollapse */
DwMessageContainerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_MESSAGE_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_MESSAGE_CONFIG,] }] }
];
function DwMessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMessageContainerComponent.prototype.messages;
    /** @type {?} */
    DwMessageContainerComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtZXNzYWdlL2R3LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVFwRyxNQUFNOzs7OztJQUlKLFlBQTJELGFBQThCLEVBQ3RDLE1BQXVCO3dCQUp4QyxFQUFFO3NCQUNWLEVBQUU7UUFJMUIsSUFBSSxDQUFDLFNBQVMsbUJBQU0sYUFBYSxFQUFLLE1BQU0sRUFBRyxDQUFDO0tBQ2pEOzs7OztJQUVELFNBQVMsQ0FBQyxNQUF1QjtRQUMvQixJQUFJLENBQUMsTUFBTSxxQkFBUSxJQUFJLENBQUMsTUFBTSxFQUFLLE1BQU0sQ0FBRSxDQUFDO0tBQzdDOzs7OztJQUdELGFBQWEsQ0FBQyxPQUE0QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFHRCxhQUFhLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFHRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFHUyxvQkFBb0IsQ0FBQyxPQUE2Qjs7UUFDMUQsTUFBTSxjQUFjLEdBQXlCO1lBQzNDLFVBQVUsRUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDdEMsU0FBUyxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1NBQzNDLENBQUM7UUFDRix5QkFBWSxjQUFjLEVBQUssT0FBTyxFQUFHO0tBQzFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxzQkFBc0I7Z0JBQzNDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHNLQUE0RDthQUM3RDs7Ozs0Q0FLYyxRQUFRLFlBQUksTUFBTSxTQUFDLHlCQUF5Qjs0Q0FDNUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdNZXNzYWdlQ29uZmlnLCBEV19NRVNTQUdFX0NPTkZJRywgRFdfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vZHctbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgRHdNZXNzYWdlRGF0YUZpbGxlZCwgRHdNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL2R3LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LW1lc3NhZ2UtY29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd01lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xuICBtZXNzYWdlczogRHdNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XG4gIGNvbmZpZzogRHdNZXNzYWdlQ29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChEV19NRVNTQUdFX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBEd01lc3NhZ2VDb25maWcsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRFdfTUVTU0FHRV9DT05GSUcpIGNvbmZpZzogRHdNZXNzYWdlQ29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb25maWcoeyAuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfSk7XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBEd01lc3NhZ2VDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcsIC4uLmNvbmZpZyB9O1xuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbmV3IG1lc3NhZ2VcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBEd01lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLmR3TWF4U3RhY2spIHtcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGEgbWVzc2FnZSBieSBtZXNzYWdlSWRcbiAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMuc29tZSgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZUlkKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIG1lc3NhZ2VzXG4gIHJlbW92ZU1lc3NhZ2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICB9XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXRvbSBtZXNzYWdlIG9wdGlvbnNcbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM6IER3TWVzc2FnZURhdGFPcHRpb25zKTogRHdNZXNzYWdlRGF0YU9wdGlvbnMge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBEd01lc3NhZ2VEYXRhT3B0aW9ucyA9IHtcbiAgICAgIGR3RHVyYXRpb24gICAgOiB0aGlzLmNvbmZpZy5kd0R1cmF0aW9uLFxuICAgICAgZHdBbmltYXRlICAgICA6IHRoaXMuY29uZmlnLmR3QW5pbWF0ZSxcbiAgICAgIGR3UGF1c2VPbkhvdmVyOiB0aGlzLmNvbmZpZy5kd1BhdXNlT25Ib3ZlclxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgfVxufVxuIl19