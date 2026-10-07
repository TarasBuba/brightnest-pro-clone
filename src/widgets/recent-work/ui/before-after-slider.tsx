'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sliders, Columns, Sparkles, Hammer, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  beforeAlt: string;
  beforeLabel?: string;
  afterImage: string;
  afterAlt: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  beforeAlt,
  beforeLabel = 'BEFORE: Structural Framework',
  afterImage,
  afterAlt,
  afterLabel = 'AFTER: Custom Cedar Finish & Weatherproof Coating',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture was already lost
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Controls & Mode Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Preset Position Buttons (for slider mode) */}
        <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => {
              setViewMode('slider');
              setSliderPosition(0);
            }}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === 'slider' && sliderPosition < 10
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Show Before
          </button>
          <button
            type="button"
            onClick={() => {
              setViewMode('slider');
              setSliderPosition(50);
            }}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === 'slider' && sliderPosition >= 40 && sliderPosition <= 60
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            50/50 Split
          </button>
          <button
            type="button"
            onClick={() => {
              setViewMode('slider');
              setSliderPosition(100);
            }}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === 'slider' && sliderPosition > 90
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Show After
          </button>
        </div>

        {/* View Layout Toggle: Slider vs Side-by-Side */}
        <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => setViewMode('slider')}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === 'slider'
                ? 'bg-[var(--color-cta-primary)] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-pressed={viewMode === 'slider'}
          >
            <Sliders className="h-3.5 w-3.5" />
            <span>Interactive Slider</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('side-by-side')}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-[var(--color-cta-primary)] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-pressed={viewMode === 'side-by-side'}
          >
            <Columns className="h-3.5 w-3.5" />
            <span>Side by Side</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: Interactive Slider */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="group relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden rounded-2xl border-2 border-slate-200/80 bg-slate-900 shadow-xl select-none cursor-ew-resize touch-none"
          role="region"
          aria-label="Interactive Before and After image comparison"
        >
          {/* Accessible hidden range slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="sr-only"
            aria-label="Adjust Before and After divider percentage"
          />

          {/* Bottom Layer: AFTER Image (full width) */}
          <div className="absolute inset-0">
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Top Layer: BEFORE Image (clipped to sliderPosition) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 calc(${100 - sliderPosition}%) 0 0)` }}
          >
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Badges on the image */}
          {/* Before Badge (top left) */}
          <div
            className="pointer-events-none absolute top-3 left-3 z-10 transition-opacity duration-200"
            style={{ opacity: sliderPosition > 15 ? 1 : 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              <Hammer className="h-3.5 w-3.5 text-amber-400" />
              <span>{beforeLabel}</span>
            </span>
          </div>

          {/* After Badge (top right) */}
          <div
            className="pointer-events-none absolute top-3 right-3 z-10 transition-opacity duration-200"
            style={{ opacity: sliderPosition < 85 ? 1 : 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/85 px-3 py-1.5 text-xs font-semibold text-emerald-100 shadow-lg backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>{afterLabel}</span>
            </span>
          </div>

          {/* Vertical Divider Line with Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-shadow pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Drag Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white bg-slate-900/90 text-white shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-black tracking-tighter select-none">
                <span>â—€</span>
                <span>â–¶</span>
              </div>
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
            Drag or slide to compare transformation
          </div>
        </div>
      ) : (
        /* VIEW MODE 2: Side by Side Cards */
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Card: BEFORE */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="relative h-[280px] sm:h-[340px] w-full bg-slate-900">
              <Image
                src={beforeImage}
                alt={beforeAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/85 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                  <Hammer className="h-3.5 w-3.5 text-amber-400" />
                  <span>{beforeLabel}</span>
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="font-heading text-base font-bold text-slate-900">
                Initial Condition: Exposed Framing &amp; Structural Prep
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw joist inspection, leveling, support ledger reinforcement, and ground clearance optimization.
              </p>
            </div>
          </div>

          {/* Card: AFTER */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-emerald-400/50 bg-white shadow-lg">
            <div className="relative h-[280px] sm:h-[340px] w-full bg-slate-900">
              <Image
                src={afterImage}
                alt={afterAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-900/85 px-3 py-1.5 text-xs font-semibold text-emerald-100 shadow-md backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{afterLabel}</span>
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  100% Completed
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="font-heading text-base font-bold text-slate-900">
                Final Result: Custom Cedar Deck &amp; Weatherproof Stain
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless board alignment, double-coat protective sealant, and solid ceiling anchor for the hanging swing chair.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
