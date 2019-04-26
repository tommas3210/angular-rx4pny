import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { DwTabRouteReuseService } from './dw-tab-route-reuse.service';

@Injectable()
export class DwNewRouteKeyService {
    constructor(private routeReuseService: DwTabRouteReuseService, private location: Location, private router: Router) {
    }
    navigateNewRouteKeyUrl(newUrl?: string): void {
        let routeUrl = this.location.path();
        const regEx = /^.*?;routeKey=([0-9]*)/g;
        const match = regEx.exec(routeUrl);
        // console.log(match);
        if (!!match) {
            const newKey = (function (): Date { return new Date(); })().getTime();
            routeUrl = match[0].replace(match[1], newKey.toString());
            // 移除原routeKey資料記錄
            this.routeReuseService.deletedRouteKey.push(match[1]);
            this.routeReuseService.setHandler(match[1]);
            // console.log(routeUrl);
        }
        if (!!newUrl) {
            this.router.navigateByUrl(newUrl);
        } else {
            this.router.navigateByUrl(routeUrl);
        }
    }
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
        let routeUrl = this.router.routerState.snapshot.url;
        let regEx = /^.*?;routeKey=([0-9]*).*/g;
        let match = regEx.exec(routeUrl);
        if (!!match) {
            const newKey = (function (): Date { return new Date(); })().getTime();
            routeUrl = match[0].replace(match[1], newKey.toString());
            // 移除原routeKey資料記錄
            this.routeReuseService.deletedRouteKey.push(match[1]);
            this.routeReuseService.setHandler(match[1]);
            // console.log(routeUrl);
        }
        commands.forEach((path) => {
            if (path === '../') {
                regEx = /.*(\/.+)$/g;
                match = regEx.exec(routeUrl);
                if (!!match) {
                    routeUrl = routeUrl.replace(match[1], '');
                }
            } else {
                routeUrl = routeUrl + '/' + path;
            }
        });
        return this.router.navigateByUrl(routeUrl, extras);
    }
}
