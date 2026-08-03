"use client";

import { useState } from "react";
import { Container, Button } from "./ui";
import { contact } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap gap-2">
          {contact.chips.map((chip) => (
            <span
              key={chip}
              className="font-mono-tag rounded-full border border-line-strong px-3 py-1 text-xs text-muted"
            >
              {chip}
            </span>
          ))}
        </div>

        <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">{contact.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium hover:border-ink transition-colors"
          >
            {contact.email}
            <span className="text-muted">{copied ? "Copié ✓" : "· Copier"}</span>
          </button>
          {contact.socials.map((social) => (
            <Button key={social.label} href={social.href} variant="secondary" external>
              {social.label}
            </Button>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-line bg-ink text-paper p-10 md:p-14 shadow-soft-lg">
          <h3 className="max-w-xl text-3xl md:text-4xl font-medium tracking-tight leading-[1.1]">
            {contact.ctaCard.title}
          </h3>
          <p className="mt-4 max-w-lg text-neutral-300">{contact.ctaCard.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink hover:bg-neutral-200 transition-colors"
            >
              {contact.ctaCard.mailLabel}
            </a>
            <a
              href={contact.ctaCard.cvHref}
              className="inline-flex items-center justify-center rounded-full border border-neutral-600 px-6 py-3 text-sm font-medium text-paper hover:border-paper transition-colors"
            >
              {contact.ctaCard.cvLabel}
            </a>
          </div>
          <p className="font-mono-tag mt-8 text-xs text-neutral-400">{contact.footnote}</p>
        </div>
      </Container>
    </section>
  );
}
