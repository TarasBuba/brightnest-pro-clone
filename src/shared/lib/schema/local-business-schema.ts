export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://brightnestpro.ca/#business',
  name: 'BrightNest Pro Services',
  image: 'https://brightnestpro.ca/images/hero/collage/hero-1.jpg',
  telephone: '+17809840190',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Edmonton Area',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    postalCode: 'T5J 2R4',
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
        name: 'Handyman & Home Repairs',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Handyman & Custom Carpentry',
              description: 'Reliable handyman fixes, deck building, and custom home repair services.',
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
              description: 'Quality interior painting, exterior finishing, and deck staining.',
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
