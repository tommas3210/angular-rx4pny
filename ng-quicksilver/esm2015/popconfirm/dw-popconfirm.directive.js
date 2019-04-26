/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwTooltipDirective } from '../tooltip/dw-tooltip.directive';
import { DwPopconfirmComponent } from './dw-popconfirm.component';
export class DwPopconfirmDirective extends DwTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip) {
        super(elementRef, hostView, resolver, renderer, tooltip);
        this.subclassUnsubscribe$ = new Subject();
        this.factory = this.resolver.resolveComponentFactory(DwPopconfirmComponent);
        this._condition = false;
        this._okType = 'primary';
        this.dwOnCancel = new EventEmitter();
        this.dwOnConfirm = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwOkText(value) {
        this._okText = value;
        this.updateCompValue('dwOkText', value);
    }
    /**
     * @return {?}
     */
    get dwOkText() {
        return this._okText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwOkType(value) {
        this._okType = value;
        this.updateCompValue('dwOkType', value);
    }
    /**
     * @return {?}
     */
    get dwOkType() {
        return this._okType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCancelText(value) {
        this._cancelText = value;
        this.updateCompValue('dwCancelText', value);
    }
    /**
     * @return {?}
     */
    get dwCancelText() {
        return this._cancelText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCondition(value) {
        this._condition = toBoolean(value);
        this.updateCompValue('dwCondition', value);
    }
    /**
     * @return {?}
     */
    get dwCondition() {
        return this._condition;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.tooltip) {
            /** @type {?} */
            const tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            const properties = [
                'dwTitle',
                'dwContent',
                'dwOverlayClassName',
                'dwOverlayStyle',
                'dwMouseEnterDelay',
                'dwMouseLeaveDelay',
                'dwVisible',
                'dwTrigger',
                'dwPlacement',
                'dwOkText',
                'dwOkType',
                'dwCancelText',
                'dwCondition'
            ];
            properties.forEach(property => this.updateCompValue(property, this[property]));
            this.tooltip.dwVisibleChange.pipe(takeUntil(this.subclassUnsubscribe$), distinctUntilChanged()).subscribe(data => {
                this._visible = data;
                this.dwVisibleChange.emit(data);
            });
            (/** @type {?} */ (this.tooltip)).dwOnCancel.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(data => {
                this.dwOnCancel.emit();
            });
            (/** @type {?} */ (this.tooltip)).dwOnConfirm.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(data => {
                this.dwOnConfirm.emit();
            });
        }
        this.tooltip.setOverlayOrigin(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subclassUnsubscribe$.next();
        this.subclassUnsubscribe$.complete();
    }
}
DwPopconfirmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dw-popconfirm]'
            },] }
];
/** @nocollapse */
DwPopconfirmDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: DwPopconfirmComponent, decorators: [{ type: Optional }] }
];
DwPopconfirmDirective.propDecorators = {
    dwOnCancel: [{ type: Output }],
    dwOnConfirm: [{ type: Output }],
    dwOkText: [{ type: Input }],
    dwOkType: [{ type: Input }],
    dwCancelText: [{ type: Input }],
    dwCondition: [{ type: Input }]
};
function DwPopconfirmDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPopconfirmDirective.prototype.subclassUnsubscribe$;
    /** @type {?} */
    DwPopconfirmDirective.prototype.factory;
    /** @type {?} */
    DwPopconfirmDirective.prototype._condition;
    /** @type {?} */
    DwPopconfirmDirective.prototype._okText;
    /** @type {?} */
    DwPopconfirmDirective.prototype._okType;
    /** @type {?} */
    DwPopconfirmDirective.prototype._cancelText;
    /** @type {?} */
    DwPopconfirmDirective.prototype.dwOnCancel;
    /** @type {?} */
    DwPopconfirmDirective.prototype.dwOnConfirm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcGNvbmZpcm0vZHctcG9wY29uZmlybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSw0QkFBNkIsU0FBUSxrQkFBa0I7Ozs7Ozs7O0lBb0QzRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBOEI7UUFDMUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQ0F6RDVCLElBQUksT0FBTyxFQUFRO3VCQUVDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMscUJBQXFCLENBQUM7MEJBQ3pGLEtBQUs7dUJBRVQsU0FBUzswQkFHZ0IsSUFBSSxZQUFZLEVBQUU7MkJBQ2pCLElBQUksWUFBWSxFQUFFO0tBaUQ3RDs7Ozs7SUEvQ0QsSUFDSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUss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QUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9HLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEM7OztZQXZHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQXBCQyxVQUFVO1lBUVYsZ0JBQWdCO1lBVmhCLHdCQUF3QjtZQVN4QixTQUFTO1lBU0YscUJBQXFCLHVCQThEekIsUUFBUTs7O3lCQWhEVixNQUFNOzBCQUNOLE1BQU07dUJBRU4sS0FBSzt1QkFVTCxLQUFLOzJCQVVMLEtBQUs7MEJBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd1Rvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuLi90b29sdGlwL2R3LXRvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IER3UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vZHctcG9wY29uZmlybS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHctcG9wY29uZmlybV0nXG59KVxuZXhwb3J0IGNsYXNzIER3UG9wY29uZmlybURpcmVjdGl2ZSBleHRlbmRzIER3VG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJjbGFzc1Vuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxEd1BvcGNvbmZpcm1Db21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShEd1BvcGNvbmZpcm1Db21wb25lbnQpO1xuICBfY29uZGl0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIF9va1RleHQ6IHN0cmluZztcbiAgX29rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xuICBfY2FuY2VsVGV4dDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkd09uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd09uQ29uZmlybTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd09rVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2tUZXh0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ2R3T2tUZXh0JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3T2tUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29rVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd09rVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2tUeXBlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ2R3T2tUeXBlJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3T2tUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29rVHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NhbmNlbFRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhbmNlbFRleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnZHdDYW5jZWxUZXh0JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q2FuY2VsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jYW5jZWxUZXh0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q29uZGl0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29uZGl0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnZHdDb25kaXRpb24nLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDb25kaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHRvb2x0aXA6IER3UG9wY29uZmlybUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcbiAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcENvbXBvbmVudC5pbnN0YW5jZTtcbiAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdoZW4gdXNlIGRpcmVjdGl2ZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTk2N1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0b29sdGlwQ29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5pc0R5bmFtaWNUb29sdGlwID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXG4gICAgICAgICdkd1RpdGxlJyxcbiAgICAgICAgJ2R3Q29udGVudCcsXG4gICAgICAgICdkd092ZXJsYXlDbGFzc05hbWUnLFxuICAgICAgICAnZHdPdmVybGF5U3R5bGUnLFxuICAgICAgICAnZHdNb3VzZUVudGVyRGVsYXknLFxuICAgICAgICAnZHdNb3VzZUxlYXZlRGVsYXknLFxuICAgICAgICAnZHdWaXNpYmxlJyxcbiAgICAgICAgJ2R3VHJpZ2dlcicsXG4gICAgICAgICdkd1BsYWNlbWVudCcsXG4gICAgICAgICdkd09rVGV4dCcsXG4gICAgICAgICdkd09rVHlwZScsXG4gICAgICAgICdkd0NhbmNlbFRleHQnLFxuICAgICAgICAnZHdDb25kaXRpb24nIF07XG4gICAgICBwcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4gdGhpcy51cGRhdGVDb21wVmFsdWUocHJvcGVydHksIHRoaXNbIHByb3BlcnR5IF0pKTtcbiAgICAgIHRoaXMudG9vbHRpcC5kd1Zpc2libGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5zdWJjbGFzc1Vuc3Vic2NyaWJlJCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgICh0aGlzLnRvb2x0aXAgIGFzIER3UG9wY29uZmlybUNvbXBvbmVudCkuZHdPbkNhbmNlbC5waXBlKHRha2VVbnRpbCh0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmR3T25DYW5jZWwuZW1pdCgpO1xuICAgICAgfSk7XG4gICAgICAodGhpcy50b29sdGlwICBhcyBEd1BvcGNvbmZpcm1Db21wb25lbnQpLmR3T25Db25maXJtLnBpcGUodGFrZVVudGlsKHRoaXMuc3ViY2xhc3NVbnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZHdPbkNvbmZpcm0uZW1pdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJjbGFzc1Vuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy5zdWJjbGFzc1Vuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=