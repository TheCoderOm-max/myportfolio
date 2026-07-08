import { ArrowUpRight, ChevronRight, Code2, Github, Hourglass, Swords } from 'lucide-react';
import { cpStats } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const icons = { code: Code2, chess: Swords, hourglass: Hourglass, github: Github };

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="bg-bg-secondary px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader
          eyebrow="Problem Solving"
          title="Competitive Programming"
          subtitle="350+ problems solved across data structures, algorithms, and contests."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cpStats.map((cp, i) => {
            const Icon = icons[cp.icon];
            return (
              <Reveal key={cp.platform} delay={i * 0.08}>
                <div className="group rounded-md border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[14.5px] font-bold">{cp.platform}</span>
                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-bg-secondary text-text-muted">
                      <Icon size={15} />
                    </span>
                  </div>
                  <div className="mb-0.5 text-2xl font-extrabold tracking-tight">{cp.stat}</div>
                  <div className="mb-4 text-[12.5px] text-text-muted">{cp.label}</div>
                  {cp.available ? (
                    <a
                      href={cp.url}
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-accent"
                    >
                      View profile
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-text-faint">
                      Coming soon
                      <ChevronRight size={12} />
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
