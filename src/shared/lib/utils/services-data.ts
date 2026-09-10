import { Wrench, Paintbrush, Sparkles, Home } from 'lucide-react';
import { IconPlant2 } from '@tabler/icons-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon | typeof IconPlant2;
  summary: string;
  description: string;
  bullets: string[];
  timeline: string;
  photo: string;
  alt: string;
  featured?: boolean;
};

export const Services: Service[] = [
  {
    id: 'handyman',
    icon: Wrench,
    title: 'Handyman & Minor Repairs',
    summary: 'Fast, reliable fixes for the small jobs that add up.',
    description:
      'From a squeaky door to a broken deck board, we handle the repairs that keep your home safe and functional. No job is too small — we treat every fix with the same care as a full renovation.',
    bullets: [
      'Door and window repairs, adjustments, and hardware replacement',
      'Fence and gate repair (posts, panels, hinges, latches)',
      'Deck board replacement and structural fixes',
      'Drywall patching and minor carpentry',
      'Furniture assembly and mounting (TVs, shelves, curtain rods)',
      'General home repair task lists',
    ],
    timeline:
      'Most repairs are completed same-day or within 24–48 hours. Larger repair lists are scheduled within the week.',
    photo: '/images/services/fence-repair-edmonton-after.webp',
    alt: 'Repaired wooden fence panel completed by BrightNest Pro Services in Edmonton',
  },
  {
    id: 'painting',
    icon: Paintbrush,
    title: 'Painting Services',
    summary: 'Interior and exterior painting that transforms a space.',
    description:
      "A fresh coat of paint is one of the fastest ways to make a home feel new again. We bring the same attention to detail we'd want in our own home — clean lines, even coverage, no shortcuts.",
    bullets: [
      'Interior walls, ceilings, trim, and doors',
      'Exterior siding, fences, sheds, and outbuildings',
      'Cabinet and furniture refinishing',
      'Surface prep: sanding, patching, priming',
      "Color consultation if you're unsure where to start",
      'Full cleanup after every project',
    ],
    timeline:
      'A single room typically takes one day; full exterior projects run 2–4 days depending on size and weather.',
    photo: '/images/services/painting-edmonton-benches-after.webp',
    alt: 'Freshly painted garden benches completed by BrightNest Pro Services in Edmonton',
  },
  {
    id: 'cleaning',
    icon: Sparkles,
    title: 'Cleaning Services',
    summary: 'Deep, detailed cleaning for a home that feels cared for.',
    description:
      "A clean home is a comfortable home. We go beyond a quick wipe-down — every cabinet, window, and corner gets real attention, because that's the standard we'd want for our own family.",
    bullets: [
      'Deep cleaning: kitchens, bathrooms, living areas, bedrooms',
      'Inside cabinet and drawer cleaning',
      'Window washing (interior and exterior)',
      'Move-in / move-out cleaning',
      'Post-renovation cleanup',
      'Recurring cleaning plans (weekly, bi-weekly, monthly)',
    ],
    timeline:
      'A standard home deep clean takes 3–5 hours depending on size. Recurring clients get a customized checklist.',
    photo: '/images/services/kitchen-cabinets-cleaning.webp',
    alt: 'Kitchen cabinets being deep cleaned by BrightNest Pro Services in Edmonton',
  },
  {
    id: 'yard-work',
    icon: IconPlant2,
    title: 'Yard Work & Exterior Care',
    summary: 'Keeping the outside of your home as welcoming as the inside.',
    description:
      'Your yard is the first thing people see. We help keep it healthy, tidy, and ready for every season — from spring cleanup to fall prep, and everything in between.',
    bullets: [
      'Lawn mowing, edging, and trimming',
      'Garden bed maintenance and weeding',
      'Seasonal cleanup (leaves, debris, storm damage)',
      'Power washing: siding, decks, walkways, fences',
      'Small landscaping touch-ups and outdoor furniture care',
      'Seasonal snow removal (Edmonton winters)',
    ],
    timeline:
      'Most yard visits take 1–3 hours depending on lot size. One-time cleanups and seasonal maintenance plans available.',
    photo: '/images/services/power-washing-edmonton-siding.webp',
    alt: 'Exterior siding being power washed by BrightNest Pro Services in Edmonton',
  },
  {
    id: 'complete-care',
    icon: Home,
    title: 'Complete Home Care Package',
    featured: true,
    summary: 'One team, every service, one less thing to manage.',
    description:
      "Ideal for homeowners who want it all handled — painting, cleaning, yard work, and repairs — without juggling multiple contractors. This is the same care we'd want for our own home, applied to yours from top to bottom.",
    bullets: [
      'A full home walkthrough to identify priority areas',
      'Interior and/or exterior painting as needed',
      'Deep cleaning of key living spaces',
      'Yard cleanup and exterior power washing',
      'Minor repairs completed during the same visit',
      'One point of contact — no coordinating separate crews',
    ],
    timeline:
      'Best for seasonal refreshes, move-in prep, or pre-sale touch-ups. We start with a free walkthrough, then provide one clear, all-in quote.',
    photo: '/images/services/painting-edmonton-fence-after.webp',
    alt: 'Multiple completed home improvement projects by BrightNest Pro Services in Edmonton',
  },
];

export default Services;
