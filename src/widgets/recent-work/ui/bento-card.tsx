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
  Layers,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { BentoProject } from '../model/recent-work-data';

interface BentoCardProps {
  project: BentoProject;
  index?: number;
  priority?: boolean;
}

export function BentoCard({ project, index = 0, priority = false }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // Active revealed state triggered by either desktop hover or mobile tap
  const isRevealed = isHovered || isTapped;

  const hasBeforeImage = Boolean(project.beforeImage);

  const toggleReveal = () => {
    setIsTapped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleReveal();
    }
  };

  const delayClass = `delay-${((index % 3) + 1) * 100}`;

  return (
    <article
      tabIndex={0}
      role="region"
      aria-label={`${project.title}. ${isRevealed ? 'Showing completed after result' : 'Showing project before or in-progress'}`}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleReveal}
      className={`reveal-on-scroll reveal-up ${delayClass} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)] focus:ring-offset-2 ${project.gridClasses.container}`}
    >
      {/* Top Visual Area with Hover Reveal */}
      <div
        className={`relative w-full overflow-hidden bg-slate-900 ${
          project.featured ? 'min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]' : project.gridClasses.imageAspect
        }`}
      >
        {/* Layer 1: Before / In-Progress Image */}
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
              priority={priority}
              sizes={
                project.featured
                  ? '(min-width: 1024px) 66vw, 100vw'
                  : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Scrim overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          </div>
        )}

        {/* Layer 2: After (Finished) Image */}
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
            priority={priority && !hasBeforeImage}
            sizes={
              project.featured
                ? '(min-width: 1024px) 66vw, 100vw'
                : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            }
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark Scrim overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        </div>

        {/* Floating Header Badges */}
        <div className="relative z-20 flex w-full items-start justify-between gap-2 p-4 sm:p-5">
          {/* Category Tag */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span>{project.categoryLabel}</span>
            </span>

            {project.featured && (
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-500/90 px-2.5 py-0.5 text-[11px] font-bold text-slate-950 shadow-sm backdrop-blur-md">
                ★ Signature Transformation
              </span>
            )}
          </div>

          {/* Interactive Reveal Toggle Pill (Clickable / Tappable for Mobile & Desktop) */}
          {hasBeforeImage && (
            <button
              type="button"
              onClick={toggleReveal}
              aria-label={isRevealed ? 'Switch to Before / Process view' : 'Switch to After completed view'}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide shadow-lg backdrop-blur-md transition-all duration-300 ${
                isRevealed
                  ? 'border border-emerald-400/50 bg-emerald-500/95 text-white ring-2 ring-emerald-300/40'
                  : 'border border-amber-300/50 bg-amber-500/95 text-slate-950 hover:bg-amber-400'
              }`}
            >
              {isRevealed ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  <span>AFTER</span>
                </>
              ) : (
                <>
                  <Hammer className="h-3.5 w-3.5 text-slate-950" />
                  <span>BEFORE / PROCESS</span>
                </>
              )}
              <span className="hidden xs:inline-block ml-0.5 text-[10px] opacity-80">
                (Tap to toggle)
              </span>
            </button>
          )}
        </div>

        {/* In-Image Caption Strip (Bottom of Image) */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 text-white">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-200">
            <span className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 backdrop-blur-md">
              <MapPin className="h-3 w-3 text-emerald-400" />
              <span>{project.location}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 backdrop-blur-md">
              <Clock className="h-3 w-3 text-amber-300" />
              <span>{project.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/30 px-2 py-0.5 font-semibold text-emerald-200 backdrop-blur-md border border-emerald-400/30">
              <CheckCircle2 className="h-3 w-3 text-emerald-400" />
              <span>{project.satisfaction}</span>
            </span>
          </div>

          <h3 className="mt-2 font-heading text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-sm line-clamp-2">
            {project.title}
          </h3>

          {/* Quick status label */}
          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
            <Eye className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">
              {isRevealed
                ? project.afterLabel || 'Viewing Finished Craftsmanship'
                : project.beforeLabel || 'Viewing Preparation & Process'}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Craftsmanship Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 bg-white">
        <div>
          {/* Subtitle / Key Hook */}
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-cta-primary)]">
            {project.subtitle}
          </p>

          {/* Dynamic description changing smoothly or highlighting the outcome */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isRevealed && project.afterDescription
              ? project.afterDescription
              : project.description}
          </p>

          {/* Craftsmanship Highlights List */}
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
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Area: Tags & CTA */}
        <div className="mt-6 border-t border-slate-100 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Link
              href={project.ctaLink}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-cta-primary)] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-cta-primary-hover)] active:scale-95"
            >
              <span>{project.ctaText}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
