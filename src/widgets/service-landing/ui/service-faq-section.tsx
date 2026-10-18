import { HelpCircle } from 'lucide-react';
import type { ServicePageConfig } from '../model/types';

interface ServiceFaqSectionProps {
  config: ServicePageConfig;
}

export function ServiceFaqSection({ config }: ServiceFaqSectionProps) {
  const { faqSection } = config;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-cta-primary)]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {faqSection.title}
          </h2>
          <p className="mt-3 text-base text-[var(--color-text-secondary)]">
            {faqSection.description}
          </p>
        </div>

        <div className="space-y-4">
          {faqSection.faqs.map((faq) => (
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
  );
}
