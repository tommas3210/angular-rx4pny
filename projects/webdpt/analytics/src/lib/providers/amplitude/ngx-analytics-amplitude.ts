import { Injectable } from '@angular/core';
import { NgxAnalytics } from '../../core/ngx-analytics';


declare var amplitude: {
  getInstance: () => {
    logEvent(action: string, properties: any): void;
    setUserId(userId: string): void;
    setUserProperties(properties: any): void;
  }
};

@Injectable()
export class NgxAnalyticsAmplitude {

  constructor(private ngxAnalytics: NgxAnalytics) {
    this.ngxAnalytics.pageTrack.subscribe((x: any) => this.pageTrack(x.path));

    this.ngxAnalytics.eventTrack.subscribe((x: any) => this.eventTrack(x.action, x.properties));

    this.ngxAnalytics.setUsername.subscribe((x: any) => this.setUsername(x));

    this.ngxAnalytics.setUserProperties.subscribe((x: any) => this.setUserProperties(x));

    this.ngxAnalytics.setUserPropertiesOnce.subscribe((x: any) => this.setUserProperties(x));
  }

  pageTrack(path: string): void {
    try {
      this.eventTrack('Pageview', {
        url: path
      });
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  }

  eventTrack(action: string, properties: any): void {
    try {
      amplitude.getInstance().logEvent(action, properties);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  }

  setUsername(userId: string): void {
    try {
      amplitude.getInstance().setUserId(userId);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  }

  setUserProperties(properties: any): void {
    try {
      amplitude.getInstance().setUserProperties(properties);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  }
}
