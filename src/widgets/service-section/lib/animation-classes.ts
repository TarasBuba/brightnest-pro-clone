// src/widgets/service-section/lib/animation-classes.ts

/**
 * Generates scroll-triggered entrance animation classes for service cards.
 *
 * Card 1: Flies in from left (-translate-x-16 opacity-0 -> translate-x-0 opacity-100, duration-700 ease-out)
 * Card 2: Flies in from right (translate-x-16 opacity-0 -> translate-x-0 opacity-100, duration-700 delay-100 ease-out)
 * Card 3: Flies in from left (-translate-x-16 opacity-0 -> translate-x-0 opacity-100, duration-700 delay-100 ease-out)
 * Card 4: Flies in from right (translate-x-16 opacity-0 -> translate-x-0 opacity-100, duration-700 delay-150 ease-out)
 * Card 5+: Flies in from bottom/left (-translate-x-16 translate-y-12 opacity-0 -> translate-x-0 translate-y-0 opacity-100, duration-700 delay-200 ease-out)
 */
export function getServiceCardAnimationClasses(
  index: number,
  isInView: boolean
): string {
  // Base transition settings: 700ms smooth cubic ease-out
  const base = 'transition-all duration-700 ease-out transform';

  if (index === 0) {
    return isInView
      ? `${base} translate-x-0 opacity-100`
      : `${base} -translate-x-16 opacity-0`;
  }

  if (index === 1) {
    return isInView
      ? `${base} delay-100 translate-x-0 opacity-100`
      : `${base} translate-x-16 opacity-0`;
  }

  if (index === 2) {
    return isInView
      ? `${base} delay-100 translate-x-0 opacity-100`
      : `${base} -translate-x-16 opacity-0`;
  }

  if (index === 3) {
    return isInView
      ? `${base} delay-150 translate-x-0 opacity-100`
      : `${base} translate-x-16 opacity-0`;
  }

  // 5th card (or higher): from bottom-left
  return isInView
    ? `${base} delay-200 translate-x-0 translate-y-0 opacity-100`
    : `${base} -translate-x-16 translate-y-12 opacity-0`;
}
