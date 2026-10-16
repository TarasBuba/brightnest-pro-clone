import type { ServiceId } from '@/src/entities/service/model';

export const SECTION_IDS = {
  services: 'services',
  work: 'work',
  reviews: 'reviews',
} as const;

export const ROUTES = {
  home: '/',
  about: '/about/',
  book: '/book/',
  handyman: '/services/handyman/',
  painting: '/services/painting/',
} as const;

export const BOOK_PATH = ROUTES.book;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: `/#${SECTION_IDS.services}`, label: 'Services' },
  { href: `/#${SECTION_IDS.work}`, label: 'Our Work' },
  { href: ROUTES.about, label: 'About' },
  { href: `/#${SECTION_IDS.reviews}`, label: 'Reviews' },
];

export function bookingHref(service?: ServiceId): string {
  return service ? `${BOOK_PATH}?service=${service}` : BOOK_PATH;
}
