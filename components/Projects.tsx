'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Brain, ExternalLink, GitFork, Github } from 'lucide-react';
import { futureProjects, projects } from '@/lib/data';
import type { Project } from '@/lib/types';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-content">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A few projects that best represent how I think about AI, systems, and product engineering."
        />

        <div className="grid grid-cols-1 gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.key} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg transition-all duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-lg">
                <div className="group relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-bg-tertiary to-bg-secondary">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-[26px]">
                  <h3 className="mb-2 text-[19px] font-bold tracking-tight">{project.title}</h3>
                  <p className="mb-[18px] flex-1 text-[14.5px] leading-[1.7] text-text-muted">
                    {project.description}
                  </p>
                  <div className="mb-[22px] flex flex-wrap gap-[7px]">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-[7px] border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 rounded-[9px] border border-border bg-bg-secondary px-3.5 py-2 text-[12.5px] font-semibold transition-colors hover:bg-bg-tertiary"
                      >
                        <Github size={13} /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 rounded-[9px] border border-border bg-bg-secondary px-3.5 py-2 text-[12.5px] font-semibold transition-colors hover:bg-bg-tertiary"
                      >
                        <ExternalLink size={11} /> Live Demo
                      </a>
                    )}
                    <button
                      onClick={() => setActive(project)}
                      className="inline-flex items-center gap-2 rounded-[9px] bg-text px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-accent"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {futureProjects.map((fp, i) => (
            <Reveal key={fp.title} delay={(projects.length + i) * 0.08}>
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-bg-secondary p-8 text-center">
                {fp.icon === 'brain' ? (
                  <Brain size={22} className="mb-3.5 text-text-faint" />
                ) : (
                  <GitFork size={22} className="mb-3.5 text-text-faint" />
                )}
                <h3 className="mb-2 text-[19px] font-bold tracking-tight">{fp.title}</h3>
                <p className="text-[14.5px] leading-[1.7] text-text-muted">{fp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
