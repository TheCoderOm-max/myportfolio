'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '@/lib/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = project ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/50 px-6 py-16 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 18, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-[760px] rounded-lg bg-bg p-8 shadow-lg sm:p-11"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-bg-secondary text-text-muted transition-colors hover:bg-bg-tertiary hover:text-text sm:right-[26px] sm:top-[26px]"
            >
              <X size={16} />
            </button>

            <div className="mb-6">
              <h3 className="mb-2 pr-10 text-2xl font-extrabold tracking-tight sm:text-[26px]">
                {project.title}
              </h3>
              <p className="text-sm text-text-muted">{project.detail.overview}</p>
            </div>

            <ModalField title="Problem Statement">
              <p>{project.detail.problem}</p>
            </ModalField>
            <ModalField title="Solution">
              <p>{project.detail.solution}</p>
            </ModalField>
            <ModalField title="Features">
              <ul className="space-y-1">
                {project.detail.features.map((f) => (
                  <li key={f} className="relative pl-[18px]">
                    <span className="absolute left-0 text-text-faint">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </ModalField>
            <ModalField title="Technology Stack">
              <div className="flex flex-wrap gap-2">
                {project.detail.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-[7px] border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </ModalField>
            <ModalField title="Challenges">
              <p>{project.detail.challenges}</p>
            </ModalField>
            <ModalField title="Results">
              <p>{project.detail.results}</p>
            </ModalField>
            <ModalField title="Lessons Learned">
              <p>{project.detail.lessons}</p>
            </ModalField>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 rounded-[9px] bg-text px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-accent"
                >
                  <Github size={14} /> GitHub Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 rounded-[9px] border border-border bg-bg-secondary px-3.5 py-2 text-[12.5px] font-semibold transition-colors hover:bg-bg-tertiary"
                >
                  <ExternalLink size={12} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalField({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[22px]">
      <h4 className="mb-2.5 font-mono text-[11.5px] font-semibold uppercase tracking-wide text-accent">
        {title}
      </h4>
      <div className="text-[14.5px] leading-[1.75] text-text-muted">{children}</div>
    </div>
  );
}
