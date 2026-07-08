import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
      <div>
        <Reveal>
          <span className="eyebrow-dot mb-4 inline-flex items-center gap-2 font-mono text-[12.5px] font-medium tracking-wide text-accent">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-[28px] font-bold tracking-tight sm:text-[34px] lg:text-[40px]">
            {title}
          </h2>
        </Reveal>
      </div>
      {subtitle && (
        <Reveal delay={0.06}>
          <p className="max-w-[560px] text-base leading-relaxed text-text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
