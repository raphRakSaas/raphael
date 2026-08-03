"use client";

import { useState } from "react";
import { Container, SectionHeading, Button } from "./ui";
import { faq, contact } from "@/lib/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="FAQ" title={faq.title} />

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono-tag text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg font-medium">{item.question}</span>
                  </span>
                  <span className={`font-mono-tag text-lg transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pl-9 max-w-2xl text-sm leading-relaxed text-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border border-line bg-mist p-8">
          <div>
            <div className="font-medium">Une autre question ?</div>
            <p className="text-sm text-muted">Écris-moi directement, je réponds sous 24h.</p>
          </div>
          <Button href={`mailto:${contact.email}`}>M&apos;écrire un email</Button>
        </div>
      </Container>
    </section>
  );
}
