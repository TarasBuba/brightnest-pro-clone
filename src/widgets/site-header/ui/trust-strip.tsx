import { Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/src/shared/config/site-config';

export function TrustStrip() {
  return (
    <div
      className="hidden items-center justify-center gap-4 overflow-x-auto whitespace-nowrap border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-1.5 text-xs text-[var(--color-text-secondary)] md:flex"
      aria-label="Trust signals"
    >
      <span className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        {siteConfig.rating.value.toFixed(1)} Google Rating (
        {siteConfig.rating.count} reviews)
      </span>
      <Divider />
      {siteConfig.isLicensedInsured && (
        <>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            Licensed &amp; Insured
          </span>
          <Divider />
        </>
      )}
      <span className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" />
        {siteConfig.hours}
      </span>
      <Divider />
      <span className="flex items-center gap-1">
        <MapPin className="h-3.5 w-3.5" />
        {siteConfig.serviceArea}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <span aria-hidden="true" className="text-[var(--color-border)]">
      ·
    </span>
  );
}
