"use client";

import { useState } from "react";
import { Code2, Github, Linkedin, Mail, MapPin, Swords } from "lucide-react";
import { contactLinks } from "@/lib/data";
import Reveal from "./ui/Reveal";
import Toast from "./ui/Toast";

const icons = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  code: Code2,
  chess: Swords,
  mapPin: MapPin,
};

export default function Contact() {
  const [toast, setToast] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mpqggzyy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setToast("Message sent — I'll get back to you soon.");
        form.reset();
      } else {
        setToast("Something went wrong — please try again.");
      }
    } catch {
      setToast("Something went wrong — please try again.");
    }

    setTimeout(() => setToast(null), 3200);
  }

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-center">
        <div>
          <Reveal>
            <span className="eyebrow-dot mb-4 inline-flex items-center gap-2 font-mono text-[12.5px] font-medium tracking-wide text-accent">
              Get in touch
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mb-4 text-[28px] font-bold tracking-tight sm:text-[34px] lg:text-[38px]">
              Let&rsquo;s build something together
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-8 max-w-[420px] text-[15.5px] leading-[1.75] text-text-muted">
              Open to software engineering and AI/ML roles, research
              collaborations, and interesting problems. I usually reply within a
              couple of days.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col">
              {contactLinks.map((link) => {
                const Icon = icons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3.5 border-b border-border py-3.5 text-[14.5px] font-medium transition-all duration-200 hover:pl-2.5 hover:text-accent"
                  >
                    <Icon
                      size={15}
                      className="w-[18px] text-text-faint group-hover:text-accent"
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-[18px] grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-[18px]">
              <Field
                label="Subject"
                id="subject"
                placeholder="What's this about?"
              />
            </div>
            <div className="mb-[18px]">
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-[11.5px] font-medium uppercase tracking-wide text-text-faint"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me a bit about it..."
                className="min-h-[110px] w-full resize-y rounded-[9px] border border-border bg-bg-secondary px-[15px] py-[13px] text-[14.5px] transition-colors focus:border-accent focus:bg-bg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[9px] bg-text py-[13px] text-center text-[13.5px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-accent hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>

      <Toast message={toast} />
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11.5px] font-medium uppercase tracking-wide text-text-faint"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        className="w-full rounded-[9px] border border-border bg-bg-secondary px-[15px] py-[13px] text-[14.5px] transition-colors focus:border-accent focus:bg-bg focus:outline-none"
      />
    </div>
  );
}
