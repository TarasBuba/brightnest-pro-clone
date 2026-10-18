import {
  Layers,
  Palette,
  Sparkles,
  SunMedium,
} from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import type { ServicePageConfig } from './types';

export const PAINTING_PAGE_CONFIG: ServicePageConfig = {
  serviceId: 'painting',
  path: ROUTES.painting,
  breadcrumbCurrent: 'Interior & Exterior Painting',
  schema: {
    name: 'Interior & Exterior Painting Services in Edmonton',
    serviceType: 'Residential Painting & Staining',
    description:
      'Professional interior and exterior painting, deck staining, trim detailing, and cabinet refinishing in Edmonton. Crisp lines, premium paints, and meticulous preparation.',
  },
  hero: {
    title: 'Interior & Exterior Painting Services in Edmonton',
    description:
      'Experience the difference that meticulous prep and craftsman precision bring to your home. From crisp interior accent walls to resilient exterior deck staining, Yuriy & Karina deliver stunning, durable finishes across Edmonton.',
    highlights: [
      'Razor-sharp cut lines along ceilings & baseboards',
      'Low-VOC, child- and pet-safe premium paints',
      'Complete floor, trim & furniture protection',
      'Full walkthrough & 100% satisfaction guarantee',
    ],
    primaryCtaLabel: 'Book Painting Service',
    imageSrc: '/images/projects/painting-interior-split.webp',
    imageAlt: 'Interior living room wall painting before and after in an Edmonton home',
    imageBadgeLabel: 'Real Edmonton Project',
    imageCaption: 'Living Room Interior Refresh & Trim Detailing',
  },
  offeringsSection: {
    eyebrow: 'Specialized Painting Services',
    title: 'Flawless Paintwork Designed to Last',
    description:
      'A durable, beautiful paint job is 80% preparation and 20% skilled application. Here is how Yuriy & Karina elevate your home.',
    ctaLinkLabel: 'Request a painting estimate',
    cards: [
      {
        title: 'Interior Walls, Ceilings & Accent Spaces',
        description:
          'Transform living rooms, bedrooms, and high-traffic hallways with rich colors, seamless coverage, and flawless cut-ins. We repair every drywall blemish, patch nail holes, and prime before painting.',
        icon: Palette,
        bullets: [
          'Full interior room painting: walls, ceilings, and closets',
          'Crisp edge lines along trim, crown molding, and ceilings',
          'Drywall patch sanding, primer sealing, and blemish elimination',
          'Low-VOC and zero-VOC family-safe paint formulations',
        ],
      },
      {
        title: 'Trim, Baseboards, Casings & Interior Doors',
        description:
          'Worn baseboards and scuffed doors drag down an otherwise beautiful home. We prep, sand, caulk, and apply durable enamel or semi-gloss finishes that wipe clean easily and look brand new.',
        icon: Layers,
        bullets: [
          'Baseboard, door frame, and window casing refinishing',
          'Elastomeric caulking along trim lines to eliminate draft gaps',
          'Interior door spray and hand-brush leveling without brush marks',
          'High-durability scuff-resistant architectural enamels',
        ],
      },
      {
        title: 'Deck & Fence Power-Washing & Staining',
        description:
          'Edmonton summers and winter snow take a brutal toll on exterior wood. We pressure-wash away gray mildew, sand down splinters, and apply premium penetrating oil or solid acrylic stains.',
        icon: SunMedium,
        bullets: [
          'Deep power-washing and wood surface neutralization',
          'Splinter sanding and deck board moisture assessment',
          'Semi-transparent, semi-solid, and solid stain application',
          'Long-lasting UV and moisture barrier sealing against rotting',
        ],
      },
      {
        title: 'Exterior Siding, Sheds & Architectural Trim',
        description:
          'Boost curb appeal while locking out Alberta’s harsh moisture and cold. We paint vinyl, wood, composite siding, exterior garage doors, soffits, and backyard outbuildings with weather-tested coatings.',
        icon: Sparkles,
        bullets: [
          'Exterior siding, stucco, and wood trim painting',
          'Backyard shed, fence, and detached garage transformations',
          'Peeling paint scraping, power feathering, and spot priming',
          'Weather-resistant exterior coatings formulated for freeze-thaw cycles',
        ],
      },
    ],
  },
  climateSection: {
    badgeIcon: SunMedium,
    badgeText: 'Alberta Climate Protection',
    title: 'Formulated for Edmonton Winters & Summer Sun',
    paragraphs: [
      'Between high-altitude summer ultraviolet radiation and brutal winter freezes dipping below -35°C, ordinary paints crack, peel, and fade quickly in Edmonton. Exterior wood surfaces absorb moisture that freezes and expands, popping conventional paint films right off the grain.',
      'That is why we exclusively use advanced 100% acrylic latex and hybrid penetrating oils engineered specifically for Canadian temperature variations. Our preparation includes thorough power-washing, detailed sanding to open the wood pores, and complete dry-out checks before any stain is applied.',
    ],
    imageSrc: '/images/projects/bench-restoration-split.webp',
    imageAlt: 'Exterior deck sanding and staining before and after in Edmonton',
    noteTitle: 'Deck Restoration Showcase:',
    noteBody: 'Weather-beaten gray cedar restored to warm natural tones with weather-resistant stain seal.',
  },
  showcaseSection: {
    title: 'Recent Painting Transformations',
    description: 'See the precision, clean edges, and vibrant results we bring to Edmonton homes.',
    items: [
      {
        imageSrc: '/images/projects/casing-trim-split.webp',
        imageAlt: 'Baseboard, trim, and doorway painting detail',
        caption: 'Baseboard & Door Trim Detailing',
      },
      {
        imageSrc: '/images/projects/painting-shed-split.webp',
        imageAlt: 'Exterior shed painting transformation before and after',
        caption: 'Exterior Outbuilding & Shed Renewal',
      },
      {
        imageSrc: '/images/hero/collage/hero-1.webp',
        imageAlt: 'Yuriy standing on the completed warm stained cedar deck in Edmonton',
        caption: 'Finished Weatherproof Deck Seal',
        imageClassName: 'object-[center_35%]',
        spanTwoOnSm: true,
      },
    ],
  },
  faqSection: {
    title: 'Common Questions About Our Painting Services',
    description: 'Everything you need to know about paint selection, surface prep, and project timelines.',
    faqs: [
      {
        question: 'How much does interior or exterior painting cost in Edmonton?',
        answer:
          'We provide an itemized quote following a preliminary project evaluation. Please note that on-site in-person assessments require an inspection fee, whereas preliminary estimates based on submitted photos are completely free.',
      },
      {
        question: 'How long does a typical painting project take?',
        answer:
          'Project duration depends entirely on the unique scope and characteristics of each individual project. Factors such as room size, surface condition, required drywall patching or sanding, architectural trim details, and paint curing times all influence the timeline. Following our project evaluation, we provide a clear, realistic schedule tailored to your space.',
      },
      {
        question: 'What type of paint and products do you use?',
        answer:
          'We exclusively use premium, eco-friendly, low-VOC paints and high-grade professional finishes. These formulations deliver exceptional coverage, rich color depth, and superior washability while ensuring an odorless, healthy environment that is completely safe for your children and pets.',
      },
      {
        question: 'Do I need to move all my furniture before you arrive?',
        answer:
          'If needed, we can assist with moving and repositioning your furniture prior to painting; please note that heavy furniture moving is an additional billable service handled as a separate scope of work. All moved items are safely draped, and flooring is protected with heavy-duty canvas drop cloths.',
      },
      {
        question: 'Do you offer a satisfaction guarantee on your painting?',
        answer:
          'Absolutely. Yuriy conducts a detailed walkthrough with you at project completion to inspect every cut-in line, surface smoothness, and coverage consistency. If anything does not meet your standard, we touch it up immediately. We are also fully licensed and insured across Alberta.',
      },
    ],
  },
  ctaBanner: {
    badgeText: 'Meticulous Attention to Every Detail',
    title: 'Give Your Edmonton Home the Fresh Look It Deserves',
    description: `Request your free photo estimate today. We will review your project details and reply within ${siteConfig.responseMinutes} minutes, 24/7 Monday through Sunday, with clear recommendations and pricing.`,
    primaryCtaLabel: 'Get Your Free Photo Estimate',
  },
};
