/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, ElementRef, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { DwTooltipDirective } from '../tooltip/dw-tooltip.directive';
import { DwPopoverComponent } from './dw-popover.component';
var DwPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DwPopoverDirective, _super);
    function DwPopoverDirective(elementRef, hostView, resolver, renderer, tooltip) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip) || this;
        _this.factory = _this.resolver.resolveComponentFactory(DwPopoverComponent);
        return _this;
    }
    DwPopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-popover]'
                },] }
    ];
    /** @nocollapse */
    DwPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: DwPopoverComponent, decorators: [{ type: Optional }] }
    ]; };
    return DwPopoverDirective;
}(DwTooltipDirective));
export { DwPopoverDirective };
function DwPopoverDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPopoverDirective.prototype.factory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvZHctcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBS3BCLDhDQUFrQjtJQUd4RCw0QkFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLE9BQTJCO1FBTHpDLFlBTUUsa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUN6RDt3QkFUK0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQzs7S0FTeEc7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBVkMsVUFBVTtnQkFHVixnQkFBZ0I7Z0JBTGhCLHdCQUF3QjtnQkFJeEIsU0FBUztnQkFJRixrQkFBa0IsdUJBYXRCLFFBQVE7OzZCQXZCYjtFQWV3QyxrQkFBa0I7U0FBN0Msa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEd1Rvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuLi90b29sdGlwL2R3LXRvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IER3UG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vZHctcG9wb3Zlci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHctcG9wb3Zlcl0nXG59KVxuZXhwb3J0IGNsYXNzIER3UG9wb3ZlckRpcmVjdGl2ZSBleHRlbmRzIER3VG9vbHRpcERpcmVjdGl2ZSB7XG4gIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8RHdQb3BvdmVyQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRHdQb3BvdmVyQ29tcG9uZW50KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSB0b29sdGlwOiBEd1BvcG92ZXJDb21wb25lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0b29sdGlwKTtcbiAgfVxufVxuIl19