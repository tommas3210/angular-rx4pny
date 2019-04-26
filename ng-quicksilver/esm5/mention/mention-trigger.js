/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Directive, ElementRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var DW_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DwMentionTriggerDirective; }),
    multi: true
};
var DwMentionTriggerDirective = /** @class */ (function () {
    function DwMentionTriggerDirective(el) {
        this.el = el;
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.completeEvents();
    };
    /**
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.completeEvents = /**
     * @return {?}
     */
    function () {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    };
    /**
     * @param {?=} caretPos
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.focus = /**
     * @param {?=} caretPos
     * @return {?}
     */
    function (caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    };
    /**
     * @param {?} mention
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.insertMention = /**
     * @param {?} mention
     * @return {?}
     */
    function (mention) {
        /** @type {?} */
        var value = this.el.nativeElement.value;
        /** @type {?} */
        var insertValue = mention.mention.trim() + ' ';
        /** @type {?} */
        var newValue = [
            value.slice(0, mention.startPos + 1),
            insertValue,
            value.slice(mention.endPos, value.length)
        ].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwMentionTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    DwMentionTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[dwMentionTrigger], textarea[dwMentionTrigger]',
                    providers: [DW_MENTION_TRIGGER_ACCESSOR],
                    host: {
                        'autocomplete': 'off',
                        '(focusin)': 'onFocusin.emit()',
                        '(blur)': 'onBlur.emit()',
                        '(input)': 'onInput.emit($event)',
                        '(keydown)': 'onKeydown.emit($event)',
                        '(click)': 'onClick.emit($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    DwMentionTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return DwMentionTriggerDirective;
}());
export { DwMentionTriggerDirective };
function DwMentionTriggerDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onChange;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onTouched;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onFocusin;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onBlur;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onInput;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onKeydown;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.onClick;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.value;
    /** @type {?} */
    DwMentionTriggerDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtZW50aW9uL21lbnRpb24tdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUl6RSxXQUFhLDJCQUEyQixHQUFxQjtJQUMzRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7SUEyQkEsbUNBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO3lCQVBRLElBQUksWUFBWSxFQUFFO3NCQUNyQixJQUFJLFlBQVksRUFBRTt1QkFDUixJQUFJLFlBQVksRUFBRTt5QkFDaEIsSUFBSSxZQUFZLEVBQUU7dUJBQ3ZCLElBQUksWUFBWSxFQUFFO0tBSTlEOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRUQsa0RBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELHlDQUFLOzs7O0lBQUwsVUFBTSxRQUFpQjtRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRUQsaURBQWE7Ozs7SUFBYixVQUFjLE9BQWdCOztRQUM1QixJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1FBQ2xELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDOztRQUNqRCxJQUFNLFFBQVEsR0FBRztZQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLFdBQVc7WUFDWCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUMxQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztLQUN2Qjs7Ozs7SUFFRCw4Q0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2xDO0tBQ0Y7Ozs7O0lBRUQsb0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELHFEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOztnQkExRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxREFBcUQ7b0JBQy9ELFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUN4QyxJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLEtBQUs7d0JBQ3JCLFdBQVcsRUFBSyxrQkFBa0I7d0JBQ2xDLFFBQVEsRUFBUSxlQUFlO3dCQUMvQixTQUFTLEVBQU8sc0JBQXNCO3dCQUN0QyxXQUFXLEVBQUssd0JBQXdCO3dCQUN4QyxTQUFTLEVBQU8sc0JBQXNCO3FCQUN2QztpQkFDRjs7OztnQkF0QitCLFVBQVU7O29DQUExQzs7U0F3QmEseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEV4aXN0aW5nUHJvdmlkZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNZW50aW9uIH0gZnJvbSAnLi9tZW50aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBEV19NRU5USU9OX1RSSUdHRVJfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEd01lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W2R3TWVudGlvblRyaWdnZXJdLCB0ZXh0YXJlYVtkd01lbnRpb25UcmlnZ2VyXScsXG4gIHByb3ZpZGVyczogW0RXX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsXG4gICAgJyhmb2N1c2luKScgICA6ICdvbkZvY3VzaW4uZW1pdCgpJyxcbiAgICAnKGJsdXIpJyAgICAgIDogJ29uQmx1ci5lbWl0KCknLFxuICAgICcoaW5wdXQpJyAgICAgOiAnb25JbnB1dC5lbWl0KCRldmVudCknLFxuICAgICcoa2V5ZG93biknICAgOiAnb25LZXlkb3duLmVtaXQoJGV2ZW50KScsXG4gICAgJyhjbGljayknICAgICA6ICdvbkNsaWNrLmVtaXQoJGV2ZW50KSdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIER3TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcblxuICByZWFkb25seSBvbkZvY3VzaW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcGxldGVFdmVudHMoKTtcbiAgfVxuXG4gIGNvbXBsZXRlRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMub25Gb2N1c2luLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbkJsdXIuY29tcGxldGUoKTtcbiAgICB0aGlzLm9uSW5wdXQuY29tcGxldGUoKTtcbiAgICB0aGlzLm9uS2V5ZG93bi5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25DbGljay5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZm9jdXMoY2FyZXRQb3M/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcbiAgfVxuXG4gIGluc2VydE1lbnRpb24obWVudGlvbjogTWVudGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBtZW50aW9uLm1lbnRpb24udHJpbSgpICsgJyAnO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gW1xuICAgICAgdmFsdWUuc2xpY2UoMCwgbWVudGlvbi5zdGFydFBvcyArIDEpLFxuICAgICAgaW5zZXJ0VmFsdWUsXG4gICAgICB2YWx1ZS5zbGljZShtZW50aW9uLmVuZFBvcywgdmFsdWUubGVuZ3RoKVxuICAgIF0uam9pbignJyk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5mb2N1cyhtZW50aW9uLnN0YXJ0UG9zICsgaW5zZXJ0VmFsdWUubGVuZ3RoICsgMSk7XG4gICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxufVxuIl19