import {
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';

import { UIRouterTracking } from './uirouter';
import { NgxAnalyticsOnModule } from '../core/ngx-analyticsOn';
import { NgxAnalyticsSettings } from '../core/ngx-analytics-config';
import { ANGULARTICS2_TOKEN } from '../core/ngx-analytics-token';
import { NgxAnalytics } from '../core/ngx-analytics';
import { RouterlessTracking } from '../core/routerless';


@NgModule({
  imports: [NgxAnalyticsOnModule],
})
export class NgxAnalyticsUirouterModule {
  static forRoot(
    providers: Provider[],
    settings: Partial<NgxAnalyticsSettings> = {},
  ): ModuleWithProviders {
    return {
      ngModule: NgxAnalyticsUirouterModule,
      providers: [
        { provide: ANGULARTICS2_TOKEN, useValue: { providers, settings } },
        NgxAnalytics,
        { provide: RouterlessTracking, useClass: UIRouterTracking },
        ...providers,
      ],
    };
  }
}
