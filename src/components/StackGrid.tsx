"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, SectionHeading } from "./ui";
import { stack, stackFilters, stackTitle, stackValues } from "@/lib/data";

export function StackGrid() {
  const [filter, setFilter] = useState<(typeof stackFilters)[number]>("Tout");

  const filtered = filter === "Tout" ? stack : stack.filter((s) => s.category === filter);

  return (
    <section id="stack" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Stack" title={stackTitle.title} subtitle={stackTitle.subtitle} />

        <div className="mt-8 flex flex-wrap gap-2">
          {stackFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "border-ink bg-ink text-paper"
                  : "border-line-strong text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-line p-5 transition-colors hover:border-ink"
            >
              <div className="flex items-center justify-between">
                <Image src={item.icon} alt={item.name} width={28} height={28} unoptimized />
                <span className="font-mono-tag rounded-full bg-mist px-2 py-0.5 text-[10px] text-muted">
                  {item.level}
                </span>
              </div>
              <div className="mt-4 font-medium">{item.name}</div>
              <p className="mt-1 text-xs text-muted opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 border-t border-line pt-8">
          {stackValues.map((v) => (
            <span
              key={v}
              className="font-mono-tag rounded-full border border-line-strong px-4 py-1.5 text-xs text-muted"
            >
              {v}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
