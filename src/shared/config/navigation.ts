import type { ServiceId } from '@/src/entities/service/model';

/** Anchor ids of the home-page sections. Used by both sections and every link to them. */
export const SECTION_IDS = {
  services: 'services',
  work: 'work',
  reviews: 'reviews',
} as const;

export const NAV_LINKS = [
  { href: `/#${SECTION_IDS.services}`, label: 'Services' },
  { href: `/#${SECTION_IDS.work}`, label: 'Our Work' },
  { href: '/about', label: 'About' },
  { href: `/#${SECTION_IDS.reviews}`, label: 'Reviews' },
] as const;

export const BOOK_PATH = '/book';

/** Link to the booking page, optionally pre-selecting a service in the form. */
export function bookingHref(service?: ServiceId): string {
  return service ? `${BOOK_PATH}?service=${service}` : BOOK_PATH;
}
