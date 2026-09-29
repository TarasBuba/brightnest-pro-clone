// src/widgets/service-section/model/services-data.ts
import { Wrench, Paintbrush } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  bullets: string[];
  timeline: string;
  photo: string;
  alt: string;
  featured?: boolean;
}

export const FOCUSED_SERVICES: ServiceItem[] = [
  {
    id: 'handyman',
    icon: Wrench,
    title: 'Handyman & Home Repairs',
    featured: true,
    summary: 'Precision home repairs, structural fixes, carpentry, and fixture installations.',
    description:
      'From sticky doors and window hardware adjustments to custom carpentry, drywall patching, and deck restoration, we provide dependable, meticulous craftsmanship across Edmonton. No job is too small — we treat your home with the care and precision of our own.',
    bullets: [
      'Door and window repairs, weatherstripping, and hardware replacement',
      'Fence and gate structural repair (posts, panels, hinges, latches)',
      'Deck board replacement, framing reinforcement, and step repairs',
      'Drywall patching, texture touch-ups, and minor carpentry',
      'TV mounting, heavy shelving, curtain rods, and fixture installation',
      'Comprehensive home repair punch lists and fixture adjustments',
    ],
    timeline:
      'Most repairs are completed same-day or within 24–48 hours. Flexible scheduling across Edmonton.',
    photo: '/images/services/handyman.webp',
    alt: 'Handyman and precision home repair craftsmanship in Edmonton by BrightNest Pro',
  },
  {
    id: 'painting',
    icon: Paintbrush,
    title: 'Professional Painting',
    summary: 'Interior and exterior painting, deck staining, and precision surface refinishing.',
    description:
      'Flawless color and long-lasting protection start with meticulous preparation. We deliver crisp, razor-sharp lines, smooth and even coverage, and premium paint finishes for walls, ceilings, trim, cabinetry, and exterior structures.',
    bullets: [
      'Interior walls, ceilings, baseboards, doors, and trim detailing',
      'Exterior siding, fences, sheds, and architectural elements',
      'Deck and terrace power-washing, sanding, staining, and sealing',
      'Cabinet refinishing and smooth architectural surface updates',
      'Comprehensive surface preparation: sanding, caulking, patching, and priming',
      'Spotless cleanup and detailed final walkthrough on every project',
    ],
    timeline:
      'Single rooms typically completed in 1 day; exterior deck or full interior projects scheduled in 2–4 days.',
    photo: '/images/services/painting.webp',
    alt: 'Professional interior and exterior painting in Edmonton by BrightNest Pro',
  },
];
