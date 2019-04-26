/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * API class that public to users to handle the modal instance.
 * DwModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
var /**
 * API class that public to users to handle the modal instance.
 * DwModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
DwModalRef = /** @class */ (function () {
    function DwModalRef() {
    }
    return DwModalRef;
}());
/**
 * API class that public to users to handle the modal instance.
 * DwModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
export { DwModalRef };
function DwModalRef_tsickle_Closure_declarations() {
    /** @type {?} */
    DwModalRef.prototype.afterOpen;
    /** @type {?} */
    DwModalRef.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    DwModalRef.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    DwModalRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    DwModalRef.prototype.destroy = function (result) { };
    /**
     * Trigger the dwOnOk/dwOnCancel by manual
     * @abstract
     * @return {?}
     */
    DwModalRef.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    DwModalRef.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of dwContent when specify dwContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     * @abstract
     * @return {?}
     */
    DwModalRef.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    DwModalRef.prototype.getElement = function () { };
    /**
     * Get the instance of the Modal itself
     * @abstract
     * @return {?}
     */
    DwModalRef.prototype.getInstance = function () { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtb2RhbC9kdy1tb2RhbC1yZWYuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBOzs7Ozs7QUFBQTs7O3FCQVJBO0lBMkNDLENBQUE7Ozs7Ozs7QUFuQ0Qsc0JBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEd01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1tb2RhbC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEFQSSBjbGFzcyB0aGF0IHB1YmxpYyB0byB1c2VycyB0byBoYW5kbGUgdGhlIG1vZGFsIGluc3RhbmNlLlxuICogRHdNb2RhbFJlZiBpcyBhaW0gdG8gYXZvaWQgYWNjZXNzaW5nIHRvIHRoZSBtb2RhbCBpbnN0YW5jZSBkaXJlY3RseSBieSB1c2Vycy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER3TW9kYWxSZWY8VCA9IGFueSwgUiA9IGFueT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBhYnN0cmFjdCBhZnRlck9wZW46IE9ic2VydmFibGU8dm9pZD47XG4gIGFic3RyYWN0IGFmdGVyQ2xvc2U6IE9ic2VydmFibGU8Uj47XG5cbiAgYWJzdHJhY3Qgb3BlbigpOiB2b2lkO1xuICBhYnN0cmFjdCBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZDtcbiAgYWJzdHJhY3QgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZDtcblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZHdPbk9rL2R3T25DYW5jZWwgYnkgbWFudWFsXG4gICAqL1xuICBhYnN0cmFjdCB0cmlnZ2VyT2soKTogdm9pZDtcbiAgYWJzdHJhY3QgdHJpZ2dlckNhbmNlbCgpOiB2b2lkO1xuXG4gIC8vIC8qKlxuICAvLyAgKiBSZXR1cm4gdGhlIENvbXBvbmVudFJlZiBvZiBkd0NvbnRlbnQgd2hlbiBzcGVjaWZ5IGR3Q29udGVudCBhcyBhIENvbXBvbmVudFxuICAvLyAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcbiAgLy8gICovXG4gIC8vIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPHt9PjtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugb2YgZHdDb250ZW50IHdoZW4gc3BlY2lmeSBkd0NvbnRlbnQgYXMgYSBDb21wb25lbnRcbiAgICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXG4gICAqL1xuICBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQ7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZG9tIGVsZW1lbnQgb2YgdGhpcyBNb2RhbFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgTW9kYWwgaXRzZWxmXG4gICAqL1xuICBhYnN0cmFjdCBnZXRJbnN0YW5jZSgpOiBEd01vZGFsQ29tcG9uZW50O1xufVxuIl19