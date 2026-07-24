"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-[88px] pt-24 sm:px-8">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow-dot mb-4 inline-flex items-center gap-2 font-mono text-[12.5px] font-medium tracking-wide text-accent">
              Research Intern @ IIT Guwahati
            </span>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="mb-[18px] text-[42px] font-bold leading-[1.05] tracking-tight sm:text-[54px] lg:text-[68px]">
              Om Bhattarai
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-5 max-w-[520px] text-lg font-semibold leading-[1.45] sm:text-xl">
              Software Engineer focused on AI, scalable systems, and modern web
              applications.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-9 max-w-[520px] text-base leading-[1.7] text-text-muted">
              I build intelligent software by combining AI, scalable
              engineering, and modern web technologies. Passionate about solving
              complex problems through algorithms, machine learning, and clean
              software architecture — I enjoy building applications that create
              real-world impact.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[9px] bg-text px-[18px] py-2.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-accent hover:shadow-md"
              >
                View Projects
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-[18px] py-2.5 text-[13.5px] font-semibold text-text-muted transition-colors hover:text-text"
              >
                Contact Me →
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-2.5">
              <a
                href="https://github.com/TheCoderOm-max"
                aria-label="GitHub"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border text-text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                <Github size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/om-bhattarai-8b4116325/"
                aria-label="LinkedIn"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border text-text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="mailto:om.bhattarai@example.com"
                aria-label="Email"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border text-text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                <Mail size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg bg-gradient-to-br from-[#EEF0F4] to-[#E4E7EC] shadow-lg">
            <Image
              src="/images/omImg.png"
              alt="Portrait of Om Bhattarai"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-[18px] bottom-[18px] flex items-center gap-2.5 rounded-xl bg-white/90 px-4 py-3.5 shadow-sm backdrop-blur-md">
              <span className="relative h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500">
                <span className="absolute inset-[-4px] animate-pulse-ring rounded-full bg-emerald-500 opacity-35" />
              </span>
              <span className="text-[13px] font-semibold">
                Open to Software Engineering &amp; AI/ML roles
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
