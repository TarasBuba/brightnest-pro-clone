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
    founder: [
      { '@type': 'Person', name: 'Yuriy' },
      { '@type': 'Person', name: 'Karina' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${siteConfig.name} Services`,
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@id': absoluteUrl(`${service.href}#service`) },
      })),
    },
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
    '@id': absoluteUrl(`${service.href}#service`),
    url: absoluteUrl(service.href),
    name: service.title,
    serviceType: service.shortTitle,
    description: service.summary,
    provider: { '@id': BUSINESS_ID },
    areaServed: siteConfig.serviceAreaCities.map((name) => ({ '@type': 'City', name })),
  }));
}

export function buildSiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [businessNode(), websiteNode(), ...serviceNodes()],
  };
}

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

export interface ServicePageJsonLdInput {
  path: string;
  name: string;
  serviceType: string;
  description: string;
}

export function buildServicePageJsonLd(input: ServicePageJsonLdInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${input.path}#service`),
    url: absoluteUrl(input.path),
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    provider: {
      '@id': BUSINESS_ID,
    },
    areaServed: siteConfig.serviceAreaCities.map((cityName) => ({
      '@type': 'City',
      name: cityName,
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(input.path),
      servicePhone: siteConfig.phoneRaw,
    },
  };
}

export function buildFaqJsonLd(faqs: readonly { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
