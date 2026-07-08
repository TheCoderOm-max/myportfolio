import { skillCategories } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader
          eyebrow="Toolbox"
          title="Technical Skills"
          subtitle="Languages, frameworks, and tools I use to design and ship software."
        />

        <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 0.08}>
              <div>
                <div className="mb-4 font-mono text-[12.5px] font-semibold uppercase tracking-wide text-text-faint">
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-bg px-[14px] py-2 text-[13.5px] font-medium transition-all hover:border-accent hover:bg-accent-soft hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
