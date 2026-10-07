import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story | BrightNest Pro Service Edmonton',
  description:
    'Meet Yuriy and Karina, the family behind BrightNest Pro Service. Learn how compassion, craftsmanship, and care shape our home services in Edmonton.',
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="bg-[var(--color-bg-dark)] px-4 py-20 text-[var(--color-text-on-dark)] md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-teal)]">
            About BrightNest
          </p>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-6xl">
            A family story built on care, trust, and a new beginning.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
            BrightNest Pro Service is more than a home-services business. It is
            the work of a family committed to making Edmonton homes safer, more
            comfortable, and more welcoming.
          </p>
        </div>
      </section>

      <section className="px-4 py-[var(--spacing-section)]">
        <article className="mx-auto max-w-3xl text-[var(--color-text-secondary)]">
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text-primary)]">
            Our Story
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8">
            <p>
              We are Yuriy and Karina, a Ukrainian family who moved to Canada in
              search of safety and a better future for our children.
            </p>

            <p>
              Before coming to Canada, our family spent many years involved in
              charitable work. We created “Eldar — With Hope in the Heart,” an
              organization that supported children with serious illnesses and
              families facing difficult circumstances.
            </p>

            <p>
              That work taught us compassion, care, responsibility, and a deep
              understanding of people’s needs. Those values continue to guide
              how we serve every BrightNest customer today.
            </p>

            <p>
              Our family’s personal experiences have also strengthened our focus
              on safe choices, attention to detail, and creating comfort where
              it matters most.
            </p>

            <p>
              After moving to Edmonton, Yuriy explored different fields but kept
              returning to the work he knows best: repairs, painting, and
              interior updates. He combined years of hands-on experience from
              Ukraine with new skills developed here in Canada.
            </p>

            <p>
              Over time, we realized we wanted to build something of our own: a
              business that combines professional skills with the values that
              shaped our family. That is how BrightNest Pro Service was born.
            </p>
          </div>

          <h2 className="mt-14 font-heading text-3xl font-bold text-[var(--color-text-primary)]">
            Why BrightNest?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8">
            <p>
              For us, this is not just hands-on work. It is a way to make
              people’s spaces safer, more comfortable, and more welcoming.
            </p>

            <p>
              We genuinely enjoy seeing a home transform after painting,
              repairs, custom carpentry, or reliable handyman repairs. Every project is an
              opportunity to bring the same warmth, attentiveness, and respect
              into a customer’s home that shaped our own journey.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/book"
              className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] bg-[var(--color-cta-primary)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-cta-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)]"
            >
              Request a Free Quote
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
