/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { DwBreadCrumbComponent } from './dw-breadcrumb.component';
var DwBreadCrumbItemComponent = /** @class */ (function () {
    function DwBreadCrumbItemComponent(dwBreadCrumbComponent) {
        this.dwBreadCrumbComponent = dwBreadCrumbComponent;
    }
    DwBreadCrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-breadcrumb-item',
                    preserveWhitespaces: false,
                    template: "\n    <span class=\"ant-breadcrumb-link\">\n      <ng-content></ng-content>\n    </span>\n    <span class=\"ant-breadcrumb-separator\">\n      <ng-container *ngIf=\"dwBreadCrumbComponent.isTemplateRef; else stringTemplate\">\n        <ng-template [ngTemplateOutlet]=\"dwBreadCrumbComponent.dwSeparator\"></ng-template>\n      </ng-container>\n      <ng-template #stringTemplate>\n         {{ dwBreadCrumbComponent.dwSeparator }}\n      </ng-template>\n    </span>",
                    styles: [":host:last-child {\n      color: rgba(0, 0, 0, 0.65);\n    }\n\n    :host:last-child .ant-breadcrumb-separator{\n      display: none;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    DwBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: DwBreadCrumbComponent }
    ]; };
    return DwBreadCrumbItemComponent;
}());
export { DwBreadCrumbItemComponent };
function DwBreadCrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwBreadCrumbItemComponent.prototype.dwBreadCrumbComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi9kdy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQTZCaEUsbUNBQW1CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0tBQzlEOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxvQkFBb0I7b0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBYSxpZEFXWDs2QkFFTixvSkFPRDtpQkFFSjs7OztnQkEzQlEscUJBQXFCOztvQ0FGOUI7O1NBOEJhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd0JyZWFkQ3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2R3LWJyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1icmVhZGNydW1iLWl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGUgICAgICAgICAgIDogYFxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWJyZWFkY3J1bWItbGlua1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImFudC1icmVhZGNydW1iLXNlcGFyYXRvclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImR3QnJlYWRDcnVtYkNvbXBvbmVudC5pc1RlbXBsYXRlUmVmOyBlbHNlIHN0cmluZ1RlbXBsYXRlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkd0JyZWFkQ3J1bWJDb21wb25lbnQuZHdTZXBhcmF0b3JcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI3N0cmluZ1RlbXBsYXRlPlxuICAgICAgICAge3sgZHdCcmVhZENydW1iQ29tcG9uZW50LmR3U2VwYXJhdG9yIH19XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvc3Bhbj5gLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgICBgOmhvc3Q6bGFzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICB9XG5cbiAgICA6aG9zdDpsYXN0LWNoaWxkIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3J7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdCcmVhZENydW1iSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkd0JyZWFkQ3J1bWJDb21wb25lbnQ6IER3QnJlYWRDcnVtYkNvbXBvbmVudCkge1xuICB9XG5cbn1cbiJdfQ==