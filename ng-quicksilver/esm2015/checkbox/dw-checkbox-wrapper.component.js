/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
export class DwCheckboxWrapperComponent {
    constructor() {
        this.dwOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    /**
     * @return {?}
     */
    outputValue() {
        /** @type {?} */
        const checkedList = this.checkboxList.filter(item => item.dwChecked);
        return checkedList.map(item => item.dwValue);
    }
    /**
     * @return {?}
     */
    onChange() {
        this.dwOnChange.emit(this.outputValue());
    }
}
DwCheckboxWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-checkbox-wrapper',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-checkbox-group]': 'true'
                }
            }] }
];
DwCheckboxWrapperComponent.propDecorators = {
    dwOnChange: [{ type: Output }]
};
function DwCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCheckboxWrapperComponent.prototype.dwOnChange;
    /** @type {?} */
    DwCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNoZWNrYm94L2R3LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZaEUsTUFBTTs7MEJBQ21CLElBQUksWUFBWSxFQUFZOzRCQUNMLEVBQUU7Ozs7OztJQUVoRCxXQUFXLENBQUMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9EOzs7O0lBRUQsV0FBVzs7UUFDVCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDMUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLHFCQUFxQjtnQkFDMUMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIscUNBQTJEO2dCQUMzRCxJQUFJLEVBQWlCO29CQUNuQiw0QkFBNEIsRUFBRSxNQUFNO2lCQUNyQzthQUNGOzs7eUJBRUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vZHctY2hlY2tib3guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1jaGVja2JveC13cmFwcGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2hlY2tib3gtZ3JvdXBdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdDaGVja2JveFdyYXBwZXJDb21wb25lbnQge1xuICBAT3V0cHV0KCkgZHdPbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIHByaXZhdGUgY2hlY2tib3hMaXN0OiBEd0NoZWNrYm94Q29tcG9uZW50W10gPSBbXTtcblxuICBhZGRDaGVja2JveCh2YWx1ZTogRHdDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnB1c2godmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2hlY2tib3godmFsdWU6IER3Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5zcGxpY2UodGhpcy5jaGVja2JveExpc3QuaW5kZXhPZih2YWx1ZSksIDEpO1xuICB9XG5cbiAgb3V0cHV0VmFsdWUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdGhpcy5jaGVja2JveExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kd0NoZWNrZWQpO1xuICAgIHJldHVybiBjaGVja2VkTGlzdC5tYXAoaXRlbSA9PiBpdGVtLmR3VmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5kd09uQ2hhbmdlLmVtaXQodGhpcy5vdXRwdXRWYWx1ZSgpKTtcbiAgfVxufVxuIl19