/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/** @type {?} */
var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
/**
 * @record
 */
export function BreadcrumbOption() { }
function BreadcrumbOption_tsickle_Closure_declarations() {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
var DwBreadCrumbComponent = /** @class */ (function () {
    function DwBreadCrumbComponent(_injector) {
        this._injector = _injector;
        this._separator = '/';
        this.$destroy = new Subject();
        this.isTemplateRef = false;
        this.dwAutoGenerate = false;
        this.breadcrumbs = [];
    }
    Object.defineProperty(DwBreadCrumbComponent.prototype, "dwSeparator", {
        get: /**
         * @return {?}
         */
        function () {
            return this._separator;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._separator = value;
            this.isTemplateRef = value instanceof TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    DwBreadCrumbComponent.prototype.getBreadcrumbs = /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var e_1, _a;
        /** @type {?} */
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs; // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        }
        try {
            for (var children_1 = tslib_1.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet !== PRIMARY_OUTLET) {
                    continue; // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                }
                else {
                    /** @type {?} */
                    var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                    /** @type {?} */
                    var nextUrl = url + ("/" + routeURL);
                    // If have data, go to generate a breadcrumb for it.
                    if (child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        /** @type {?} */
                        var breadcrumb = {
                            label: child.snapshot.data[ROUTE_DATA_BREADCRUMB] || 'Breadcrumb',
                            params: child.snapshot.params,
                            url: nextUrl
                        };
                        breadcrumbs.push(breadcrumb);
                    }
                    return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    DwBreadCrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dwAutoGenerate) {
            try {
                /** @type {?} */
                var activatedRoute_1 = this._injector.get(ActivatedRoute);
                /** @type {?} */
                var router = this._injector.get(Router);
                router.events.pipe(filter(function (e) { return e instanceof NavigationEnd; }), takeUntil(this.$destroy)).subscribe(function () {
                    _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root); // Build the breadcrumb tree from root route.
                });
            }
            catch (e) {
                throw new Error('You should import RouterModule if you want to use DwAutoGenerate');
            }
        }
    };
    /**
     * @return {?}
     */
    DwBreadCrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
    };
    DwBreadCrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-breadcrumb',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>\n<ng-container *ngIf=\"dwAutoGenerate\">\n  <dw-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n    <a [attr.href]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\n  </dw-breadcrumb-item>\n</ng-container>\n",
                    host: {
                        '[class.ant-breadcrumb]': 'true'
                    },
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DwBreadCrumbComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    DwBreadCrumbComponent.propDecorators = {
        dwAutoGenerate: [{ type: Input }],
        dwSeparator: [{ type: Input }]
    };
    return DwBreadCrumbComponent;
}());
export { DwBreadCrumbComponent };
function DwBreadCrumbComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwBreadCrumbComponent.prototype._separator;
    /** @type {?} */
    DwBreadCrumbComponent.prototype.$destroy;
    /** @type {?} */
    DwBreadCrumbComponent.prototype.isTemplateRef;
    /** @type {?} */
    DwBreadCrumbComponent.prototype.dwAutoGenerate;
    /** @type {?} */
    DwBreadCrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    DwBreadCrumbComponent.prototype._injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIvZHctYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixLQUFLLEVBR0wsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFVLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELElBQU0scUJBQXFCLEdBQUcsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWtFekMsK0JBQW9CLFNBQW1CO1FBQW5CLGNBQVMsR0FBVCxTQUFTLENBQVU7MEJBNUNVLEdBQUc7d0JBQ2pDLElBQUksT0FBTyxFQUFFOzZCQUNoQixLQUFLOzhCQUVLLEtBQUs7MkJBWUcsRUFBRTtLQTRCTztJQXRDM0Msc0JBQ0ksOENBQVc7Ozs7UUFLZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFSRCxVQUNnQixLQUFpQztZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssWUFBWSxXQUFXLENBQUM7U0FDbkQ7OztPQUFBOzs7Ozs7O0lBUUQsOENBQWM7Ozs7OztJQUFkLFVBQWUsS0FBcUIsRUFBRSxHQUFnQixFQUFFLFdBQW9DO1FBQXRELG9CQUFBLEVBQUEsUUFBZ0I7UUFBRSw0QkFBQSxFQUFBLGdCQUFvQzs7O1FBQzFGLElBQU0sUUFBUSxHQUFxQixLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2xELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxXQUFXLENBQUM7U0FDcEI7O1lBQ0QsS0FBb0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBekIsSUFBTSxLQUFLLHFCQUFBO2dCQUNkLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxjQUFjLEVBQUU7b0JBQ25DLFNBQVM7aUJBQ1Y7cUJBQU07O29CQUVMLElBQU0sUUFBUSxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztvQkFDbkYsSUFBTSxPQUFPLEdBQUcsR0FBRyxJQUFHLE1BQUksUUFBVSxDQUFBLENBQUM7O29CQUVyQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFOzt3QkFDN0QsSUFBTSxVQUFVLEdBQXFCOzRCQUNuQyxLQUFLLEVBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUscUJBQXFCLENBQUUsSUFBSSxZQUFZOzRCQUNwRSxNQUFNLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNOzRCQUM3QixHQUFHLEVBQUssT0FBTzt5QkFDaEIsQ0FBQzt3QkFDRixXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUM5QjtvQkFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztpQkFDekQ7YUFDRjs7Ozs7Ozs7O0tBQ0Y7Ozs7SUFJRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJOztnQkFDRixJQUFNLGdCQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUMxRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLGFBQWEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7b0JBQzlGLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3RCxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQzthQUNyRjtTQUNGO0tBQ0Y7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDMUI7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGVBQWU7b0JBQ3BDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDZQQUFxRDtvQkFDckQsSUFBSSxFQUFpQjt3QkFDbkIsd0JBQXdCLEVBQUUsTUFBTTtxQkFDakM7NkJBQ3NCLGlEQUl0QjtpQkFDRjs7OztnQkE5QkMsUUFBUTs7O2lDQW9DUCxLQUFLOzhCQUVMLEtBQUs7O2dDQXhDUjs7U0FpQ2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVULCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFJPVVRFX0RBVEFfQlJFQURDUlVNQiA9ICdicmVhZGNydW1iJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIHVybDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWJyZWFkY3J1bWInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1icmVhZGNydW1iXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0JyZWFkQ3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3NlcGFyYXRvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnLyc7XG4gIHByaXZhdGUgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICBpc1RlbXBsYXRlUmVmID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZHdBdXRvR2VuZXJhdGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTZXBhcmF0b3IodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fc2VwYXJhdG9yID0gdmFsdWU7XG4gICAgdGhpcy5pc1RlbXBsYXRlUmVmID0gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIGdldCBkd1NlcGFyYXRvcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcjtcbiAgfVxuXG4gIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gPSBbXTtcblxuICBnZXRCcmVhZGNydW1icyhyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHVybDogc3RyaW5nID0gJycsIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gPSBbXSk6IEJyZWFkY3J1bWJPcHRpb25bXSB7XG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7IC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQub3V0bGV0ICE9PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgICBjb250aW51ZTsgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhcnNlIHRoaXMgbGF5ZXIgYW5kIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBpdGVtLlxuICAgICAgICBjb25zdCByb3V0ZVVSTDogc3RyaW5nID0gY2hpbGQuc25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICBjb25zdCBuZXh0VXJsID0gdXJsICsgYC8ke3JvdXRlVVJMfWA7XG4gICAgICAgIC8vIElmIGhhdmUgZGF0YSwgZ28gdG8gZ2VuZXJhdGUgYSBicmVhZGNydW1iIGZvciBpdC5cbiAgICAgICAgaWYgKGNoaWxkLnNuYXBzaG90LmRhdGEuaGFzT3duUHJvcGVydHkoUk9VVEVfREFUQV9CUkVBRENSVU1CKSkge1xuICAgICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJPcHRpb24gPSB7XG4gICAgICAgICAgICBsYWJlbCA6IGNoaWxkLnNuYXBzaG90LmRhdGFbIFJPVVRFX0RBVEFfQlJFQURDUlVNQiBdIHx8ICdCcmVhZGNydW1iJyxcbiAgICAgICAgICAgIHBhcmFtczogY2hpbGQuc25hcHNob3QucGFyYW1zLFxuICAgICAgICAgICAgdXJsICAgOiBuZXh0VXJsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCBuZXh0VXJsLCBicmVhZGNydW1icyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3QXV0b0dlbmVyYXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY3RpdmF0ZWRSb3V0ZSA9IHRoaXMuX2luamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuX2luamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgICByb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLCB0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoYWN0aXZhdGVkUm91dGUucm9vdCk7IC8vIEJ1aWxkIHRoZSBicmVhZGNydW1iIHRyZWUgZnJvbSByb290IHJvdXRlLlxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIGltcG9ydCBSb3V0ZXJNb2R1bGUgaWYgeW91IHdhbnQgdG8gdXNlIER3QXV0b0dlbmVyYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=