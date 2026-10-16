import Image from 'next/image';
import Link from 'next/link';
import {
  Paintbrush,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
  Phone,
  ArrowRight,
  SunMedium,
  Palette,
  Sparkles,
  Layers,
  MapPin,
  HelpCircle,
  Calendar,
} from 'lucide-react';
import { siteConfig, absoluteUrl } from '@/src/shared/config/site';
import { ROUTES, bookingHref } from '@/src/shared/config/navigation';
import { buildMetadata, buildBreadcrumbJsonLd, JsonLdScript } from '@/src/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Interior & Exterior House Painting Edmonton',
  description:
    `Expert interior & exterior house painting, cabinet refinishing, and deck staining in Edmonton. Flawless finishes, durable coats, and rapid ${siteConfig.responseMinutes}-minute callbacks.`,
  path: ROUTES.painting,
});

interface ServiceCard {
  title: string;
  description: string;
  icon: typeof Paintbrush;
  bullets: string[];
}

const PAINTING_SERVICES: ServiceCard[] = [
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
];

const PAINTING_FAQS = [
  {
    question: 'How much does interior or exterior painting cost in Edmonton?',
    answer:
      'We provide detailed, transparent quotes based on square footage, prep requirements, and paint choice. You receive an itemized estimate outlining prep work, primer, finish coats, and cleanup before any work begins. There are zero surprise add-ons.',
  },
  {
    question: 'How long does a typical painting project take?',
    answer:
      'A single bedroom or office is usually finished in one day. Multi-room or complete home interior updates typically take 2 to 4 days. Exterior deck staining is usually completed across 1 to 3 days, depending on wood moisture levels and weather conditions.',
  },
  {
    question: 'What paint brands and products do you use?',
    answer:
      'We use top-tier, contractor-grade paints from trusted manufacturers including Benjamin Moore (Regal Select, Aura) and Sherwin-Williams (Emerald, Duration). These paints offer unmatched washability, fade resistance, and low-VOC emissions that are safe for your children and pets.',
  },
  {
    question: 'Do I need to move all my furniture before you arrive?',
    answer:
      'We help move larger furniture pieces into room centers and carefully drape them with clean plastic sheeting. All flooring is fully protected with heavy-duty canvas drop cloths from edge to edge. We leave your space cleaner than we found it.',
  },
  {
    question: 'Do you offer a satisfaction guarantee on your painting?',
    answer:
      'Absolutely. Yuriy conducts a detailed walkthrough with you at project completion to inspect every cut-in line, surface smoothness, and coverage consistency. If anything does not meet your standard, we touch it up immediately. We are also fully licensed and insured across Alberta.',
  },
];

export default function PaintingPage() {
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: 'Services', path: '/#services' },
    { name: 'Painting Services', path: ROUTES.painting },
  ]);

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl('/services/painting/#service'),
    url: absoluteUrl(ROUTES.painting),
    name: 'Interior & Exterior Painting Services in Edmonton',
    serviceType: 'Residential Painting & Staining',
    description:
      'Professional interior and exterior painting, deck staining, trim detailing, and cabinet refinishing in Edmonton. Crisp lines, premium paints, and meticulous preparation.',
    provider: {
      '@id': absoluteUrl('/#business'),
    },
    areaServed: siteConfig.serviceAreaCities.map((cityName) => ({
      '@type': 'City',
      name: cityName,
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(ROUTES.painting),
      servicePhone: siteConfig.phoneRaw,
    },
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PAINTING_FAQS.map((faq) => ({
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

      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-secondary)] via-white to-[var(--color-bg-primary)] px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
                Interior &amp; Exterior Painting
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
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
                  <span>{siteConfig.responseMinutes}-Minute Callback Promise</span>
                </div>
              </div>

              <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl leading-[1.12]">
                Interior &amp; Exterior Painting Services in Edmonton
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
                Experience the difference that meticulous prep and craftsman precision bring to your home. From crisp interior accent walls to resilient exterior deck staining, Yuriy &amp; Karina deliver stunning, durable finishes across Edmonton.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Razor-sharp cut lines along ceilings &amp; baseboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Low-VOC, child- and pet-safe premium paints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Complete floor, trim &amp; furniture protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-success)] shrink-0" aria-hidden="true" />
                  <span>Full walkthrough &amp; 100% satisfaction guarantee</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={bookingHref('painting')}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[var(--color-cta-primary-hover)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
                >
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                  <span>Book Painting Service</span>
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

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="relative aspect-[43/24] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/projects/painting-interior-split.webp"
                    alt="Interior living room wall painting before and after in an Edmonton home"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-[var(--color-text-secondary)] flex items-center justify-between">
                  <span className="font-semibold text-[var(--color-text-primary)]">Real Edmonton Project</span>
                  <span>Living Room Interior Refresh &amp; Trim Detailing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-cta-primary)]">
              Specialized Painting Services
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Flawless Paintwork Designed to Last
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)]">
              A durable, beautiful paint job is 80% preparation and 20% skilled application. Here is how Yuriy &amp; Karina elevate your home.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {PAINTING_SERVICES.map((service) => {
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
                      href={bookingHref('painting')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-cta-primary)] transition-colors hover:text-[var(--color-cta-primary-hover)]"
                    >
                      <span>Request a painting estimate</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-400 border border-teal-500/20">
                <SunMedium className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Alberta Climate Protection</span>
              </div>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Formulated for Edmonton Winters &amp; Summer Sun
              </h2>

              <p className="text-base leading-relaxed text-slate-300">
                Between high-altitude summer ultraviolet radiation and brutal winter freezes dipping below -35°C, ordinary paints crack, peel, and fade quickly in Edmonton. Exterior wood surfaces absorb moisture that freezes and expands, popping conventional paint films right off the grain.
              </p>

              <p className="text-base leading-relaxed text-slate-300">
                That is why we exclusively use advanced 100% acrylic latex and hybrid penetrating oils engineered specifically for Canadian temperature variations. Our preparation includes thorough power-washing, detailed sanding to open the wood pores, and complete dry-out checks before any stain is applied.
              </p>

              <div>
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-teal-400" aria-hidden="true" />
                  Neighborhoods &amp; Communities We Proudly Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.neighborhoods.map((area) => (
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
              <div className="relative aspect-[43/24] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 shadow-2xl">
                <Image
                  src="/images/projects/deck-staining-split.webp"
                  alt="Exterior deck sanding and staining before and after in Edmonton"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4 text-xs text-slate-400">
                <strong className="text-slate-200 block mb-1">Deck Restoration Showcase:</strong>
                Weather-beaten gray cedar restored to warm natural tones with weather-resistant stain seal.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
              Recent Painting Transformations
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              See the precision, clean edges, and vibrant results we bring to Edmonton homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[43/24] w-full">
                <Image
                  src="/images/projects/painting-trim-split.webp"
                  alt="Baseboard, trim, and doorway painting detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-xs font-semibold text-[var(--color-text-primary)]">
                Baseboard &amp; Door Trim Detailing
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[43/24] w-full">
                <Image
                  src="/images/projects/painting-shed-split.webp"
                  alt="Exterior shed painting transformation before and after"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-xs font-semibold text-[var(--color-text-primary)]">
                Exterior Outbuilding &amp; Shed Renewal
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="relative aspect-[43/24] w-full">
                <Image
                  src="/images/hero/collage/hero-1.webp"
                  alt="Yuriy standing on the completed warm stained cedar deck in Edmonton"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[center_35%]"
                />
              </div>
              <div className="p-3 text-xs font-semibold text-[var(--color-text-primary)]">
                Finished Weatherproof Deck Seal
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-cta-primary)]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Common Questions About Our Painting Services
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-secondary)]">
              Everything you need to know about paint selection, surface prep, and project timelines.
            </p>
          </div>

          <div className="space-y-4">
            {PAINTING_FAQS.map((faq) => (
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

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-500/30 px-3.5 py-1 text-xs font-semibold text-teal-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>Meticulous Attention to Every Detail</span>
          </div>

          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Give Your Edmonton Home the Fresh Look It Deserves
          </h2>

          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            Request your free in-home painting quote today. We will assess your walls or exterior deck and provide a clear, detailed estimate within {siteConfig.responseMinutes} minutes, 24/7 Monday through Sunday.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={bookingHref('painting')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[var(--color-cta-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span>Get Your Free Painting Estimate</span>
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
