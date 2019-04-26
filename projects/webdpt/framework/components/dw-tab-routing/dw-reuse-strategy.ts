import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { DwTabRouteReuseService } from './service/dw-tab-route-reuse.service';

export class DwReuseStrategy implements RouteReuseStrategy {

  constructor(private routeReuseService: DwTabRouteReuseService) { }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.routeReuseService.shouldDetach(route);
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.routeReuseService.store(route, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.routeReuseService.shouldAttach(route);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.routeReuseService.retrieve(route);
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return this.routeReuseService.shouldReuseRoute(future, curr);
  }

}
