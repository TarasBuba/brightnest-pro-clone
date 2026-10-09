import { siteConfig } from '../../config/site';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/og/og-default.jpg`,
    telephone: siteConfig.phoneRaw,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edmonton',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreaCities,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.google
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${siteConfig.name} Services`,
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Handyman & Home Repairs',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Handyman & Custom Carpentry',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Professional Painting',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Interior & Exterior Painting',
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.value.toFixed(1),
      reviewCount: siteConfig.rating.count.toString(),
      bestRating: '5.0',
    },
  };
}
