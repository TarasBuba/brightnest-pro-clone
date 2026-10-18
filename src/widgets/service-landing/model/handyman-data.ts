import {
  DoorOpen,
  Hammer,
  Layers,
  ThermometerSnowflake,
  Wrench,
} from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import type { ServicePageConfig } from './types';

export const HANDYMAN_PAGE_CONFIG: ServicePageConfig = {
  serviceId: 'handyman',
  path: ROUTES.handyman,
  breadcrumbCurrent: 'Handyman & Home Repairs',
  schema: {
    name: 'Handyman & Home Repair Services in Edmonton',
    serviceType: 'Handyman & Home Repairs',
    description:
      'Dependable family-owned handyman repairs in Edmonton: door adjustments, drywall patching, deck and fence structural repairs, custom carpentry, and fixture installations.',
  },
  hero: {
    title: 'Handyman & Home Repair Services in Edmonton',
    description:
      'Tired of sticking doors, drafty entryways, chipped drywall, or a sagging deck? Yuriy brings precision European craftsmanship, reliable diagnostics, and honest family values to every repair across Edmonton.',
    highlights: [
      'Prompt same-week & same-day repair slots',
      'Transparent upfront estimates — clear pricing',
      'Fully insured liability protection in Alberta',
      '100% satisfaction guarantee on all labor',
    ],
    primaryCtaLabel: 'Book Handyman Service',
    imageSrc: '/images/projects/handyman-door-split.webp',
    imageAlt: 'Precision door alignment and frame repair before and after in an Edmonton home',
    imageBadgeLabel: 'Real Edmonton Project',
    imageCaption: 'Exterior Door Re-alignment & Draft Seal',
  },
  offeringsSection: {
    eyebrow: 'Comprehensive Repairs',
    title: 'What We Solve for Edmonton Homeowners',
    description:
      'Instead of juggling multiple specialized contractors, let Yuriy take care of your complete home maintenance punch list with dedicated attention to detail.',
    ctaLinkLabel: 'Request a quote for this repair',
    cards: [
      {
        title: 'Doors, Windows & Hardware Adjustments',
        description:
          'Edmonton’s dramatic seasonal shifts cause doors to stick, draft, and fail to latch properly. Yuriy realigns hinges, replaces weatherstripping, adjusts strike plates, and restores smooth operation.',
        icon: DoorOpen,
        bullets: [
          'Sticking, rubbing, or sagging exterior and interior doors',
          'Weatherstripping and draft-proofing for Edmonton winters',
          'Door handle, deadbolt, and smart lock installation',
          'Sliding patio door roller adjustment and track cleaning',
        ],
      },
      {
        title: 'Drywall Patching & Minor Carpentry',
        description:
          'From moving accidents and plumbing access cuts to seasonal drywall cracks, we deliver smooth repairs with texture matching that seamlessly blends into your existing walls.',
        icon: Layers,
        bullets: [
          'Wall and ceiling drywall holes, dents, and settlement cracks',
          'Baseboard, casing, and interior trim replacement',
          'Custom closet shelving and built-in woodwork repairs',
          'Texture blending (orange peel, knockdown, and smooth finishes)',
        ],
      },
      {
        title: 'Deck & Fence Structural Repairs',
        description:
          'Freeze-thaw cycles heave fence posts and loosen deck boards across Alberta. We repair framing, reinforce joists, replace weathered boards, and fix sagging gates.',
        icon: Hammer,
        bullets: [
          'Rotten or loose deck board and stair tread replacement',
          'Under-deck framing reinforcement and post leveling',
          'Fence post reinforcement and loose picket repairs',
          'Gate hinge realignment, heavy-duty latches, and sag prevention',
        ],
      },
      {
        title: 'Home Fixtures & Specialty Installations',
        description:
          'Take the stress out of heavy mounting and everyday upgrades. Every installation is securely anchored to wall studs for rock-solid safety and clean alignment.',
        icon: Wrench,
        bullets: [
          'Secure TV wall mounting with concealed cord routing',
          'Heavy mirror, artwork, and floating shelf installations',
          'Curtain rods, window blinds, and bathroom accessory mounting',
          'Complete pre-sale and post-move home punch list completion',
        ],
      },
    ],
  },
  climateSection: {
    badgeIcon: ThermometerSnowflake,
    badgeText: 'Built for Alberta Weather',
    title: 'Engineered for Edmonton’s Extreme Freeze-Thaw Cycles',
    paragraphs: [
      'Edmonton homes endure extreme temperature swings, plunging below -35°C in deep winter and surging during sudden Chinook winds. This constant expansion and contraction places severe mechanical stress on framing, causes foundation shifting, warps exterior door jambs, loosens deck fasteners, and generates interior drywall settlement cracks.',
      'Yuriy understands how local soil conditions and winter moisture cycles impact homes in mature river valley neighborhoods like Glenora and Strathcona, as well as modern two-story builds in Windermere and Summerside. Every repair is reinforced with heavy-duty structural screws, flexible polyurethane caulking, and proper thermal shimming to stand strong year after year.',
    ],
    imageSrc: '/images/projects/handyman-stairs-split.webp',
    imageAlt: 'Stair tread repair and structural reinforcement in Edmonton',
    noteTitle: 'Local Quality Guarantee:',
    noteBody: 'All materials, fasteners, and sealants chosen specifically for Northern Alberta cold tolerances.',
  },
  faqSection: {
    title: 'Everything You Need to Know About Our Handyman Services',
    description: 'Direct, transparent answers from Yuriy & Karina to help you make informed decisions for your home.',
    faqs: [
      {
        question: 'How do you price handyman projects in Edmonton?',
        answer:
          'We determine pricing based on a thorough evaluation of each specific project scope. Because every home and repair is unique, we do not provide preliminary sight-unseen estimates—ensuring your final price is accurate, transparent, and free of unexpected surprises.',
      },
      {
        question: 'How quickly can Yuriy start my repair project?',
        answer: `We respond to every booking or phone inquiry within ${siteConfig.responseMinutes} minutes, 24/7 Monday through Sunday. Most repairs are scheduled and completed within 24 to 48 hours. For urgent or emergency repairs requiring immediate same-day attention, an additional emergency service fee applies.`,
      },
      {
        question: 'Do I need to provide tools and materials?',
        answer:
          'Yuriy arrives fully equipped with commercial-grade professional tools, ladders, fasteners, shims, caulking, and adhesives. For fixtures (doors, locks, shelves), you can supply your preferred style or we can source matching materials for you.',
      },
      {
        question: 'Are you licensed and insured in Alberta?',
        answer:
          'Yes, absolutely. BrightNest Pro Services is fully licensed and carries comprehensive commercial general liability insurance in Alberta. You can have complete confidence and peace of mind knowing your property is protected while we work.',
      },
      {
        question: 'Is my repair job too small for BrightNest Pro Services?',
        answer:
          'Never. No project is too small. Whether you need a single sticking exterior deadbolt fixed before winter or an entire punch list of odd jobs knocked out, BrightNest Pro Services treats your home with the same family-level attentiveness.',
      },
    ],
  },
  ctaBanner: {
    badgeText: 'Honest Family Craftsmanship',
    title: 'Ready to Cross Those Home Repairs Off Your List?',
    description: `Send us a quick description of your project or snap a photo. We will review your repair requirements and reply within ${siteConfig.responseMinutes} minutes, 24/7 Monday through Sunday, with honest recommendations and upfront pricing.`,
    primaryCtaLabel: 'Get Your Free Repair Quote',
  },
};
