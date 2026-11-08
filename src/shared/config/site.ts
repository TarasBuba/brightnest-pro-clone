export const siteConfig = {
  name: 'BrightNest Pro Services',
  shortName: 'BrightNest Pro',
  url: 'https://brightnestproservices.com',
  locale: 'en_CA',
  language: 'en-CA',
  description:
    'Family-owned handyman, carpentry, deck repair, and interior & exterior painting services in Edmonton, Alberta. Free quotes, fair pricing, satisfaction guaranteed.',
  phoneRaw: '+17809840190',
  phoneDisplay: '(780) 984-0190',
  email: 'brightnestproservices@gmail.com',
  hours: 'Mon–Sun 24/7',
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
    streetAddress: '85 St NW',
    locality: 'Edmonton',
    region: 'AB',
    postalCode: 'T5E 2Z1',
    country: 'CA',
  },
  serviceArea: 'Edmonton & surrounding communities',
  serviceAreaCities: ['Edmonton', 'Sherwood Park', 'St. Albert', 'Leduc', 'Spruce Grove'],
  neighborhoods: [
    'Killarney',
    'Glenora',
    'Strathcona',
    'Windermere',
    'Terwillegar',
    'Riverbend',
    'Summerside',
    'Crestwood',
    'Oliver',
    'Highlands',
    'Griesbach',
    'Sherwood Park',
    'St. Albert',
    'Spruce Grove',
    'Leduc',
  ],
  geo: { latitude: 53.5884, longitude: -113.4716 },
  isLicensedInsured: true,
  rating: {
    value: 5.0,
    count: 8,
  },
  responseMinutes: 30,
  logoPath: '/logo.svg',
  ogImage: {
    path: '/og/og-default.jpg?v=2',
    width: 1200,
    height: 630,
    alt: 'BrightNest Pro Services — Handyman & Painting Services in Edmonton, AB',
  },
  social: {
    facebook: 'https://www.facebook.com/BrightNestProServices',
    instagram: 'https://www.instagram.com/brightnestproservices',
    google: 'https://g.page/r/CUwpqubxT56wEBM/review',
  },
  profiles: [
    'https://www.facebook.com/BrightNestProServices',
    'https://www.instagram.com/brightnestproservices',
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = '/'): string {
  return new URL(path, siteConfig.url).toString();
}
