import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site';
import type { ServicePageConfig } from '../model/types';

interface ServiceClimateSectionProps {
  config: ServicePageConfig;
}

export function ServiceClimateSection({ config }: ServiceClimateSectionProps) {
  const { climateSection } = config;
  const BadgeIcon = climateSection.badgeIcon;

  return (
    <section className="bg-slate-900 text-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-400 border border-teal-500/20">
              <BadgeIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{climateSection.badgeText}</span>
            </div>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {climateSection.title}
            </h2>

            {climateSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}

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
                src={climateSection.imageSrc}
                alt={climateSection.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4 text-xs text-slate-400">
              <strong className="text-slate-200 block mb-1">{climateSection.noteTitle}</strong>
              {climateSection.noteBody}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
