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
export class DwModalRef {
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtb2RhbC9kdy1tb2RhbC1yZWYuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBLE1BQU07Q0FtQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IER3TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2R3LW1vZGFsLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQVBJIGNsYXNzIHRoYXQgcHVibGljIHRvIHVzZXJzIHRvIGhhbmRsZSB0aGUgbW9kYWwgaW5zdGFuY2UuXG4gKiBEd01vZGFsUmVmIGlzIGFpbSB0byBhdm9pZCBhY2Nlc3NpbmcgdG8gdGhlIG1vZGFsIGluc3RhbmNlIGRpcmVjdGx5IGJ5IHVzZXJzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHdNb2RhbFJlZjxUID0gYW55LCBSID0gYW55PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIGFic3RyYWN0IGFmdGVyT3BlbjogT2JzZXJ2YWJsZTx2b2lkPjtcbiAgYWJzdHJhY3QgYWZ0ZXJDbG9zZTogT2JzZXJ2YWJsZTxSPjtcblxuICBhYnN0cmFjdCBvcGVuKCk6IHZvaWQ7XG4gIGFic3RyYWN0IGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkO1xuICBhYnN0cmFjdCBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBkd09uT2svZHdPbkNhbmNlbCBieSBtYW51YWxcbiAgICovXG4gIGFic3RyYWN0IHRyaWdnZXJPaygpOiB2b2lkO1xuICBhYnN0cmFjdCB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQ7XG5cbiAgLy8gLyoqXG4gIC8vICAqIFJldHVybiB0aGUgQ29tcG9uZW50UmVmIG9mIGR3Q29udGVudCB3aGVuIHNwZWNpZnkgZHdDb250ZW50IGFzIGEgQ29tcG9uZW50XG4gIC8vICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxuICAvLyAgKi9cbiAgLy8gYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8e30+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGNvbXBvbmVudCBpbnN0YW5jZSBvZiBkd0NvbnRlbnQgd2hlbiBzcGVjaWZ5IGR3Q29udGVudCBhcyBhIENvbXBvbmVudFxuICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcbiAgICovXG4gIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnQoKTogVDtcblxuICAvKipcbiAgICogR2V0IHRoZSBkb20gZWxlbWVudCBvZiB0aGlzIE1vZGFsXG4gICAqL1xuICBhYnN0cmFjdCBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBNb2RhbCBpdHNlbGZcbiAgICovXG4gIGFic3RyYWN0IGdldEluc3RhbmNlKCk6IER3TW9kYWxDb21wb25lbnQ7XG59XG4iXX0=