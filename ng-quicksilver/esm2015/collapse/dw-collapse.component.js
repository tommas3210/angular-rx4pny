/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwCollapseComponent {
    constructor() {
        this._accordion = false;
        this._bordered = true;
        this.listOfPanel = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAccordion(value) {
        this._accordion = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAccordion() {
        return this._accordion;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwBordered() {
        return this._bordered;
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    click(collapse) {
        if (this.dwAccordion) {
            this.listOfPanel.forEach(item => {
                /** @type {?} */
                const active = collapse === item;
                if (item.dwActive !== active) {
                    item.dwActive = active;
                    item.dwActiveChange.emit(item.dwActive);
                }
            });
        }
        else {
            collapse.dwActive = !collapse.dwActive;
            collapse.dwActiveChange.emit(collapse.dwActive);
        }
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    addCollapse(collapse) {
        this.listOfPanel.push(collapse);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    removeCollapse(collapse) {
        this.listOfPanel.splice(this.listOfPanel.indexOf(collapse), 1);
    }
}
DwCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-collapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!dwBordered\">\n  <ng-content></ng-content>\n</div>",
                styles: [`:host {
      display: block;
    }`]
            }] }
];
DwCollapseComponent.propDecorators = {
    dwAccordion: [{ type: Input }],
    dwBordered: [{ type: Input }]
};
function DwCollapseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCollapseComponent.prototype._accordion;
    /** @type {?} */
    DwCollapseComponent.prototype._bordered;
    /** @type {?} */
    DwCollapseComponent.prototype.listOfPanel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb2xsYXBzZS9kdy1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWFqRCxNQUFNOzswQkFDaUIsS0FBSzt5QkFDTixJQUFJOzJCQUMwQixFQUFFOzs7Ozs7SUFFcEQsSUFDSSxXQUFXLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELEtBQUssQ0FBQyxRQUFrQztRQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUM5QixNQUFNLE1BQU0sR0FBRyxRQUFRLEtBQUssSUFBSSxDQUFDO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO29CQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakQ7S0FDRjs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBa0M7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWtDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hFOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxhQUFhO2dCQUMxQiw2SEFBMkM7eUJBRXpDOztNQUVFO2FBRUw7OzswQkFNRSxLQUFLO3lCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3Q29sbGFwc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZHctY29sbGFwc2UtcGFuZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctY29sbGFwc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgIDogW1xuICAgIGA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3Q29sbGFwc2VDb21wb25lbnQge1xuICBwcml2YXRlIF9hY2NvcmRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSB0cnVlO1xuICBwcml2YXRlIGxpc3RPZlBhbmVsOiBEd0NvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FjY29yZGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjY29yZGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdBY2NvcmRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY29yZGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0JvcmRlcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYm9yZGVyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Qm9yZGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xuICB9XG5cbiAgY2xpY2soY29sbGFwc2U6IER3Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3QWNjb3JkaW9uKSB7XG4gICAgICB0aGlzLmxpc3RPZlBhbmVsLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGNvbGxhcHNlID09PSBpdGVtO1xuICAgICAgICBpZiAoaXRlbS5kd0FjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgaXRlbS5kd0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgICBpdGVtLmR3QWN0aXZlQ2hhbmdlLmVtaXQoaXRlbS5kd0FjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsYXBzZS5kd0FjdGl2ZSA9ICFjb2xsYXBzZS5kd0FjdGl2ZTtcbiAgICAgIGNvbGxhcHNlLmR3QWN0aXZlQ2hhbmdlLmVtaXQoY29sbGFwc2UuZHdBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENvbGxhcHNlKGNvbGxhcHNlOiBEd0NvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlBhbmVsLnB1c2goY29sbGFwc2UpO1xuICB9XG5cbiAgcmVtb3ZlQ29sbGFwc2UoY29sbGFwc2U6IER3Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mUGFuZWwuc3BsaWNlKHRoaXMubGlzdE9mUGFuZWwuaW5kZXhPZihjb2xsYXBzZSksIDEpO1xuICB9XG59XG4iXX0=