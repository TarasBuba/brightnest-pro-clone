import { bookingHref } from '@/src/shared/config/navigation';

export interface BentoProject {
  id: string;
  category: 'deck' | 'painting' | 'handyman';
  categoryLabel: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  satisfaction: string;
  beforeImage?: string;
  beforeAlt?: string;
  beforeLabel?: string;
  afterImage: string;
  afterAlt: string;
  afterLabel?: string;
  description: string;
  afterDescription?: string;
  craftsmanshipHighlights: string[];
  tags: string[];
  ctaLink: string;
  ctaText: string;
  featured?: boolean;
  gridClasses: {
    container: string;
    imageAspect: string;
  };
}

export const RECENT_WORK_PROJECTS: BentoProject[] = [
  {
    id: 'deck-transformation',
    category: 'deck',
    categoryLabel: 'Deck Restoration',
    title: 'Custom Cedar Deck Restoration',
    subtitle: 'From weathered framework to a luxury cedar lounge',
    location: 'Southwest Edmonton',
    duration: '2 Days',
    satisfaction: '100% Satisfaction',
    beforeImage: '/images/projects/bench-restoration-before.webp',
    beforeAlt: 'Before: Weathered wood and worn deck boards in Southwest Edmonton',
    beforeLabel: 'BEFORE: Weathered Wood & Worn Boards',
    afterImage: '/images/projects/bench-restoration-after.webp',
    afterAlt: 'After: Completely restored custom cedar deck with swing chair',
    afterLabel: 'AFTER: Custom Cedar Finish & Restoration',
    description:
      'Aging, weather-beaten backyard deck with grayed wood, compromised boards, and severe Edmonton winter moisture wear.',
    afterDescription:
      'Total structural rejuvenation: reinforced subframe joists, pressure-washed, precision-sanded, and sealed with premium cedar weatherproof coating.',
    craftsmanshipHighlights: [
      'Structural rot-prevention & deep sanding',
      'Engineered penetrating weatherproof stain',
      'Flawless perimeter borders & solid foundation',
    ],
    tags: ['Deck Rebuild', 'Custom Cedar', 'Winter Weatherproof'],
    ctaLink: bookingHref('handyman'),
    ctaText: 'Request a Deck Quote',
    featured: true,
    gridClasses: {
      container: 'col-span-1 md:col-span-2 lg:col-span-8',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]',
    },
  },
  {
    id: 'painting-interior',
    category: 'painting',
    categoryLabel: 'Precision Painting',
    title: 'Living Area Precision Coating',
    subtitle: 'Flawless wall smoothing & razor-sharp trim lines',
    location: 'Glenora, Central Edmonton',
    duration: '2 Days',
    satisfaction: 'Flawless Finish',
    beforeImage: '/images/projects/painting-interior-before.webp',
    beforeAlt: 'Before: Living room wall with scuffs and settling cracks',
    beforeLabel: 'BEFORE: Scuffed Walls & Settling Cracks',
    afterImage: '/images/projects/painting-interior-after.webp',
    afterAlt: 'After: Freshly painted living room wall with smooth finish',
    afterLabel: 'AFTER: Flawless Interior Finish',
    description:
      'Tired open-concept living area with visible settling cracks, scuffed walls, and dull, uneven surface wear.',
    afterDescription:
      'Complete drywall repair, dustless crack smoothing, and two coats of washable low-VOC enamel with razor-sharp ceiling and trim cut-ins.',
    craftsmanshipHighlights: [
      'Full wall skim-coating & dustless drywall sanding',
      'Flexible acoustic caulking on baseboards and trim',
      'Premium zero-splatter, washable paint',
    ],
    tags: ['Interior Paint', 'Sharp Edges', 'Low-VOC'],
    ctaLink: bookingHref('painting'),
    ctaText: 'Book Interior Painting',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-4',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]',
    },
  },
  {
    id: 'handyman-stairs',
    category: 'handyman',
    categoryLabel: 'Handyman & Carpentry',
    title: 'Deck Stairs Rebuild',
    subtitle: 'Removing rotted wood and building solid new stairs',
    location: 'Sherwood Park',
    duration: '1 Day',
    satisfaction: 'Solid & Safe',
    beforeImage: '/images/projects/handyman-stairs-before.webp',
    beforeAlt: 'Before: Deteriorated, unsafe wooden deck stairs',
    beforeLabel: 'BEFORE: Rotted, Unsafe Steps',
    afterImage: '/images/projects/handyman-stairs-after.webp',
    afterAlt: 'After: Brand new solid pressure-treated stairs',
    afterLabel: 'AFTER: Solid Rebuilt Stairs',
    description:
      'Dangerous, rotting exterior steps with decaying stringers and loose treads that failed safety checks.',
    afterDescription:
      'Completely rebuilt from the ground up using code-compliant pressure-treated lumber, heavy-duty stringers, and structural galvanized fasteners.',
    craftsmanshipHighlights: [
      'Safe, code-compliant step rise and run',
      'Heavy-duty galvanized structural screws',
      'Pressure-treated wood for maximum longevity',
    ],
    tags: ['Deck Stairs', 'Structural Repair', 'Carpentry'],
    ctaLink: bookingHref('handyman'),
    ctaText: 'Request Handyman Service',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
  {
    id: 'handyman-door',
    category: 'handyman',
    categoryLabel: 'Handyman Repair',
    title: 'Interior Door & Hardware Restoration',
    subtitle: 'Fixing scuffed doors and replacing broken handles',
    location: 'Windermere',
    duration: 'Half Day',
    satisfaction: 'Smooth Operation',
    beforeImage: '/images/projects/handyman-door-before.webp',
    beforeAlt: 'Before: Scuffed door panel with broken loose hardware',
    beforeLabel: 'BEFORE: Scratched Door & Broken Handle',
    afterImage: '/images/projects/handyman-door-after.webp',
    afterAlt: 'After: Restored interior door with modern lever handle',
    afterLabel: 'AFTER: Smooth Hardware Upgrade',
    description:
      'Heavily scratched wood finish around the lockset with loose, malfunctioning vintage door hardware.',
    afterDescription:
      'Seamlessly patched deep scratches, planed the door margin for smooth swing, and installed a sleek modern designer lever handle.',
    craftsmanshipHighlights: [
      'Door margin planing & strike plate realignment',
      'Seamless patching of deep wood scratches',
      'Solid, rattle-free handle installation',
    ],
    tags: ['Door Repair', 'Hardware', 'Handyman'],
    ctaLink: bookingHref('handyman'),
    ctaText: 'Request Handyman Service',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
  {
    id: 'painting-trim',
    category: 'painting',
    categoryLabel: 'Trim & Baseboards',
    title: 'Baseboard & Trim Refinishing',
    subtitle: 'Reviving scuffed, yellowed trim to a crisp white finish',
    location: 'St. Albert',
    duration: '1 Day',
    satisfaction: 'Crisp & Clean',
    beforeImage: '/images/projects/trim-restoration-before.webp',
    beforeAlt: 'Before: Yellowed baseboard trim with scratches',
    beforeLabel: 'BEFORE: Yellowed, Chipped Baseboards',
    afterImage: '/images/projects/trim-restoration-after.webp',
    afterAlt: 'After: Pristine white semi-gloss baseboard trim',
    afterLabel: 'AFTER: Crisp White Trim Finish',
    description:
      'Yellowed, scuffed floor baseboards and door casings with unsightly gaps and vacuum scuffs.',
    afterDescription:
      'Precision-sanded, sealed all joint gaps with flexible acrylic caulking, and applied durable scuff-resistant white semi-gloss enamel.',
    craftsmanshipHighlights: [
      'Precision sanding and gap filling',
      'No-bleed crisp painter lines',
      'Durable scuff-resistant enamel finish',
    ],
    tags: ['Trim Paint', 'Baseboards', 'Detail Work'],
    ctaLink: bookingHref('painting'),
    ctaText: 'Book Trim Painting',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
  {
    id: 'painting-shed',
    category: 'painting',
    categoryLabel: 'Exterior Painting',
    title: 'Backyard Shed Revival',
    subtitle: 'Protecting and beautifying outdoor storage structures',
    location: 'North Edmonton',
    duration: '1 Day',
    satisfaction: 'Weather Protected',
    beforeImage: '/images/projects/painting-shed-before.webp',
    beforeAlt: 'Before: Weather-beaten dirty backyard shed exterior',
    beforeLabel: 'BEFORE: Weather-Worn Shed Exterior',
    afterImage: '/images/projects/painting-shed-after.webp',
    afterAlt: 'After: Beautifully painted and sealed backyard shed',
    afterLabel: 'AFTER: Weatherproof Exterior Coating',
    description:
      'Dirty, weathered wooden backyard shed showing wood grain drying and risk of moisture rot.',
    afterDescription:
      'Power-washed, primed raw spots, sealed all wood joints, and applied two durable coats of premium fade-resistant exterior acrylic.',
    craftsmanshipHighlights: [
      'Thorough exterior prep and washing',
      'Weatherproofing wood joints',
      'Premium fade-resistant exterior paint',
    ],
    tags: ['Exterior Paint', 'Shed Revival', 'Weatherproof'],
    ctaLink: bookingHref('painting'),
    ctaText: 'Book Exterior Painting',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
];
