import { ContactForm, BookingHero, BookingSidebar } from '@/src/widgets/contact-section';
import { siteConfig } from '@/src/shared/config/site';
import { ROUTES } from '@/src/shared/config/navigation';
import { buildMetadata, buildBreadcrumbJsonLd, JsonLdScript } from '@/src/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Book Handyman or Painting Service',
  description: `Book your handyman or painting service in Edmonton in under 60 seconds. Rapid ${siteConfig.responseMinutes}-minute response, fair upfront pricing, and 100% satisfaction guaranteed.`,
  path: ROUTES.book,
});

export default function BookPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg-primary)]">
      <JsonLdScript data={buildBreadcrumbJsonLd([{ name: 'Book Online', path: ROUTES.book }])} />
      <BookingHero />

      <section className="px-4 pb-20 pt-2">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

            <BookingSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
