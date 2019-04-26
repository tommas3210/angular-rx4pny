import { fakeAsync, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnalytics } from 'ngx-analytics';
import { advance, createRoot, RootCmp, TestModule } from '../../test.mocks';
import { NgxAnalyticsGoogleTagManager } from './ngx-analytics-gtm';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
declare var window: any;

describe('NgxAnalyticsGoogleTagManager', () => {
  let dataLayer: any;
  let fixture: ComponentFixture<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      providers: [NgxAnalyticsGoogleTagManager],
    });

    window.dataLayer = dataLayer = [];
  });

  it('should track pages',
    fakeAsync(inject([NgxAnalytics, NgxAnalyticsGoogleTagManager],
      (ngxAnalytics: NgxAnalytics, ngxAnalyticsGoogleTagManager: NgxAnalyticsGoogleTagManager) => {
        fixture = createRoot(RootCmp);
        ngxAnalytics.pageTrack.next({ path: '/abc' });
        advance(fixture);
        expect(dataLayer).toContain({
          event: 'Page View',
          'content-name': '/abc',
          userId: null,
        });
      },
    )),
  );

  it('should track events',
    fakeAsync(inject([NgxAnalytics, NgxAnalyticsGoogleTagManager],
      (ngxAnalytics: NgxAnalytics, ngxAnalyticsGoogleTagManager: NgxAnalyticsGoogleTagManager) => {
        fixture = createRoot(RootCmp);
        ngxAnalytics.eventTrack.next({ action: 'do', properties: { category: 'cat', gtmCustom: { customKey: 'customValue' } } });
        advance(fixture);
        expect(dataLayer).toContain({
          event: 'interaction',
          target: 'cat',
          action: 'do',
          customKey: 'customValue',
          label: undefined,
          value: undefined,
          interactionType: undefined,
          userId: null,
        });
      }
    )),
  );

  it('should track exceptions',
    fakeAsync(inject([NgxAnalytics, NgxAnalyticsGoogleTagManager],
      (ngxAnalytics: NgxAnalytics, ngxAnalyticsGoogleTagManager: NgxAnalyticsGoogleTagManager) => {
        fixture = createRoot(RootCmp);
        ngxAnalytics.exceptionTrack.next({ appId: 'app', appName: 'Test App', appVersion: '0.1' });
        advance(fixture);
        expect(dataLayer).toContain({
          event: 'interaction',
          target: 'Exception',
          action: 'Exception thrown for Test App <app@0.1>',
          label: undefined,
          value: undefined,
          interactionType: undefined,
          userId: null,
        });
      }
    )),
  );

  it('should set username',
    fakeAsync(inject([NgxAnalytics, NgxAnalyticsGoogleTagManager],
      (ngxAnalytics: NgxAnalytics, ngxAnalyticsGoogleTagManager: NgxAnalyticsGoogleTagManager) => {
        fixture = createRoot(RootCmp);
        ngxAnalytics.setUsername.next('testuser');
        advance(fixture);
        expect(ngxAnalytics.settings.gtm.userId).toBe('testuser');
      }
    )),
  );

});
