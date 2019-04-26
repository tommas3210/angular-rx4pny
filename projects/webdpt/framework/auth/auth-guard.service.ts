import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DwAuthorizedService } from './authorized.service';
import { DwAuthService } from './auth.service';

@Injectable()
export class DwAuthGuardService implements CanActivate, CanLoad, CanActivateChild {

  constructor(private authorizedService: DwAuthorizedService,
    private authService: DwAuthService) {
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.authorizedService.canLoad(route.path);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // 是否登入及使用權限
    return this.auth(route, state);
  }

  private auth(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.authService.isAuthenticated(state) && this.authorizedService.canActivate(route);
    if (this.authService.isAuthenticated(state)) {
      return this.authorizedService.canActivate(route);
    } else {
      return false;
    }
  }
}
