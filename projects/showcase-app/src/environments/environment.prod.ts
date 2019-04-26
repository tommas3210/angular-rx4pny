import { mockDB, requestMethodImpl } from '../mock-data';

export const environment = {
  production: true,
  mock: {
    db: mockDB,
    methods: requestMethodImpl
  },

  // Google Analytics
  googleAnalytics: {
    domain: 'auto',
    trackingId: 'UA-138579813-1' // replace with your Tracking Id
  }
};
