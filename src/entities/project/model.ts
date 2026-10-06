import type { ServiceId } from '@/src/entities/service/model';

export interface ProjectImage {
  src: string;
  alt: string;
  /** `contain` keeps the whole photo visible on a blurred backdrop (for stitched before/after collages). */
  fit?: 'cover' | 'contain';
  /** CSS object-position for `cover` crops, e.g. "50% 30%". */
  position?: string;
}

/** Bento tile footprint on large screens. */
export type ProjectSize = 'feature' | 'tall' | 'tile';

export interface Project {
  id: string;
  service: ServiceId;
  categoryLabel: string;
  title: string;
  description: string;
  size: ProjectSize;
  /** Starting state. When present the card gets a Before / After reveal. */
  before?: ProjectImage;
  after: ProjectImage;
  /** Caption for single-photo cards (e.g. "In progress"). */
  caption?: string;
}

/**
 * Real jobs by Yuriy & Karina. Every photo is matched to the text next to it —
 * keep it that way when adding projects.
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'deck-rebuild',
    service: 'handyman',
    categoryLabel: 'Deck rebuild',
    title: 'Backyard deck rebuilt from the joists up',
    description:
      'Bare framing, new boards, and a fresh finish — from an open frame to a deck ready for the swing chair.',
    size: 'feature',
    before: {
      src: '/images/work/deck-before.webp',
      alt: 'Bare deck joists with a stack of new boards waiting beside them',
      position: '50% 50%',
    },
    after: {
      src: '/images/work/deck-finished.webp',
      alt: 'Yuriy standing on the finished deck next to a hanging egg chair',
      position: '50% 35%',
    },
  },
  {
    id: 'shed-doors',
    service: 'handyman',
    categoryLabel: 'Carpentry & paint',
    title: 'Shed doors rebuilt and repainted',
    description:
      'New framed doors on an old shed, then finished in green and terracotta with crisp white trim.',
    size: 'tile',
    before: {
      src: '/images/work/shed-before.webp',
      alt: 'Shed with new unpainted plywood doors and wood trim installed',
      position: '50% 55%',
    },
    after: {
      src: '/images/work/shed-after.webp',
      alt: 'The same shed painted green with terracotta doors and white trim',
      position: '50% 55%',
    },
  },
  {
    id: 'entry-door',
    service: 'painting',
    categoryLabel: 'Painting',
    title: 'Weathered entry door, refinished',
    description: 'A peeling, stained door brought back to a clean, even painted finish.',
    size: 'tall',
    after: {
      src: '/images/work/door-before-after.webp',
      alt: 'Before and after of an entry door: peeling stained door above, clean refinished door below',
      fit: 'contain',
    },
    caption: 'Before & after',
  },
  {
    id: 'garden-benches',
    service: 'painting',
    categoryLabel: 'Refinishing',
    title: 'Garden benches restored',
    description: 'Weathered wooden slats on cast-iron benches refinished, plus a matching stool.',
    size: 'tile',
    before: {
      src: '/images/work/bench-before.webp',
      alt: 'Cast-iron garden bench with weathered, cracked wooden slats',
      position: '50% 60%',
    },
    after: {
      src: '/images/work/bench-after.webp',
      alt: 'Two restored garden benches and a stool with fresh orange wooden slats on the lawn',
      position: '50% 55%',
    },
  },
  {
    id: 'deck-boards',
    service: 'handyman',
    categoryLabel: 'Handyman',
    title: 'Fastening new deck boards',
    description: 'Every board pre-drilled and fastened by hand, row by row.',
    size: 'tile',
    after: {
      src: '/images/work/deck-boards.webp',
      alt: 'Yuriy fastening new boards to a deck frame with a cordless drill',
      position: '50% 55%',
    },
    caption: 'In progress',
  },
  {
    id: 'deck-staining',
    service: 'painting',
    categoryLabel: 'Painting',
    title: 'Rolling on the deck finish',
    description: 'Careful prep and an even coat to protect the wood through Edmonton winters.',
    size: 'tile',
    after: {
      src: '/images/work/deck-staining.webp',
      alt: 'Karina rolling protective finish onto deck boards',
      position: '50% 50%',
    },
    caption: 'In progress',
  },
];
