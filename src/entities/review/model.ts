export interface Review {
  id: number;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Original Google review text, verbatim. Do not rewrite. */
  text: string;
  /** Local, pre-optimised portrait (see scripts/optimize-images.mjs). */
  avatar: string;
}

export const REVIEWS: readonly Review[] = [
  {
    id: 1,
    name: 'Adria Lee',
    rating: 5,
    avatar: '/images/avatars/adria-lee.webp',
    text: 'We are so pleased with the work Yuriy and Karina did with our very large yard and two back decks. Not only did they take great care to make sure everything looked fantastic but they also priced their work very reasonably. As new immigrants, English is not their first language but that does not stop them from communicating (using a translator) and getting out there to make a concerted effort in building a business for themselves. We will 100% use them again and recommend to anyone looking for honest hard working helpers.',
  },
  {
    id: 2,
    name: 'Jean Gagnon',
    rating: 5,
    avatar: '/images/avatars/jean-gagnon.webp',
    text: 'We recently hired BrightNest Pro Services owned and operated by a lovely couple Yuriy and Karina to build a fence for us. They took great pride in doing a good job and definitely work to please the customer. Their work was done well and we would highly recommend their business.',
  },
  {
    id: 3,
    name: 'Roxana Lee',
    rating: 5,
    avatar: '/images/avatars/roxana-lee.webp',
    text: 'In the 43 yrs. that we had lived in this house, BrightNest Pro Services, are one of the most reliable, personable, friendly and consciously do a great job. We will definitely hire them again even for other jobs. Recommend to try their work.',
  },
  {
    id: 4,
    name: 'Salina Halabi',
    rating: 5,
    avatar: '/images/avatars/salina-halabi.webp',
    text: 'Wonderful team and great work! Highly recommend for both outdoor and indoor home maintenance/cleaning services. Thank you!',
  },
  {
    id: 5,
    name: 'Yvonne Reitsma',
    rating: 5,
    avatar: '/images/avatars/yvonne-reitsma.webp',
    text: 'This team came to clean my windows and siding! Excellent, thorough job. Early, efficient and very polite. Would definitely use them for other jobs needed around the house.',
  },
  {
    id: 6,
    name: 'Dasha Pugacheva',
    rating: 5,
    avatar: '/images/avatars/dasha-pugacheva.webp',
    text: 'Great company! Highly recommend.',
  },
  {
    id: 7,
    name: 'Oleksii Chubko',
    rating: 5,
    avatar: '/images/avatars/oleksii-chubko.webp',
    text: 'Great couple! They did cleaning and painting for us when we were moving. Weâ€™re very happy with their work and would definitely recommend them. Weâ€™ll be happy to use their services again!',
  },
  {
    id: 8,
    name: 'P L',
    rating: 5,
    avatar: '/images/avatars/p-l.webp',
    text: 'Quality, customized work with attention paid to detail and per homeownerâ€™s instructions - happy to support a local, family-run business.',
  },
];

export const reviewCount = REVIEWS.length;

/** Average rating rounded to one decimal, derived from the reviews above. */
export const averageRating = Number(
  (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1),
);

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
