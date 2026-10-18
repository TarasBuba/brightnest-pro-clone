'use client';

import { useState } from 'react';
import { BentoProject } from '../model/recent-work-data';
import { BentoCardMedia } from './bento-card-media';
import { BentoCardDetails } from './bento-card-details';

interface BentoCardProps {
  project: BentoProject;
  index?: number;
}

export function BentoCard({ project, index = 0 }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const isRevealed = isHovered || isTapped;
  const hasBeforeImage = Boolean(project.beforeImage);

  const toggleReveal = () => {
    setIsTapped((prev) => !prev);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) {
      return;
    }
    toggleReveal();
  };

  const delayClass = `delay-${((index % 3) + 1) * 100}`;

  return (
    <article
      aria-label={project.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className={`reveal-on-scroll reveal-up ${delayClass} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${project.gridClasses.container}`}
    >
      <BentoCardMedia
        project={project}
        isRevealed={isRevealed}
        hasBeforeImage={hasBeforeImage}
        onToggleReveal={toggleReveal}
      />
      <BentoCardDetails
        project={project}
        isRevealed={isRevealed}
      />
    </article>
  );
}
