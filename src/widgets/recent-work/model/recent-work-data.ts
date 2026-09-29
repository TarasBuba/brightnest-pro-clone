export type ProjectCategory = 'all' | 'deck' | 'painting' | 'handyman' | 'cleaning';

export interface BentoProject {
  id: string;
  category: 'deck' | 'painting' | 'handyman' | 'cleaning';
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
    categoryLabel: 'Deck Restoration & Carpentry',
    title: 'Custom Cedar Deck Rebuild & Weatherproof Stain',
    subtitle: 'From rotted framework to a luxury cedar lounge with suspended swing chair',
    location: 'Southwest Edmonton',
    duration: '3 Days',
    satisfaction: '100% Satisfaction',
    beforeImage: '/images/projects/deck-before.jpg',
    beforeAlt: 'Bare wooden deck framework and structural joists before restoration in Edmonton',
    beforeLabel: 'BEFORE: Bare Structural Framework',
    afterImage: '/images/projects/deck-after.jpg',
    afterAlt: 'Completed cedar deck with hanging swing chair and weatherproof coating in Edmonton',
    afterLabel: 'AFTER: Completed Cedar Sanctuary',
    description:
      'Total structural rejuvenation of an aging backyard deck. Yuriy reinforced compromised subframe joists, laid premium edge-grooved cedar with hidden fasteners, and secured a heavy-duty ceiling beam anchor for the family swing chair.',
    afterDescription:
      'Engineered for Alberta winters (-40°C rated) with 2-layer hydrophobic UV-blocking oil stain and flawless mitered perimeter borders.',
    craftsmanshipHighlights: [
      'Structural joist sistering & rot-prevention flashing',
      'Hand-milled cedar boards with concealed fastener clips',
      'Engineered beam anchor rated for 400 lbs swing load',
      'Dual-layer Alberta winter-rated penetrating oil stain',
    ],
    tags: ['Deck Rebuild', 'Custom Cedar', 'Winter Weatherproof', 'Structural Joinery'],
    ctaLink: '/book',
    ctaText: 'Request a Deck Quote',
    featured: true,
    gridClasses: {
      container: 'col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-2',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full',
    },
  },
  {
    id: 'painting-interior',
    category: 'painting',
    categoryLabel: 'Precision Painting',
    title: 'Living Area & Trim Precision Coating',
    subtitle: 'Flawless wall smoothing, razor-sharp trim lines & low-VOC washable finish',
    location: 'Glenora, Central Edmonton',
    duration: '2 Days',
    satisfaction: 'Flawless Finish',
    beforeImage: '/images/projects/deck-framework.jpg',
    beforeAlt: 'Surface patching, drywall repair, and priming prep work',
    beforeLabel: 'PROCESS: Surface Prep & Priming',
    afterImage: '/images/projects/painting-interior.webp',
    afterAlt: 'Freshly painted luminous living room with crisp edges and smooth walls in Edmonton',
    afterLabel: 'AFTER: Flawless Designer Satin Finish',
    description:
      'Transformed a tired open-concept living area into a crisp, luminous sanctuary. Included complete drywall repair, settling crack smoothing, baseboard caulking, and two coats of washable low-VOC enamel.',
    afterDescription:
      'Laser-straight cut-ins against ceiling junctions and baseboards with zero roller stipple or paint bleed.',
    craftsmanshipHighlights: [
      'Full wall skim-coating & dustless drywall sanding',
      'Flexible acoustic caulking on baseboards and trim',
      'Premium zero-splatter, washable, kid- and pet-safe paint',
    ],
    tags: ['Interior Paint', 'Sharp Edges', 'Low-VOC', 'Drywall Repair'],
    ctaLink: '/book',
    ctaText: 'Book Interior Painting',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-4',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]',
    },
  },
  {
    id: 'handyman-joinery',
    category: 'handyman',
    categoryLabel: 'Handyman & Joinery',
    title: 'Window & Door Weatherization & Hardware Upgrades',
    subtitle: 'Precision draft-proofing, door plane alignment & heavy fixture mounting',
    location: 'Windermere & Sherwood Park',
    duration: '1 Day',
    satisfaction: 'Zero Drafts Guaranteed',
    beforeImage: '/images/projects/deck-process.jpg',
    beforeAlt: 'Yuriy tuning door frames and structural fittings with precision tools',
    beforeLabel: 'PROCESS: Precision Tooling & Realignment',
    afterImage: '/images/projects/handyman-repair.webp',
    afterAlt: 'Fine finish carpentry, custom interior trim, and secure hardware installation',
    afterLabel: 'AFTER: Smooth Glide & Weather-Sealed',
    description:
      'Eliminated stubborn winter drafts and sticky interior doors throughout a two-story home. Planed door margins, replaced worn perimeter weatherstripping, and mounted designer heavy fixtures into solid studs.',
    afterDescription:
      'Doors now click shut with fingertip pressure and exterior thresholds are 100% draft-sealed against Edmonton winter winds.',
    craftsmanshipHighlights: [
      'Door margin planing & strike plate realignment',
      'High-grade silicone compression weatherstripping',
      'Heavy structural stud anchors for lighting & shelving',
    ],
    tags: ['Door Tuning', 'Draft Proofing', 'Custom Joinery', 'Heavy Mounting'],
    ctaLink: '/book',
    ctaText: 'Request Handyman Service',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-4',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]',
    },
  },
  {
    id: 'deck-staining-shield',
    category: 'deck',
    categoryLabel: 'Protective Wood Care',
    title: 'Alberta Winter-Shield Penetrating Oil Staining',
    subtitle: 'Deep fiber conditioning formulated to survive freeze-thaw cycles and extreme UV',
    location: 'St. Albert & North Edmonton',
    duration: '1.5 Days',
    satisfaction: 'UV & Ice Protected',
    beforeImage: '/images/projects/deck-staining.jpg',
    beforeAlt: 'Karina hand-applying deep penetrating weather-shield stain to wood decking',
    beforeLabel: 'PROCESS: Deep Hand-Rolled Oil Coating',
    afterImage: '/images/projects/deck-after.jpg',
    afterAlt: 'Rich satin cedar finish repelling moisture with visible water beading',
    afterLabel: 'AFTER: Deep Hydrophobic Satin Shield',
    description:
      'Specialized two-stage deep-penetrating oil stain applied to horizontal and vertical cedar surfaces. Reaches deep into cellular wood fibers to prevent water uptake, freezing expansion, and graying from UV exposure.',
    afterDescription:
      'Superior water-beading performance tested against Edmonton -40°C snow melts with zero peeling or flaking.',
    craftsmanshipHighlights: [
      'Two-coat deep penetrating natural oil formulation',
      'UV-absorbing trans-oxide pigments for rich grain glow',
      'Hydrophobic barrier prevents moisture-induced splitting',
    ],
    tags: ['Winter Shield', 'UV Defense', 'Penetrating Oil', 'Non-Peeling'],
    ctaLink: '/book',
    ctaText: 'Get Deck Shield Quote',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
  {
    id: 'deep-clean-restoration',
    category: 'cleaning',
    categoryLabel: 'Deep Cleaning & Sanitization',
    title: 'Move-In Deep Clean & Kitchen Restoration',
    subtitle: 'Intensive hospital-grade sanitization, appliance degreasing & streak-free detailing',
    location: 'Terwillegar & SW Edmonton',
    duration: '1 Day',
    satisfaction: '100% Sanitized & Spotless',
    beforeImage: '/images/projects/cleaning-restoration.webp',
    beforeAlt: 'Kitchen and living space detailed restoration process',
    beforeLabel: 'FOCUS: Deep Degreasing & Descaling',
    afterImage: '/images/projects/cleaning-restoration.webp',
    afterAlt: 'Immaculately spotless, gleaming kitchen with hospital-grade sanitized surfaces',
    afterLabel: 'AFTER: Spotless Sanitized Sanctuary',
    description:
      'Complete top-to-bottom scrub and sanitization for new homeowners. Deep interior appliance degreasing (oven, fridge, range hood), bathroom grout steam descaling, and multi-stage hardwood floor polishing.',
    afterDescription:
      'Non-toxic, pet-safe, hospital-grade cleaning solutions leaving the home completely fresh, allergen-free, and move-in ready.',
    craftsmanshipHighlights: [
      'Oven, fridge & exhaust hood carbon degreasing',
      'Grout steam descaling & limescale eradication',
      'HEPA-filtered air purification & pet-safe sanitization',
    ],
    tags: ['Move-In Clean', 'Eco-Friendly', 'Pet-Safe', 'Appliance Degrease'],
    ctaLink: '/book',
    ctaText: 'Schedule Deep Clean',
    gridClasses: {
      container: 'col-span-1 md:col-span-1 lg:col-span-6',
      imageAspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]',
    },
  },
];
