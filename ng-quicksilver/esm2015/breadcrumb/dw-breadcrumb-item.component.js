/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { DwBreadCrumbComponent } from './dw-breadcrumb.component';
export class DwBreadCrumbItemComponent {
    /**
     * @param {?} dwBreadCrumbComponent
     */
    constructor(dwBreadCrumbComponent) {
        this.dwBreadCrumbComponent = dwBreadCrumbComponent;
    }
}
DwBreadCrumbItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-breadcrumb-item',
                preserveWhitespaces: false,
                template: `
    <span class="ant-breadcrumb-link">
      <ng-content></ng-content>
    </span>
    <span class="ant-breadcrumb-separator">
      <ng-container *ngIf="dwBreadCrumbComponent.isTemplateRef; else stringTemplate">
        <ng-template [ngTemplateOutlet]="dwBreadCrumbComponent.dwSeparator"></ng-template>
      </ng-container>
      <ng-template #stringTemplate>
         {{ dwBreadCrumbComponent.dwSeparator }}
      </ng-template>
    </span>`,
                styles: [`:host:last-child {
      color: rgba(0, 0, 0, 0.65);
    }

    :host:last-child .ant-breadcrumb-separator{
      display: none;
    }
    `]
            }] }
];
/** @nocollapse */
DwBreadCrumbItemComponent.ctorParameters = () => [
    { type: DwBreadCrumbComponent }
];
function DwBreadCrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwBreadCrumbItemComponent.prototype.dwBreadCrumbComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi9kdy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBNEJsRSxNQUFNOzs7O0lBQ0osWUFBbUIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7S0FDOUQ7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLG9CQUFvQjtnQkFDekMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFhOzs7Ozs7Ozs7OztZQVdYO3lCQUVOOzs7Ozs7O0tBT0Q7YUFFSjs7OztZQTNCUSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdCcmVhZENydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYnJlYWRjcnVtYi1pdGVtJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlICAgICAgICAgICA6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC1icmVhZGNydW1iLWxpbmtcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3JcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkd0JyZWFkQ3J1bWJDb21wb25lbnQuaXNUZW1wbGF0ZVJlZjsgZWxzZSBzdHJpbmdUZW1wbGF0ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZHdCcmVhZENydW1iQ29tcG9uZW50LmR3U2VwYXJhdG9yXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNzdHJpbmdUZW1wbGF0ZT5cbiAgICAgICAgIHt7IGR3QnJlYWRDcnVtYkNvbXBvbmVudC5kd1NlcGFyYXRvciB9fVxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3NwYW4+YCxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYDpob3N0Omxhc3QtY2hpbGQge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgfVxuXG4gICAgOmhvc3Q6bGFzdC1jaGlsZCAuYW50LWJyZWFkY3J1bWItc2VwYXJhdG9ye1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3QnJlYWRDcnVtYkl0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHdCcmVhZENydW1iQ29tcG9uZW50OiBEd0JyZWFkQ3J1bWJDb21wb25lbnQpIHtcbiAgfVxuXG59XG4iXX0=