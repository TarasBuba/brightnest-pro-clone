export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://brightnestpro.ca/#business',
  name: 'BrightNest Pro Services',
  image: 'https://brightnestpro.ca/images/hero/yuriy-karina-edmonton-home-care.webp',
  telephone: '+17809840190',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5461,
    longitude: -113.4938,
  },
  areaServed: [
    'Edmonton',
    'Sherwood Park',
    'St. Albert',
    'Leduc',
    'Spruce Grove',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'BrightNest Pro Services Catalog',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Home Cleaning',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Home Cleaning',
              description: 'Professional residential and deep cleaning services.',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Handyman & Home Repairs',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Handyman & Home Repairs',
              description: 'Reliable handyman fixes and minor home repair services.',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Interior Painting',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Interior Painting',
              description: 'Quality interior painting and wall finishing.',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Yard & Exterior Care',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Yard & Exterior Care',
              description: 'Yard maintenance, lawn care, and power washing.',
            },
          },
        ],
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
    bestRating: '5.0',
  },
} as const;

export type LocalBusinessSchema = typeof localBusinessSchema;
