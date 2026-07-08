import { Award, BadgeCheck, BookOpen, FlaskConical, GitBranch, Mic } from 'lucide-react';
import { achievements } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const icons = {
  trophy: Award,
  book: BookOpen,
  mic: Mic,
  flask: FlaskConical,
  gitBranch: GitBranch,
  certificate: BadgeCheck,
};

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow="Recognition" title="Achievements" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon];
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08}>
                <div
                  className={`rounded-md border p-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    a.future ? 'border-dashed border-border opacity-70' : 'border-border hover:border-border-strong'
                  }`}
                >
                  <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                    <Icon size={17} />
                  </div>
                  <h3 className="mb-2 text-[16.5px] font-bold tracking-tight">{a.title}</h3>
                  <p className="text-sm leading-[1.7] text-text-muted">{a.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
