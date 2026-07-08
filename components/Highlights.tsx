import { highlights } from '@/lib/data';
import Reveal from './ui/Reveal';

export default function Highlights() {
  return (
    <section className="border-y border-border bg-bg-secondary px-6 py-14 sm:px-8">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 0.06}>
            <div
              className={`px-0 py-2 lg:px-[22px] ${
                i !== 0 ? 'border-border lg:border-l' : ''
              } ${i % 2 !== 0 ? 'border-border sm:border-l' : 'sm:border-l-0'}`}
            >
              <div className="mb-1 text-2xl font-extrabold tracking-tight">{h.value}</div>
              <div className="text-[12.5px] leading-tight text-text-muted">{h.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
