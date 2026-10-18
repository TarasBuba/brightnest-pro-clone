import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  CheckCircle,
} from 'lucide-react';
import { BentoCard } from './bento-card';
import { RECENT_WORK_PROJECTS } from '../model/recent-work-data';
import { ROUTES } from '@/src/shared/config/navigation';

export function BentoGrid() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Gallery of Transformations</h3>

        <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800 border border-emerald-200/60 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-pulse" aria-hidden="true" />
          <span>Hover or tap any card to reveal the completed &ldquo;After&rdquo; work</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {RECENT_WORK_PROJECTS.map((project, index) => (
          <BentoCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}

        <div className="col-span-1 md:col-span-2 lg:col-span-12 overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>The BrightNest Pro Services Standard</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Executed Personally by Yuriy &amp; Karina.
                <span className="block whitespace-nowrap">Zero Subcontractors.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Every deck plank, paint cut-in, and joinery adjustment in this portfolio is completed
                directly by our hands. We treat your Edmonton home with the precision and respect of our own.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Alberta Climate Tested</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <Award className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <Users className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Direct Owner Communication</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <Link
                href={ROUTES.book}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand-teal)] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-emerald-300 active:scale-95"
              >
                <span>Book Your Project Quote</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
