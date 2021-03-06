/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
export class DwPopoverComponent extends DwToolTipComponent {
    constructor() {
        super(...arguments);
        this._prefix = 'ant-popover-placement';
    }
}
DwPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-popover',
                animations: [fadeAnimation],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"dwOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div class=\"ant-popover-title\" *ngIf=\"dwTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-popover-inner-content\">\n          <ng-container *ngIf=\"isContentString; else contentTemplate\">{{ dwContent }}</ng-container>\n          <ng-template #contentTemplate>\n            <ng-template [ngTemplateOutlet]=\"dwContent\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                preserveWhitespaces: false,
                styles: [`
    .ant-popover {
      position: relative;
    }
  `]
            }] }
];
DwPopoverComponent.propDecorators = {
    _title: [{ type: ContentChild, args: ['neverUsedTemplate',] }],
    _content: [{ type: ContentChild, args: ['dwTemplate',] }]
};
function DwPopoverComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPopoverComponent.prototype._prefix;
    /** @type {?} */
    DwPopoverComponent.prototype._title;
    /** @type {?} */
    DwPopoverComponent.prototype._content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvZHctcG9wb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWFyRSxNQUFNLHlCQUEwQixTQUFRLGtCQUFrQjs7O3VCQUM5Qyx1QkFBdUI7Ozs7WUFabEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxZQUFZO2dCQUNqQyxVQUFVLEVBQVcsQ0FBRSxhQUFhLENBQUU7Z0JBQ3RDLHE0Q0FBa0Q7Z0JBQ2xELG1CQUFtQixFQUFFLEtBQUs7eUJBQ0g7Ozs7R0FJdEI7YUFDRjs7O3FCQUdFLFlBQVksU0FBQyxtQkFBbUI7dUJBQ2hDLFlBQVksU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEd1Rvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL2R3LXRvb2x0aXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1wb3BvdmVyJyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1wb3BvdmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1BvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBEd1Rvb2xUaXBDb21wb25lbnQge1xuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XG4gIEBDb250ZW50Q2hpbGQoJ25ldmVyVXNlZFRlbXBsYXRlJykgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjsgLy8gdXNlZCB0byByZW1vdmUgRHdUb29sVGlwQ29tcG9uZW50IEBDb250ZW50Q2hpbGQoJ2R3VGVtcGxhdGUnKVxuICBAQ29udGVudENoaWxkKCdkd1RlbXBsYXRlJykgX2NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xufVxuIl19