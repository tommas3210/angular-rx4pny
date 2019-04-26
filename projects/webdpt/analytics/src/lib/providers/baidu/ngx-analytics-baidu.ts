import { Injectable } from '@angular/core';
import { NgxAnalytics } from '../../core/ngx-analytics';


declare var _hmt: any;

@Injectable()
export class NgxAnalyticsBaiduAnalytics {
  constructor(private ngxAnalytics: NgxAnalytics) {
    if (typeof _hmt === 'undefined') {
      _hmt = [];
    } else {
      _hmt.push(['_setAutoPageview', false]);
    }

    this.ngxAnalytics.pageTrack.subscribe((x) => this.pageTrack(x.path));
    this.ngxAnalytics.eventTrack.subscribe((x) => this.eventTrack(x.action, x.properties));
    this.ngxAnalytics.setUsername.subscribe((x: string) => this.setUsername(x));
    this.ngxAnalytics.setUserProperties.subscribe((x) => this.setUserProperties(x));
  }

  /**
   * Page Track in Baidu Analytics
   *
   * @param path Required url 'path'
   *
   * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
   */
  pageTrack(path: string): void {
    if (typeof _hmt !== 'undefined' && _hmt) {
      _hmt.push(['_trackPageview', path]);
    }
  }

  /**
   * Track Event in Baidu Analytics
   *
   * @param action Name associated with the event
   * @param properties Comprised of:
   *  - 'category' (string)
   *  - 'opt_label' (string)
   *  - 'opt_value' (string)
   *
   * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
   */
  eventTrack(action: string, properties: any): void {
    // baidu analytics requires category
    if (!properties || !properties.category) {
      properties = properties || {};
      properties.category = 'Event';
      properties.opt_label = 'default';
      properties.opt_value = 'default';
    }

    if (typeof _hmt !== 'undefined' && _hmt) {
      _hmt.push([
        '_trackEvent',
        properties.category,
        action,
        properties.opt_label,
        properties.opt_value,
      ]);
    }
  }

  setUsername(userId: string): void {
    // set default custom variables name to 'identity' and 'value'
    _hmt.push(['_setCustomVar', 1, 'identity', userId]);
  }

  setUserProperties(properties: any): void {
    _hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
  }

  createGaSession(settings: {trackingId: string}): void {
    document.write(
     `<script>
      var _hmt = _hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?${settings.trackingId}";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
      })();
      </script>`
    );
  }
}
