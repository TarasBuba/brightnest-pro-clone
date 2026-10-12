import { siteConfig, absoluteUrl } from '@/src/shared/config/site';
import { SERVICES } from '@/src/entities/service/model';

const BUSINESS_ID = absoluteUrl('/#business');
const WEBSITE_ID = absoluteUrl('/#website');

type JsonLd = Record<string, unknown>;

function businessNode(): JsonLd {
  return {
    '@type': ['HomeAndConstructionBusiness', 'HousePainter'],
    '@id': BUSINESS_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl('/'),
    logo: absoluteUrl(siteConfig.logoPath),
    image: absoluteUrl(siteConfig.ogImage.path),
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreaCities.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    sameAs: siteConfig.profiles,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${siteConfig.name} Services`,
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@id': absoluteUrl(`/#service-${service.id}`) },
      })),
    },
    // NOTE: no `aggregateRating` — Google ignores self-serving LocalBusiness ratings
    // and unverifiable rating markup is a structured-data policy risk.
  };
}

function websiteNode(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: siteConfig.name,
    inLanguage: siteConfig.language,
    publisher: { '@id': BUSINESS_ID },
  };
}

function serviceNodes(): JsonLd[] {
  return SERVICES.map((service) => ({
    '@type': 'Service',
    '@id': absoluteUrl(`/#service-${service.id}`),
    name: service.title,
    serviceType: service.shortTitle,
    description: service.summary,
    provider: { '@id': BUSINESS_ID },
    areaServed: siteConfig.serviceAreaCities.map((name) => ({ '@type': 'City', name })),
  }));
}

/** Site-wide graph rendered once in the root layout. */
export function buildSiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [businessNode(), websiteNode(), ...serviceNodes()],
  };
}

/** Breadcrumbs for sub-pages, e.g. `[{ name: 'About', path: '/about/' }]`. */
export function buildBreadcrumbJsonLd(items: readonly { name: string; path: string }[]): JsonLd {
  const all = [{ name: 'Home', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Safe serialisation for `<script type="application/ld+json">` (escapes `<`). */
export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
