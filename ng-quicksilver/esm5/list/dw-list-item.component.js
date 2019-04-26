/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { DwListItemMetaComponent } from './dw-list-item-meta.component';
var DwListItemComponent = /** @class */ (function () {
    function DwListItemComponent() {
        this.dwActions = [];
        this.isCon = false;
        this.conStr = '';
    }
    Object.defineProperty(DwListItemComponent.prototype, "dwContent", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.conStr = null;
                this.conTpl = value;
            }
            else {
                this.conStr = value;
            }
            this.isCon = !!value;
        },
        enumerable: true,
        configurable: true
    });
    DwListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-list-item',
                    template: "<ng-template #contentTpl>\n  <div *ngIf=\"isCon\" class=\"ant-list-item-content\" [ngClass]=\"{'ant-list-item-content-single': metas.length < 1}\">\n    <ng-container *ngIf=\"conStr; else conTpl\">{{ conStr }}</ng-container>\n  </div>\n</ng-template>\n<ng-template #actionsTpl>\n  <ul *ngIf=\"dwActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of dwActions; let idx = index\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"idx!==dwActions.length-1\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #mainTpl>\n  <ng-content></ng-content>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<div *ngIf=\"dwExtra; else mainTpl\" class=\"ant-list-item-extra-wrap\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"mainTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"dwExtra\"></ng-template>\n  </div>\n</div>",
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-list-item]': 'true'
                    }
                }] }
    ];
    DwListItemComponent.propDecorators = {
        dwActions: [{ type: Input }],
        metas: [{ type: ContentChildren, args: [DwListItemMetaComponent,] }],
        dwContent: [{ type: Input }],
        dwExtra: [{ type: Input }]
    };
    return DwListItemComponent;
}());
export { DwListItemComponent };
function DwListItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwListItemComponent.prototype.dwActions;
    /** @type {?} */
    DwListItemComponent.prototype.metas;
    /** @type {?} */
    DwListItemComponent.prototype.isCon;
    /** @type {?} */
    DwListItemComponent.prototype.conStr;
    /** @type {?} */
    DwListItemComponent.prototype.conTpl;
    /** @type {?} */
    DwListItemComponent.prototype.dwExtra;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibGlzdC9kdy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O3lCQVd2QixFQUFFO3FCQUd6QyxLQUFLO3NCQUNKLEVBQUU7O0lBR1gsc0JBQ0ksMENBQVM7Ozs7O1FBRGIsVUFDYyxLQUFpQztZQUM3QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN0Qjs7O09BQUE7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGNBQWM7b0JBQ25DLG9sQ0FBb0Q7b0JBQ3BELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLElBQUksRUFBaUI7d0JBQ25CLHVCQUF1QixFQUFFLE1BQU07cUJBQ2hDO2lCQUNGOzs7NEJBRUUsS0FBSzt3QkFDTCxlQUFlLFNBQUMsdUJBQXVCOzRCQU12QyxLQUFLOzBCQVlMLEtBQUs7OzhCQWhDUjs7U0FZYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL2R3LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1saXN0LWl0ZW1dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdMaXN0SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGR3QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdMaXN0SXRlbU1ldGFDb21wb25lbnQpIG1ldGFzOiBRdWVyeUxpc3Q8RHdMaXN0SXRlbU1ldGFDb21wb25lbnQ+O1xuXG4gIGlzQ29uID0gZmFsc2U7XG4gIGNvblN0ciA9ICcnO1xuICBjb25UcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuY29uU3RyID0gbnVsbDtcbiAgICAgIHRoaXMuY29uVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uU3RyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5pc0NvbiA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBkd0V4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbn1cbiJdfQ==