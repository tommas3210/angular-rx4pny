/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { DwListItemMetaComponent } from './dw-list-item-meta.component';
export class DwListItemComponent {
    constructor() {
        this.dwActions = [];
        this.isCon = false;
        this.conStr = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwContent(value) {
        if (value instanceof TemplateRef) {
            this.conStr = null;
            this.conTpl = value;
        }
        else {
            this.conStr = value;
        }
        this.isCon = !!value;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibGlzdC9kdy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVV4RSxNQUFNOzt5QkFDMkMsRUFBRTtxQkFHekMsS0FBSztzQkFDSixFQUFFOzs7Ozs7SUFHWCxJQUNJLFNBQVMsQ0FBQyxLQUFpQztRQUM3QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3RCOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxjQUFjO2dCQUNuQyxvbENBQW9EO2dCQUNwRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixJQUFJLEVBQWlCO29CQUNuQix1QkFBdUIsRUFBRSxNQUFNO2lCQUNoQzthQUNGOzs7d0JBRUUsS0FBSztvQkFDTCxlQUFlLFNBQUMsdUJBQXVCO3dCQU12QyxLQUFLO3NCQVlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL2R3LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1saXN0LWl0ZW1dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdMaXN0SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGR3QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdMaXN0SXRlbU1ldGFDb21wb25lbnQpIG1ldGFzOiBRdWVyeUxpc3Q8RHdMaXN0SXRlbU1ldGFDb21wb25lbnQ+O1xuXG4gIGlzQ29uID0gZmFsc2U7XG4gIGNvblN0ciA9ICcnO1xuICBjb25UcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuY29uU3RyID0gbnVsbDtcbiAgICAgIHRoaXMuY29uVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uU3RyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5pc0NvbiA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBkd0V4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbn1cbiJdfQ==