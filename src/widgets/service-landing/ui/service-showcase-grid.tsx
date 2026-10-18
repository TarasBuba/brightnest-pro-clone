import Image from 'next/image';
import type { ServicePageConfig } from '../model/types';

interface ServiceShowcaseGridProps {
  config: ServicePageConfig;
}

export function ServiceShowcaseGrid({ config }: ServiceShowcaseGridProps) {
  if (!config.showcaseSection) {
    return null;
  }

  const { showcaseSection } = config;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
            {showcaseSection.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {showcaseSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseSection.items.map((item) => (
            <div
              key={item.caption}
              className={`rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm${
                item.spanTwoOnSm ? ' sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[43/24] w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover${item.imageClassName ? ` ${item.imageClassName}` : ''}`}
                />
              </div>
              <div className="p-3 text-xs font-semibold text-[var(--color-text-primary)]">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
