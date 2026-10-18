import { Paintbrush, Wrench, type LucideIcon } from 'lucide-react';

export type ServiceId = 'handyman' | 'painting';

export interface Service {
  id: ServiceId;
  href: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  bullets: readonly string[];
  timeline: string;
  featured?: boolean;
}

export const SERVICES: readonly Service[] = [
  {
    id: 'handyman',
    href: '/services/handyman/',
    title: 'Handyman & Home Repairs',
    shortTitle: 'Handyman & Minor Repairs',
    icon: Wrench,
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
  },
  {
    id: 'painting',
    href: '/services/painting/',
    title: 'Professional Painting',
    shortTitle: 'Interior & Exterior Painting',
    icon: Paintbrush,
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
      'Prompt, efficient turnaround. Exact project timelines and schedules are confirmed following our project evaluation.',
  },
];

export const SERVICE_IDS = SERVICES.map((s) => s.id) as ServiceId[];

export function isServiceId(value: unknown): value is ServiceId {
  return typeof value === 'string' && (SERVICE_IDS as string[]).includes(value);
}
