const MAP_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDf2Yw6Vj1c0s1tJcHs3xPzv8vBzQ2Zqoq&center=53.5447,-113.4909&zoom=13`;
export function LocationMapCard() {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[120px] w-full overflow-hidden">
        <iframe
          src={MAP_EMBED_URL}
          className="h-full w-full scale-[1.15]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="BrightNest Pro Services location"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>
      <div className="flex flex-1 items-center justify-center gap-2 px-4 py-3">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="var(--color-cta-primary)"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
        </svg>
        <span className="text-sm font-medium text-[var(--color-text-primary)]">
          Edmonton, AB
        </span>
      </div>
    </div>
  );
}
