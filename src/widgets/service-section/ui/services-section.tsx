'use client';

// src/widgets/service-section/ui/services-section.tsx
import Image from 'next/image';
import { useInView } from '@/src/shared/lib/hooks/use-in-view';
import { ServiceAccordionItem } from './service-accordion-item';
import { FOCUSED_SERVICES } from '../model/services-data';

export function ServicesSection() {
  const { ref: headerRef, isInView: isHeaderInView } =
    useInView<HTMLDivElement>({
      rootMargin: '-40px',
      threshold: 0.1,
      triggerOnce: true,
    });

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden py-[var(--spacing-section)] px-4"
    >
      {/* High-quality background image with elegant, aesthetic brand overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/services/services-bg.webp"
          alt=""
          role="presentation"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
          quality={85}
        />
        {/* Semi-transparent brand gradient oklch(22% 0.06 240 / 88%) and backdrop-blur-sm for 100% contrast & premium depth */}
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(180deg, oklch(22% 0.06 240 / 90%) 0%, oklch(22% 0.06 240 / 88%) 50%, oklch(18% 0.05 240 / 92%) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header with useInView scroll entrance */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            isHeaderInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-cyan-300 drop-shadow-sm">
            Core Specializations
          </p>

          <h2
            id="services-title"
            className="mt-2 text-center font-heading text-4xl font-bold text-white drop-shadow-sm md:text-5xl"
          >
            Handyman &amp; Painting Services
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-base md:text-lg text-slate-200">
            Specialized handyman repairs, custom carpentry, and professional painting in Edmonton —
            delivered with personal care and meticulous craftsmanship.
          </p>
        </div>

        {/* Guaranteed alternating fly-in animated cards on scroll */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {FOCUSED_SERVICES.map((service, index) => (
            <ServiceAccordionItem
              key={service.id}
              service={service}
              index={index}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;