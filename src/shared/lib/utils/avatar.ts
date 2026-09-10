const AVATAR_COLORS = [
  'var(--color-brand-teal)',
  'var(--color-brand-navy)',
  'var(--color-cta-primary)',
] as const;

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function getAvatarColor(id: number): string {
  return AVATAR_COLORS[id % AVATAR_COLORS.length];
}