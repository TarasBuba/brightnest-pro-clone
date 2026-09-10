// src/widgets/service-section/ui/services-section.tsx
import Image from "next/image";
import { Services } from "@/src/shared/lib/utils/services-data";
import { ServiceAccordionItem } from "./service-accordion-item";

export function ServicesSection() {
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
              "linear-gradient(180deg, oklch(22% 0.06 240 / 90%) 0%, oklch(22% 0.06 240 / 88%) 50%, oklch(18% 0.05 240 / 92%) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-cyan-300 drop-shadow-sm">
          What We Do
        </p>

        <h2
          id="services-title"
          className="mt-2 text-center font-heading text-4xl font-bold text-white drop-shadow-sm md:text-5xl"
        >
          Our Services
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-base md:text-lg text-slate-200">
          Reliable, family-run home care in Edmonton — from quick repairs to
          full-home makeovers.
        </p>

        <div className="mt-10 space-y-4">
          {Services.map((service, index) => {
            // Alternating animation: odd (1st, 3rd) slide-in-left, even (2nd, 4th) slide-in-right
            const isOdd = index % 2 === 0;
            const animationClass = isOdd
              ? "slide-in-left service-card-odd"
              : "slide-in-right service-card-even";

            return (
              <ServiceAccordionItem
                key={service.id}
                service={service}
                className={animationClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;