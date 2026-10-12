/**
 * Single source of truth for business facts used across the site
 * (header, footer, booking page, SEO metadata, JSON-LD).
 * Change a value here and every consumer stays in sync.
 */
export const siteConfig = {
  name: 'BrightNest Pro Services',
  shortName: 'BrightNest Pro',
  /** Canonical origin. No trailing slash, no `www`. */
  url: 'https://brightnestpro.ca',
  locale: 'en_CA',
  /** BCP-47 language tag for `<html lang>`. */
  language: 'en-CA',
  description:
    'Family-owned handyman, carpentry, deck repair, and interior & exterior painting services in Edmonton, Alberta. Free quotes, fair pricing, satisfaction guaranteed.',
  phoneRaw: '+17809840190',
  phoneDisplay: '(780) 984-0190',
  email: 'info@brightnestpro.ca',
  hours: 'Mon–Sun 24/7',
  /** Schema.org opening hours equivalent of `hours`. */
  openingHours: {
    days: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  address: {
    locality: 'Edmonton',
    region: 'AB',
    country: 'CA',
  },
  serviceArea: 'Edmonton & surrounding communities',
  serviceAreaCities: ['Edmonton', 'Sherwood Park', 'St. Albert', 'Leduc', 'Spruce Grove'],
  geo: { latitude: 53.5461, longitude: -113.4938 },
  isLicensedInsured: true,
  rating: {
    value: 5.0,
    count: 8,
  },
  /** Minutes the team promises to reply to a request 24/7. */
  responseMinutes: 15,
  logoPath: '/logo.svg',
  ogImage: {
    path: '/og/og-default.jpg',
    width: 1200,
    height: 630,
    alt: 'Yuriy and Karina of BrightNest Pro Services — handyman & painting in Edmonton',
  },
  social: {
    facebook: 'https://www.facebook.com/BrightNestProServices',
    instagram: 'https://www.instagram.com/brightnestproservices',
    /** Public Google Maps search link (UI only — NOT a profile URL, so never used in `sameAs`). */
    google: 'https://www.google.com/maps/search/?api=1&query=BrightNest+Pro+Services+Edmonton',
  },
  /**
   * Official profile URLs used for schema.org `sameAs`.
   * Add the Google Business Profile URL (https://g.page/... or maps place URL) here once available.
   */
  profiles: [
    'https://www.facebook.com/BrightNestProServices',
    'https://www.instagram.com/brightnestproservices',
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Builds an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, siteConfig.url).toString();
}
