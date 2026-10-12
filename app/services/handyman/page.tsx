import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
  Phone,
  ArrowRight,
  Hammer,
  DoorOpen,
  Layers,
  ThermometerSnowflake,
  MapPin,
  HelpCircle,
  Calendar,
} from 'lucide-react';
import { siteConfig, absoluteUrl } from '@/src/shared/config/site';
import { ROUTES, bookingHref } from '@/src/shared/config/navigation';
import { buildMetadata, buildBreadcrumbJsonLd, JsonLdScript } from '@/src/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Handyman & Home Repairs Edmonton',
  description:
    'Reliable handyman & home repair services in Edmonton. Doors, trim, drywall patching, deck & fence repairs. 15-min callback, upfront pricing, guaranteed care.',
  path: ROUTES.handyman,
});

interface ServiceCard {
  title: string;
  description: string;
  icon: typeof Wrench;
  bullets: string[];
}

const HANDYMAN_SERVICES: ServiceCard[] = [
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
];

const HANDYMAN_FAQS = [
  {
    question: 'How do you price handyman projects in Edmonton?',
    answer:
      'We believe in absolute pricing transparency. For small defined repairs, we provide upfront flat-rate quotes; for multi-item punch lists, we offer transparent time-and-materials estimates. There are never surprise fees or hidden travel charges within the Edmonton capital region.',
  },
  {
    question: 'How quickly can Yuriy start my repair project?',
    answer:
      'We respond to every booking or phone inquiry within 15 minutes during regular business hours. Most smaller handyman repairs are scheduled and completed within 24 to 48 hours, with same-day emergency slots frequently available.',
  },
  {
    question: 'Do I need to provide tools and materials?',
    answer:
      'Yuriy arrives fully equipped with commercial-grade professional tools, ladders, fasteners, shims, caulking, and adhesives. For fixtures (doors, locks, shelves, light fixtures), you can supply your preferred style or we can source matching materials for you.',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer:
      'Yes, 100%. We back every repair with our BrightNest satisfaction guarantee. If any adjustment or repair is not performing properly, Yuriy returns promptly to correct it at no additional cost. We are also fully insured with comprehensive liability coverage across Alberta.',
  },
  {
    question: 'Is my repair job too small for BrightNest Pro?',
    answer:
      'Never. No project is too small. Whether you need a single sticking exterior deadbolt fixed before winter or an entire punch list of odd jobs knocked out, we treat your home with the same family-level attentiveness.',
  },
];

const NEIGHBORHOODS = [
  'Glenora',
  'Strathcona',
  'Windermere',
  'Terwillegar',
  'Riverbend',
  'Summerside',
  'Crestwood',
  'Oliver',
  'Highlands',
  'Griesbach',
  'Sherwood Park',
  'St. Albert',
  'Spruce Grove',
  'Leduc',
];

export default function HandymanPage() {
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: 'Services', path: '/#services' },
    { name: 'Handyman & Home Repairs', path: ROUTES.handyman },
  ]);

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl('/services/handyman/#service'),
    name: 'Handyman & Home Repair Services in Edmonton',
    serviceType: 'Handyman & Home Repairs',
    description:
      'Dependable family-owned handyman repairs in Edmonton: door adjustments, drywall patching, deck and fence structural repairs, custom carpentry, and fixture installations.',
    provider: {
      '@id': absoluteUrl('/#business'),
    },
    areaServed: siteConfig.serviceAreaCities.map((cityName) => ({
      '@type': 'City',
      name: cityName,
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(ROUTES.handyman),
      servicePhone: siteConfig.phoneRaw,
    },
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HANDYMAN_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <JsonLdScript data={breadcrumbData} />
      <JsonLdScript data={serviceData} />
      <JsonLdScript data={faqData} />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-secondary)] via-white to-[var(--color-bg-primary)] px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <li>
                <Link href={ROUTES.home} className="transition-colors hover:text-[var(--color-cta-primary)]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li>
                <Link href="/#services" className="transition-colors hover:text-[var(--color-cta-primary)]">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li aria-current="page" className="font-semibold text-[var(--color-text-primary)]">
                Handyman &amp; Home Repairs
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-sm">
                  <div className="flex items-center text-amber-500" aria-hidden="true">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                  <span>Rated 5.0 in Edmonton</span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-teal-light)] px-3.5 py-1 text-xs font-semibold text-[var(--color-brand-navy)] shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-[var(--color-cta-primary)]" aria-hidden="true" />
                  <span>15-Minute Callback Promise</span>
                </div>
              </div>

              {/* Main H1 */}
              <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl leading-[1.12]">
                Handyman &amp; Home Repair Services in Edmonton
              </h1>

              {/* Subtitle / Intro */}
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Tired of sticking doors, drafty entryways, chipped drywall, or a sagging deck? Yuriy brings precision European craftsmanship, reliable diagnostics, and honest family values to every repair across Edmonton.
              </p>

              {/* Trust highlights */}
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Prompt same-week &amp; same-day repair slots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Transparent upfront estimates — no surprise fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Fully insured liability protection in Alberta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>100% satisfaction guarantee on all labor</span>
                </li>
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={bookingHref('handyman')}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Book Handyman Service</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-[var(--color-text-primary)] shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  <Phone className="h-4 w-4 text-[var(--color-cta-primary)]" aria-hidden="true" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/projects/handyman-door-split.webp"
                    alt="Precision door alignment and frame repair before and after in an Edmonton home"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-[var(--color-text-secondary)] flex items-center justify-between">
                  <span className="font-semibold text-[var(--color-text-primary)]">Real Edmonton Project</span>
                  <span>Exterior Door Re-alignment &amp; Draft Seal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-cta-primary)]">
              Comprehensive Repairs
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              What We Solve for Edmonton Homeowners
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              Instead of juggling multiple specialized contractors, let Yuriy take care of your complete home maintenance punch list with dedicated attention to detail.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {HANDYMAN_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-teal-light)] text-[var(--color-cta-primary)]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-[var(--color-cta-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <Link
                      href={bookingHref('handyman')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-cta-primary)] transition-colors hover:text-[var(--color-cta-primary-hover)]"
                    >
                      <span>Request a quote for this repair</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Edmonton Local Climate & Neighborhoods Section */}
      <section className="bg-slate-900 text-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-400 border border-teal-500/20">
                <ThermometerSnowflake className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Built for Alberta Weather</span>
              </div>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Engineered for Edmonton’s Extreme Freeze-Thaw Cycles
              </h2>

              <p className="text-base leading-relaxed text-slate-300">
                Edmonton homes endure extreme temperature swings, plunging below -35°C in deep winter and surging during sudden Chinook winds. This constant expansion and contraction places severe mechanical stress on framing, causes foundation shifting, warps exterior door jambs, loosens deck fasteners, and generates interior drywall settlement cracks.
              </p>

              <p className="text-base leading-relaxed text-slate-300">
                Yuriy understands how local soil conditions and winter moisture cycles impact homes in mature river valley neighborhoods like Glenora and Strathcona, as well as modern two-story builds in Windermere and Summerside. Every repair is reinforced with heavy-duty structural screws, flexible polyurethane caulking, and proper thermal shimming to stand strong year after year.
              </p>

              <div>
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-teal-400" aria-hidden="true" />
                  Neighborhoods &amp; Communities We Proudly Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {NEIGHBORHOODS.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 shadow-2xl">
                <Image
                  src="/images/projects/handyman-stairs-split.webp"
                  alt="Stair tread repair and structural reinforcement in Edmonton"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4 text-xs text-slate-400">
                <strong className="text-slate-200 block mb-1">Local Quality Guarantee:</strong>
                All materials, fasteners, and sealants chosen specifically for Northern Alberta cold tolerances.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-cta-primary)]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Everything You Need to Know About Our Handyman Services
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-secondary)]">
              Direct, transparent answers from Yuriy &amp; Karina to help you make informed decisions for your home.
            </p>
          </div>

          <div className="space-y-4">
            {HANDYMAN_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all open:border-teal-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-bold text-[var(--color-text-primary)] list-none">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-5 w-5 text-[var(--color-cta-primary)] shrink-0" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="ml-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] pl-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-500/30 px-3.5 py-1 text-xs font-semibold text-teal-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>Honest Family Craftsmanship</span>
          </div>

          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Ready to Cross Those Home Repairs Off Your List?
          </h2>

          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            Send us a quick description of your project or snap a photo. We will review your repair requirements and reply within 15 minutes with honest recommendations and upfront pricing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={bookingHref('handyman')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[var(--color-cta-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span>Get Your Free Repair Quote</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-slate-700 bg-slate-800/80 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-5 w-5 text-teal-400" aria-hidden="true" />
              <span>Call Yuriy at {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
