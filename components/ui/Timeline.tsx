import type { TimelineEntry } from '@/lib/types';
import Reveal from './Reveal';

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative max-w-[820px]">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border-strong" />
      {entries.map((entry, i) => (
        <Reveal key={entry.role} delay={i * 0.08}>
          <div className="relative mb-14 pl-10 last:mb-0">
            <span
              className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                entry.past ? 'border-border-strong bg-bg' : 'border-accent bg-bg-secondary'
              }`}
            />
            <span className="mb-1.5 block font-mono text-xs text-text-faint">
              {entry.period}
            </span>
            <div className="text-[19px] font-bold tracking-tight">{entry.role}</div>
            <div className="mb-3.5 text-[14.5px] font-semibold text-accent">{entry.org}</div>
            <p className="mb-3.5 text-[15px] leading-[1.75] text-text-muted">
              {entry.description}
            </p>
            {entry.tags && (
              <div className="flex flex-wrap gap-[7px]">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[7px] border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
