import Link from 'next/link';
import { ShieldCheck, Scale, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import { buildBreadcrumbJsonLd, JsonLdScript } from '@/src/shared/lib/seo';
import type { LegalDocumentConfig } from '../model/types';

interface LegalPageTemplateProps {
  config: LegalDocumentConfig;
}

export function LegalPageTemplate({ config }: LegalPageTemplateProps) {
  const breadcrumbData = buildBreadcrumbJsonLd([
    { name: config.breadcrumbName, path: config.path },
  ]);

  const isPrivacy = config.path === ROUTES.privacy;

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <JsonLdScript data={breadcrumbData} />

      <section className="bg-[var(--color-bg-dark)] px-4 pt-12 pb-16 text-[var(--color-text-on-dark)] sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href={ROUTES.home} className="transition-colors hover:text-[var(--color-brand-teal)]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              <li aria-current="page" className="font-semibold text-white">
                {config.breadcrumbName}
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 px-3.5 py-1 text-xs font-semibold text-[var(--color-brand-teal)]">
              <Scale className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{config.eyebrow}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-white/85">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>{config.jurisdictionBadge}</span>
            </span>
          </div>

          <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {config.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {config.subtitle}
          </p>

          <p className="mt-5 text-xs font-medium uppercase tracking-wider text-white/60">
            Last Updated &amp; Effective: {config.effectiveDate} &bull; Edmonton, Alberta, Canada
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Legal &amp; Policy Documents:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={ROUTES.privacy}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isPrivacy
                    ? 'bg-[var(--color-cta-primary)] text-white'
                    : 'bg-slate-100 text-[var(--color-text-primary)] hover:bg-slate-200'
                }`}
              >
                Privacy &amp; Cookie Policy
              </Link>
              <Link
                href={ROUTES.terms}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  !isPrivacy
                    ? 'bg-[var(--color-cta-primary)] text-white'
                    : 'bg-slate-100 text-[var(--color-text-primary)] hover:bg-slate-200'
                }`}
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <article className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-10">
            {config.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="border-b border-slate-100 pb-8 last:border-b-0 last:pb-0"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-heading text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl"
                >
                  {section.title}
                </h2>

                <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5 rounded-2xl bg-slate-50 p-4 sm:p-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-cta-primary)] mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                Questions About Our Policies or Ready to Start Your Project?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                Contact Yuriy &amp; Karina directly in Edmonton for prompt assistance.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[var(--color-text-primary)]">
                <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-[var(--color-cta-primary)]">
                  <Phone className="h-4 w-4 text-[var(--color-cta-primary)]" aria-hidden="true" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-[var(--color-cta-primary)]">
                  <Mail className="h-4 w-4 text-[var(--color-cta-primary)]" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>

            <Link
              href={ROUTES.book}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-cta-primary-hover)]"
            >
              <span>Book Online / Get Quote</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
