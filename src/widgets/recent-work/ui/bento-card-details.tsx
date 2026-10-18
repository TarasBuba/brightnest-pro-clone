import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { BentoProject } from '../model/recent-work-data';

interface BentoCardDetailsProps {
  project: BentoProject;
  isRevealed: boolean;
}

export function BentoCardDetails({
  project,
  isRevealed,
}: BentoCardDetailsProps) {
  return (
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
  );
}
