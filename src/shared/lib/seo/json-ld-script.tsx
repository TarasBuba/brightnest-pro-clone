import { serializeJsonLd } from './json-ld';

/** Renders a JSON-LD script tag. Server component — no client JS. */
export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
