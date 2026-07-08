import { aboutTags } from '@/lib/data';
import Reveal from './ui/Reveal';

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow-dot mb-4 inline-flex items-center gap-2 font-mono text-[12.5px] font-medium tracking-wide text-accent">
              About
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[420px] text-[22px] font-semibold leading-[1.5] tracking-tight">
              I care about building software that&rsquo;s fast, correct, and quietly
              well-engineered.
            </p>
          </Reveal>
        </div>
        <div>
          <Reveal delay={0.06}>
            <p className="mb-[18px] text-[15.5px] leading-[1.8] text-text-muted">
              I&rsquo;m a software engineer working across artificial intelligence, backend
              systems, and modern web development. My focus is on machine learning and NLP,
              paired with the systems thinking needed to take a model from a research notebook to
              something that runs reliably in production.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-[18px] text-[15.5px] leading-[1.8] text-text-muted">
              Most of my time goes into three things: designing scalable backend architecture,
              applying deep learning and transformer-based models to real problems, and building
              clean, fast front-end experiences with modern frameworks. I like problems that sit
              at the intersection of research and engineering — where a good idea still needs to
              be built well to matter.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mb-6 text-[15.5px] leading-[1.8] text-text-muted">
              Outside of coursework and internships, I compete in competitive programming and
              contribute to open-source projects. The goal, consistently, is to build impactful
              software using modern technologies — with the same care for detail whether
              I&rsquo;m writing a training loop or a component library.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-2">
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[7px] border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
