'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Eye,
  Hammer,
  Check,
} from 'lucide-react';
import { BentoProject } from '../model/recent-work-data';

interface BentoCardProps {
  project: BentoProject;
  index?: number;
}

export function BentoCard({ project, index = 0 }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const isRevealed = isHovered || isTapped;
  const hasBeforeImage = Boolean(project.beforeImage);

  const toggleReveal = () => {
    setIsTapped((prev) => !prev);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) {
      return;
    }
    toggleReveal();
  };

  const delayClass = `delay-${((index % 3) + 1) * 100}`;

  return (
    <article
      aria-label={project.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className={`reveal-on-scroll reveal-up ${delayClass} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${project.gridClasses.container}`}
    >
      <div
        className={`relative w-full cursor-pointer overflow-hidden bg-slate-900 ${
          project.featured ? 'min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]' : project.gridClasses.imageAspect
        }`}
      >
        {hasBeforeImage && (
          <div
            className={`absolute inset-0 z-0 transition-all duration-700 ease-out ${
              isRevealed ? 'pointer-events-none opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          >
            <Image
              src={project.beforeImage!}
              alt={project.beforeAlt || project.title}
              fill
              sizes={
                project.featured
                  ? '(min-width: 1024px) 66vw, 100vw'
                  : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          </div>
        )}

        <div
          className={`absolute inset-0 z-10 transition-all duration-700 ease-out ${
            hasBeforeImage
              ? isRevealed
                ? 'opacity-100 scale-100'
                : 'pointer-events-none opacity-0 scale-95'
              : 'opacity-100 scale-100'
          }`}
        >
          <Image
            src={project.afterImage}
            alt={project.afterAlt || project.title}
            fill
            sizes={
              project.featured
                ? '(min-width: 1024px) 66vw, 100vw'
                : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            }
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        </div>

        <div className="relative z-20 flex w-full items-start justify-between gap-2 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
              <Sparkles className="h-3 w-3 text-emerald-400" aria-hidden="true" />
              <span>{project.categoryLabel}</span>
            </span>

            {project.featured && (
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-500/90 px-2.5 py-0.5 text-[11px] font-bold text-slate-950 shadow-sm backdrop-blur-md">
                &#10024; Signature Transformation
              </span>
            )}
          </div>

          {hasBeforeImage && (
            <button
              type="button"
              aria-pressed={isRevealed}
              onClick={(e) => {
                e.stopPropagation();
                toggleReveal();
              }}
              aria-label={isRevealed ? `Viewing AFTER result for ${project.title}. Activate to view BEFORE.` : `Viewing BEFORE condition for ${project.title}. Activate to view AFTER.`}
              className={`inline-flex min-h-8 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide shadow-lg backdrop-blur-md transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                isRevealed
                  ? 'border border-emerald-400/50 bg-emerald-500/95 text-white ring-2 ring-emerald-300/40'
                  : 'border border-amber-300/50 bg-amber-500/95 text-slate-950 hover:bg-amber-400'
              }`}
            >
              {isRevealed ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                  <span>AFTER</span>
                </>
              ) : (
                <>
                  <Hammer className="h-3.5 w-3.5 text-slate-950" aria-hidden="true" />
                  <span>BEFORE</span>
                </>
              )}
              <span className="hidden xs:inline-block ml-0.5 text-[10px] opacity-80 font-medium">
                {isRevealed ? '(Hover to switch)' : '(Hover for after)'}
              </span>
            </button>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 text-white">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-200">
            <span className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 backdrop-blur-md">
              <MapPin className="h-3 w-3 text-emerald-400" aria-hidden="true" />
              <span>{project.location}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 backdrop-blur-md">
              <Clock className="h-3 w-3 text-amber-300" aria-hidden="true" />
              <span>{project.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/30 px-2 py-0.5 font-semibold text-emerald-200 backdrop-blur-md border border-emerald-400/30">
              <CheckCircle2 className="h-3 w-3 text-emerald-400" aria-hidden="true" />
              <span>{project.satisfaction}</span>
            </span>
          </div>

          <h3 className="mt-2 font-heading text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-sm line-clamp-2">
            {project.title}
          </h3>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
            <Eye className="h-3.5 w-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span className="truncate">
              {isRevealed
                ? project.afterLabel || 'Viewing Finished Craftsmanship'
                : project.beforeLabel || 'Viewing Preparation & Process'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 bg-white">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-cta-primary)]">
            {project.subtitle}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isRevealed && project.afterDescription
              ? project.afterDescription
              : project.description}
          </p>

          <div className="mt-4 border-t border-slate-100 pt-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Craftsmanship Hallmarks:
            </h4>
            <ul className="mt-2 space-y-1.5">
              {project.craftsmanshipHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-700"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 1).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={project.ctaLink}
              className="inline-flex min-h-8 items-center gap-1.5 rounded-xl bg-[var(--color-cta-primary)] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-cta-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta-primary)] active:scale-95 whitespace-nowrap"
            >
              <span>{project.ctaText}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
