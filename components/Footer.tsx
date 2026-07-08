"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <span className="text-[13px] text-text-faint">
          © 2026 Om Bhattarai. All rights reserved.
        </span>

        <div className="flex flex-wrap gap-5">
          {footerNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <div className="flex gap-2.5">
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
              href="mailto:rajenroshna@gmail.com"
              aria-label="Email"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border text-text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <Mail size={14} />
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
