import { publications } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

export default function Publications() {
  return (
    <section id="publications" className="bg-bg-secondary px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader
          eyebrow="Research"
          title="Publications"
          subtitle="Peer-reviewed and conference work in NLP and applied machine learning."
        />

        <div className="border-t border-border">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.06}>
              <div className="flex flex-col items-start justify-between gap-2 border-b border-border py-6 transition-[padding] duration-200 hover:pl-2.5 sm:flex-row sm:items-center sm:gap-6">
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 text-[16.5px] font-semibold tracking-tight">
                    {pub.title}
                  </div>
                  <div className="text-[13px] text-text-muted">
                    {pub.venue} <span className="mx-2 text-border-strong">·</span> {pub.publisher}
                  </div>
                </div>
                <div className="flex items-center gap-[18px]">
                  <span className="font-mono text-[12.5px] text-text-faint">{pub.year}</span>
                  <a
                    href={pub.url}
                    className="whitespace-nowrap rounded-[9px] border border-border bg-bg-secondary px-3.5 py-2 text-[12.5px] font-semibold transition-colors hover:bg-bg-tertiary"
                  >
                    View Paper
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
