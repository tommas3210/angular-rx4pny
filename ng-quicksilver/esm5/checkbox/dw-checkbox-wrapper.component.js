/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
var DwCheckboxWrapperComponent = /** @class */ (function () {
    function DwCheckboxWrapperComponent() {
        this.dwOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DwCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    DwCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter(function (item) { return item.dwChecked; });
        return checkedList.map(function (item) { return item.dwValue; });
    };
    /**
     * @return {?}
     */
    DwCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.dwOnChange.emit(this.outputValue());
    };
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
    return DwCheckboxWrapperComponent;
}());
export { DwCheckboxWrapperComponent };
function DwCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCheckboxWrapperComponent.prototype.dwOnChange;
    /** @type {?} */
    DwCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNoZWNrYm94L2R3LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OzswQkFhdkMsSUFBSSxZQUFZLEVBQVk7NEJBQ0wsRUFBRTs7Ozs7O0lBRWhELGdEQUFXOzs7O0lBQVgsVUFBWSxLQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCxtREFBYzs7OztJQUFkLFVBQWUsS0FBMEI7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0Q7Ozs7SUFFRCxnREFBVzs7O0lBQVg7O1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7S0FDOUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUMxQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEscUJBQXFCO29CQUMxQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixxQ0FBMkQ7b0JBQzNELElBQUksRUFBaUI7d0JBQ25CLDRCQUE0QixFQUFFLE1BQU07cUJBQ3JDO2lCQUNGOzs7NkJBRUUsTUFBTTs7cUNBYlQ7O1NBWWEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9kdy1jaGVja2JveC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWNoZWNrYm94LXdyYXBwZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jaGVja2JveC1ncm91cF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd0NoZWNrYm94V3JhcHBlckNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBkd09uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IER3Q2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xuXG4gIGFkZENoZWNrYm94KHZhbHVlOiBEd0NoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3QucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVDaGVja2JveCh2YWx1ZTogRHdDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnNwbGljZSh0aGlzLmNoZWNrYm94TGlzdC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICBvdXRwdXRWYWx1ZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB0aGlzLmNoZWNrYm94TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmR3Q2hlY2tlZCk7XG4gICAgcmV0dXJuIGNoZWNrZWRMaXN0Lm1hcChpdGVtID0+IGl0ZW0uZHdWYWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3T25DaGFuZ2UuZW1pdCh0aGlzLm91dHB1dFZhbHVlKCkpO1xuICB9XG59XG4iXX0=