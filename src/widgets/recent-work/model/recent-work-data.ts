export type ProjectCategory = 'all' | 'deck' | 'painting' | 'handyman';

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
    afterImage: '/images/projects/deck-staining-split.jpg',
    afterAlt: 'Before and after of a restored outdoor patio deck',
    afterLabel: 'Before & After: Complete Restoration',
    description:
      'Total structural rejuvenation of an aging backyard deck. Yuriy reinforced compromised subframe joists and finished with premium cedar stain for a brand-new look.',
    craftsmanshipHighlights: [
      'Structural rot-prevention and sanding',
      'Engineered penetrating weatherproof stain',
      'Flawless perimeter borders',
    ],
    tags: ['Deck Rebuild', 'Custom Cedar', 'Winter Weatherproof'],
    ctaLink: '/book',
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
    afterImage: '/images/projects/painting-interior-split.jpg',
    afterAlt: 'Before and after of a painted interior wall',
    afterLabel: 'Before & After: Flawless Finish',
    description:
      'Transformed a tired open-concept living area. Included complete drywall repair, settling crack smoothing, and two coats of washable low-VOC enamel.',
    craftsmanshipHighlights: [
      'Full wall skim-coating & dustless drywall sanding',
      'Flexible acoustic caulking on baseboards and trim',
      'Premium zero-splatter, washable paint',
    ],
    tags: ['Interior Paint', 'Sharp Edges', 'Low-VOC'],
    ctaLink: '/book',
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
    afterImage: '/images/projects/handyman-stairs-split.jpg',
    afterAlt: 'Before and after of deck stairs repair',
    afterLabel: 'Before & After: Structural Repair',
    description:
      'Completely removed old, unsafe, rotted wooden stairs and built a brand-new set of heavy-duty stairs using premium pressure-treated lumber.',
    craftsmanshipHighlights: [
      'Safe, code-compliant step rise and run',
      'Heavy-duty galvanized structural screws',
      'Pressure-treated wood for maximum longevity',
    ],
    tags: ['Deck Stairs', 'Structural Repair', 'Carpentry'],
    ctaLink: '/book',
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
    afterImage: '/images/projects/handyman-door-split.jpg',
    afterAlt: 'Before and after of a door handle replacement and frame repair',
    afterLabel: 'Before & After: Hardware Upgrade',
    description:
      'Repaired a heavily scuffed and damaged interior door frame and replaced broken, old hardware with a shiny new designer lever handle.',
    craftsmanshipHighlights: [
      'Door margin planing & strike plate realignment',
      'Seamless patching of deep wood scratches',
      'Solid, rattle-free handle installation',
    ],
    tags: ['Door Repair', 'Hardware', 'Handyman'],
    ctaLink: '/book',
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
    afterImage: '/images/projects/painting-trim-split.jpg',
    afterAlt: 'Before and after of baseboard painting',
    afterLabel: 'Before & After: Trim Refinishing',
    description:
      'Detailed prep and painting of floor baseboards and door casings. We sanded out deep scuffs, caulked all gaps, and applied a durable semi-gloss enamel.',
    craftsmanshipHighlights: [
      'Precision sanding and gap filling',
      'No-bleed crisp painter lines',
      'Durable scuff-resistant enamel finish',
    ],
    tags: ['Trim Paint', 'Baseboards', 'Detail Work'],
    ctaLink: '/book',
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
    afterImage: '/images/projects/painting-shed-split.jpg',
    afterAlt: 'Before and after of a painted backyard shed',
    afterLabel: 'Before & After: Exterior Painting',
    description:
      'Breathed new life into an aging, dirty wooden backyard shed. We pressure washed the surface, sealed cracks, and applied two coats of premium exterior acrylic.',
    craftsmanshipHighlights: [
      'Thorough exterior prep and washing',
      'Weatherproofing wood joints',
      'Premium fade-resistant exterior paint',
    ],
    tags: ['Exterior Paint', 'Shed Revival', 'Weatherproof'],
    ctaLink: '/book',
    ctaText: 'Book Exterior Painting',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
];
