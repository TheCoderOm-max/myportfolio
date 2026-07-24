"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-white/80 backdrop-blur-md backdrop-saturate-150">
      <nav
        className={`mx-auto flex max-w-content items-center justify-between px-6 transition-[height] duration-300 sm:px-8 ${
          shrink ? "h-[60px]" : "h-[76px]"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-bold tracking-tight"
        >
          <span className="inline-block h-[7px] w-[7px] rotate-45 rounded-sm bg-accent" />
          Om Bhattarai
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
         
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2 lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-[99] flex flex-col gap-1 overflow-y-auto bg-bg px-6 py-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-3.5 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
