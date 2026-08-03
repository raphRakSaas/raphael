"use client";

import { Container, Button } from "./ui";
import { StackOverlay } from "./StackOverlay";
import { useMorph } from "./morph-context";
import { hero } from "@/lib/data";

export function Hero() {
  const { anchorRef } = useMorph();

  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center pt-16 pb-20 md:pt-24 md:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-mist px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            <span className="font-mono-tag text-xs">{hero.badge}</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05]">
            <span className="text-accent">{hero.title.muted}</span> {hero.title.emphasis}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            <Button href={hero.ctaSecondary.href} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono-tag whitespace-nowrap text-2xl">{stat.value}</div>
                <div className="mt-1 whitespace-nowrap text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={anchorRef} className="relative mx-auto w-full max-w-sm aspect-[4/5]" />
      </Container>

      <StackOverlay />
    </section>
  );
}
