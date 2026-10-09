import { HeroSection } from '@/src/widgets/hero-section/index';
import { RecentWorkSection } from '@/src/widgets/recent-work/index';
import { ServicesSection } from '@/src/widgets/service-section/index';
import { ReviewsSection } from '@/src/widgets/reviews-section/index';

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <RecentWorkSection />
      <ServicesSection />
      <ReviewsSection />
    </main>
  );
}

