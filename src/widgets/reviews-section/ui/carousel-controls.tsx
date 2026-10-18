import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface CarouselTopControlsProps {
  isPaused: boolean;
  onTogglePause: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function CarouselTopControls({
  isPaused,
  onTogglePause,
  onPrev,
  onNext,
}: CarouselTopControlsProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
      <button
        type="button"
        onClick={onTogglePause}
        className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] shadow-xs transition-colors hover:border-[var(--color-brand-teal)] hover:text-[var(--color-brand-teal)]"
        aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
      >
        {isPaused ? (
          <>
            <Play className="h-3 w-3 text-amber-500 fill-amber-500" aria-hidden="true" />
            <span>Paused &middot; Click to play</span>
          </>
        ) : (
          <>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Auto-scrolling</span>
          </>
        )}
      </button>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] shadow-xs transition-all hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)] hover:text-white active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-brand-teal)]"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] shadow-xs transition-all hover:border-[var(--color-brand-teal)] hover:bg-[var(--color-brand-teal)] hover:text-white active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-brand-teal)]"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

interface CarouselPaginationDotsProps {
  maxIndex: number;
  safeCurrentIndex: number;
  onSelectSlide: (idx: number) => void;
}

export function CarouselPaginationDots({
  maxIndex,
  safeCurrentIndex,
  onSelectSlide,
}: CarouselPaginationDotsProps) {
  return (
    <div className="mt-5 flex items-center justify-center gap-1">
      {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelectSlide(idx)}
          aria-label={`Go to slide group ${idx + 1}`}
          aria-current={safeCurrentIndex === idx ? 'true' : undefined}
          className="group flex h-8 min-w-8 items-center justify-center rounded-full px-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-teal)]"
        >
          <span
            className={`h-2.5 rounded-full transition-all duration-300 ${
              safeCurrentIndex === idx
                ? 'w-8 bg-[var(--color-brand-teal)]'
                : 'w-2.5 bg-[var(--color-border)] group-hover:bg-[var(--color-text-secondary)]'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
