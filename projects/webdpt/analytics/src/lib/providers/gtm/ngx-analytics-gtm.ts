import { Injectable } from '@angular/core';
import { GoogleTagManagerSettings } from '../../core/ngx-analytics-config';
import { NgxAnalytics } from '../../core/ngx-analytics';


declare var dataLayer: any;

export class GoogleTagManagerDefaults implements GoogleTagManagerSettings {
  userId = null;
  dimensions = null;
}

@Injectable({ providedIn: 'root' })
export class NgxAnalyticsGoogleTagManager {

  constructor(
    protected ngxAnalytics: NgxAnalytics,
  ) {
    // The dataLayer needs to be initialized
    if (typeof dataLayer !== 'undefined' && dataLayer) {
      dataLayer = (<any>window).dataLayer = (<any>window).dataLayer || [];
    }
    const defaults = new GoogleTagManagerDefaults;
    // Set the default settings for this module
    this.ngxAnalytics.settings.gtm = { ...defaults, ...this.ngxAnalytics.settings.gtm };

    this.ngxAnalytics.pageTrack.subscribe((x) => this.pageTrack(x.path));

    this.ngxAnalytics.eventTrack.subscribe((x) => this.eventTrack(x.action, x.properties));

    this.ngxAnalytics.exceptionTrack.subscribe((x: any) => this.exceptionTrack(x));

    this.ngxAnalytics.setUsername.subscribe((x: string) => this.setUsername(x));
  }

  pageTrack(path: string, title?: string): void {
    if (typeof dataLayer !== 'undefined' && dataLayer) {
      dataLayer.push({
        'event': 'Page View',
        'content-name': path,
        'url': path,
        'userId': this.ngxAnalytics.settings.gtm.userId,
        'title': title,
        ...this.ngxAnalytics.settings.gtm.dimensions || {},
      });
    }
  }

  /**
   * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
   *
   * @param action associated with the event
   * @param properties
   * @param {string} properties.category
   * @param {string} [properties.label]
   * @param {number} [properties.value]
   * @param {boolean} [properties.noninteraction]
   */
  eventTrack(action: string, properties: any): void {

    // Set a default GTM category
    properties = properties || {};

    if (typeof dataLayer !== 'undefined' && dataLayer) {
      dataLayer.push({
        event: properties.event || 'interaction',
        target: properties.category || 'Event',
        category: properties.category || '',
        action: action,
        label: properties.label,
        value: properties.value,
        interactionType: properties.noninteraction,
        userId: this.ngxAnalytics.settings.gtm.userId,
        ...this.ngxAnalytics.settings.gtm.dimensions || {},
        ...properties.gtmCustom
      });
    }
  }

  /**
   * Exception Track Event in GTM
   *
   * @param {Object} properties
   * @param {string} properties.appId
   * @param {string} properties.appName
   * @param {string} properties.appVersion
   * @param {string} [properties.description]
   * @param {boolean} [properties.fatal]
   */
  exceptionTrack(properties: any): void {
    // TODO: make interface
    //  @param {Object} properties
    //  @param {string} properties.appId
    //  @param {string} properties.appName
    //  @param {string} properties.appVersion
    //  @param {string} [properties.description]
    //  @param {boolean} [properties.fatal]
    if (! properties || ! properties.appId || ! properties.appName || ! properties.appVersion) {
      console.error('Must be setted appId, appName and appVersion.');
      return;
    }

    if (properties.fatal === undefined) {
      console.log('No "fatal" provided, sending with fatal=true');
      properties.exFatal = true;
    }

    properties.exDescription = properties.event ? properties.event.stack : properties.description;

    this.eventTrack(`Exception thrown for ${properties.appName} <${properties.appId}@${properties.appVersion}>`, {
      'category': 'Exception',
      'label': properties.exDescription
    });
  }

  /**
   * Set userId for use with Universal Analytics User ID feature
   *
   * @param userId used to identify user cross-device in Google Analytics
   */
  setUsername(userId: string): void {
    this.ngxAnalytics.settings.gtm.userId = userId;
  }

  static createGaSession(settings: { id: string }): void {
    document.write(
      `<!-- Global site tag (gtag.js) - Google Analytics -->
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${settings.id}');</script>
      <!-- End Google Tag Manager -->
      `
    );
  }

  setDimensionsAndMetrics(dimensions: any): void {
    this.ngxAnalytics.settings.gtm.dimensions = dimensions;
  }
}
