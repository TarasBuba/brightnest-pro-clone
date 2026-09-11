import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { BeforeAfterSlider } from './before-after-slider';

interface ProjectCardData {
  id: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  badges: {
    location: string;
    duration: string;
    satisfaction: string;
  };
  description: string;
  deliverables: string[];
  tags: string[];
  ctaLink: string;
}

const ADDITIONAL_PROJECTS: ProjectCardData[] = [
  {
    id: 'cleaning-project',
    category: 'Deep Cleaning & Sanitization',
    title: 'Move-In Deep Clean & Kitchen Restoration',
    image: '/images/services/cleaning.webp',
    imageAlt: 'Spotless clean home kitchen and living area in Edmonton completed by BrightNest Pro',
    badges: {
      location: 'Edmonton homeowner project',
      duration: 'Completed in 1 day',
      satisfaction: '100% Satisfaction',
    },
    description:
      'Complete top-to-bottom scrub and sanitization for a family moving into their new Edmonton home. Included deep appliance degreasing, bathroom grout descaling, and streak-free floor polishing.',
    deliverables: [
      'Oven, fridge & exhaust hood deep interior degreasing',
      'Tile descaling & hospital-grade bathroom sanitization',
      'Baseboard dusting, switch plate disinfection & floor care',
    ],
    tags: ['Move-In Clean', 'Eco-Friendly', 'Pet-Safe'],
    ctaLink: '/book',
  },
  {
    id: 'painting-project',
    category: 'Interior & Exterior Painting',
    title: 'Living Area & Trim Precision Painting',
    image: '/images/services/painting.webp',
    imageAlt: 'Freshly painted living room with crisp edges and smooth walls in Edmonton',
    badges: {
      location: 'Edmonton homeowner project',
      duration: 'Completed in 2 days',
      satisfaction: '100% Satisfaction',
    },
    description:
      'Transformed a dated living room into a luminous, modern space. Yuriy & Karina repaired dry-rot and nail holes, re-caulked all baseboards, and applied two flawless coats of durable low-VOC paint.',
    deliverables: [
      'Comprehensive wall repair, patch sanding & priming',
      'Laser-sharp trim lines & baseboard caulking',
      'Durable, washable zero-splatter premium paint finish',
    ],
    tags: ['Wall Repair', 'Sharp Edges', 'Low-VOC Finish'],
    ctaLink: '/book',
  },
  {
    id: 'handyman-project',
    category: 'Handyman & Carpentry',
    title: 'Custom Carpentry & Fixture Upgrades',
    image: '/images/services/handyman.webp',
    imageAlt: 'Master carpentry and hardware installation work in Edmonton home',
    badges: {
      location: 'Edmonton homeowner project',
      duration: 'Completed in 2 days',
      satisfaction: '100% Satisfaction',
    },
    description:
      'Repaired interior doors that were sticking, replaced worn trim, and mounted heavy modern light fixtures and wall shelving units with heavy-duty structural anchors.',
    deliverables: [
      'Precision door plane, strike plate & lockset realignment',
      'Seamless baseboard & door casing custom joinery',
      'Stud-anchored chandelier & shelving installation',
    ],
    tags: ['Custom Joinery', 'Door Tuning', 'Heavy Mounting'],
    ctaLink: '/book',
  },
];

export function RecentWorkSection() {
  return (
    <section
      id="recent-work"
      aria-labelledby="recent-work-heading"
      className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-20 lg:py-24"
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--color-brand-teal)]/10 via-emerald-100/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Proven Craftsmanship • Edmonton &amp; Surrounding Areas</span>
          </div>

          <h2
            id="recent-work-heading"
            className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
          >
            Our Real Work in Edmonton:{' '}
            <span className="text-[var(--color-cta-primary)]">Before &amp; After Transformations</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
            From worn-out surfaces to showroom finish — see how Yuriy &amp; Karina bring life back to
            homes across Edmonton with dedicated family care.
          </p>
        </div>

        {/* FEATURED SHOWCASE: Deck Before & After */}
        <div className="mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xl sm:p-6 lg:p-8">
            {/* Spotlight Header */}
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <Sparkles className="h-3 w-3" />
                    Featured Transformation
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    <MapPin className="h-3 w-3 text-emerald-600" />
                    Edmonton Homeowner Project
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  Custom Cedar Deck Rebuild &amp; Weatherproof Stain
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Total renewal from raw subframe to a luxury outdoor retreat with a suspended swing chair.
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  Completed in 3 days
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  100% Client Satisfaction
                </span>
              </div>
            </div>

            {/* Interactive Before/After Comparison */}
            <BeforeAfterSlider
              beforeImage="/images/projects/deck-before.jpg"
              beforeAlt="Bare wooden deck subframe before restoration in Edmonton"
              beforeLabel="BEFORE: Structural Framework"
              afterImage="/images/projects/deck-after.jpg"
              afterAlt="Completed cedar deck with hanging swing chair and weatherproof coating in Edmonton"
              afterLabel="AFTER: Custom Cedar Finish & Weatherproof Coating"
            />

            {/* Detailed Scope Breakdown */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What Yuriy &amp; Karina Delivered:
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>Structural joist reinforcement &amp; rot prevention</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>Hand-selected cedar planks with concealed fasteners</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>Dual-layer penetrating stain engineered for Alberta winters</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>Heavy-duty beam anchor mount for hanging egg-chair</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-center gap-3 md:col-span-4">
                <Link
                  href="/book"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[var(--color-cta-primary)] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] active:scale-[0.98]"
                >
                  <span>Request a Deck Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Free in-person Edmonton estimates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL REAL PROJECTS GRID */}
        <div className="mt-16 lg:mt-20">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                More Edmonton Home Transformations
              </h3>
              <p className="mt-1 text-sm sm:text-base text-slate-600">
                Explore our recent cleaning, painting, and handyman projects carried out directly by our team.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-cta-primary)] hover:underline"
            >
              <span>Explore custom project options</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Detailed Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-600">
                    <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-0.5 text-slate-700">
                      <MapPin className="h-3 w-3 text-emerald-600" />
                      {project.badges.location}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-0.5 text-slate-700">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {project.badges.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-0.5 text-emerald-700 font-semibold">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      {project.badges.satisfaction}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-3 font-heading text-lg font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Deliverables */}
                  <ul className="mt-4 flex-1 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
                    {project.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags & Action */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.ctaLink}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-cta-primary)] hover:underline"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
