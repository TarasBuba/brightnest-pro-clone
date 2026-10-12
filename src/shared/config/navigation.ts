import type { ServiceId } from '@/src/entities/service/model';

/** Anchor ids of the home-page sections. Used by both sections and every link to them. */
export const SECTION_IDS = {
  services: 'services',
  work: 'work',
  reviews: 'reviews',
} as const;

/**
 * Site routes. Trailing slashes match `trailingSlash: true` in next.config.ts,
 * so links, canonicals and the sitemap all point at the exact exported URL.
 */
export const ROUTES = {
  home: '/',
  about: '/about/',
  book: '/book/',
  handyman: '/services/handyman/',
  painting: '/services/painting/',
  servicesHandyman: '/services/handyman/',
  servicesPainting: '/services/painting/',
} as const;

export const BOOK_PATH = ROUTES.book;

export interface NavLink {
  href: string;
  label: string;
}

/** Primary navigation (header desktop + mobile drawer + footer). */
export const NAV_LINKS: readonly NavLink[] = [
  { href: `/#${SECTION_IDS.services}`, label: 'Services' },
  { href: `/#${SECTION_IDS.work}`, label: 'Our Work' },
  { href: ROUTES.about, label: 'About' },
  { href: `/#${SECTION_IDS.reviews}`, label: 'Reviews' },
];

/** Link to the booking page, optionally pre-selecting a service in the form. */
export function bookingHref(service?: ServiceId): string {
  return service ? `${BOOK_PATH}?service=${service}` : BOOK_PATH;
}
