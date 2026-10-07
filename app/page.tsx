import { HeroSection } from '@/src/widgets/hero-section/index';
import { RecentWorkSection } from '@/src/widgets/recent-work/index';
import { ServicesSection } from '@/src/widgets/service-section/index';
import { ReviewsSection } from '@/src/widgets/reviews-section/index';
import { localBusinessSchema } from '@/src/shared/lib/schema/local-business-schema';

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <RecentWorkSection />
      <ServicesSection />
      <ReviewsSection />
    </main>
  );
}

