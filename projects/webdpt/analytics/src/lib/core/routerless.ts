import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { NgxAnalyticsSettings } from './ngx-analytics-config';

export interface TrackNavigationEnd {
  url: string;
  title?: string;
}

export class RouterlessTracking {
  trackLocation(settings: NgxAnalyticsSettings): Observable<TrackNavigationEnd> {
    return new BehaviorSubject<TrackNavigationEnd>({ url: '/' });
  }
  prepareExternalUrl(url: string): string {
    return url;
  }
}
