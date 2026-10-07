/**
 * Single source of truth for business facts used across the site
 * (header, footer, booking page, SEO metadata, JSON-LD).
 * Change a value here and every consumer stays in sync.
 */
export const siteConfig = {
  name: 'BrightNest Pro Service',
  shortName: 'BrightNest Pro',
  url: 'https://brightnestpro.ca',
  locale: 'en_CA',
  phoneRaw: '+17809840190',
  phoneDisplay: '(780) 984-0190',
  email: 'info@brightnestpro.ca',
  hours: 'Mon–Sat 8am–6pm',
  /** Schema.org openingHours equivalent of `hours`. */
  openingHours: 'Mo-Sa 08:00-18:00',
  serviceArea: 'Edmonton & surrounding communities',
  serviceAreaCities: ['Edmonton', 'Sherwood Park', 'St. Albert', 'Leduc', 'Spruce Grove'],
  geo: { latitude: 53.5461, longitude: -113.4938 },
  isLicensedInsured: true,
  rating: {
    value: 5.0,
    count: 8,
  },
  /** Minutes the team promises to reply to a request during business hours. */
  responseMinutes: 15,
  social: {
    facebook: 'https://www.facebook.com/BrightNestProServices',
    instagram: 'https://www.instagram.com/brightnestproservices',
    /** Public Google Maps listing (search link until the direct profile URL is available). */
    google: 'https://www.google.com/maps/search/?api=1&query=BrightNest+Pro+Services+Edmonton',
  },
} as const;

export type SiteConfig = typeof siteConfig;
