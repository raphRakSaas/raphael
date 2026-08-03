"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container, SectionHeading } from "./ui";
import { ScrollFade } from "./scroll-fade";
import { about } from "@/lib/data";

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={blockVariants}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="À propos" title={about.headline} />

        {/* Stat block */}
        <Reveal className="mt-14">
          <div className="font-mono-tag text-6xl tracking-tight md:text-7xl">{about.stat.value}</div>
          <p className="mt-2 max-w-sm text-sm text-muted">{about.stat.label}</p>

          <div className="mt-8 flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono-tag whitespace-nowrap text-2xl">{s.value}</div>
                <div className="mt-1.5 whitespace-nowrap text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Photo + bio */}
        <div className="mt-20 grid grid-cols-1 items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal className="mx-auto w-full max-w-[320px] md:mx-0 md:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line shadow-soft-lg">
              <Image
                src="/images/raph.jpeg"
                alt="Aina Raphaël Rakotonaivo"
                fill
                sizes="(max-width: 768px) 320px, 380px"
                className="object-cover"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-4 rounded-2xl border border-line bg-paper px-4 py-2.5 shadow-soft">
                <div className="font-mono-tag text-xs text-muted">Basé à</div>
                <div className="text-sm font-medium">La Réunion 🇷🇪</div>
              </div>
            </div>
          </Reveal>

          <div>
            <div className="text-lg font-medium">{about.name}</div>
            <div className="text-sm text-muted">{about.title}</div>

            <ScrollFade className="mt-6 space-y-6 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </ScrollFade>
          </div>
        </div>

        {/* Work history */}
        <Reveal className="mx-auto mt-20 max-w-xl border-t border-line pt-12 text-center">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">
            Mon parcours pro en informatique
          </span>

          <div className="relative mx-auto mt-8 max-w-md space-y-6 pl-7 text-left">
            <div className="absolute bottom-1 left-2 top-1 w-px bg-line" />
            {about.workHistory.map((job) => {
              const current = job.period.toLowerCase().includes("présent");
              return (
                <div key={job.place} className="relative">
                  <span
                    className={`absolute -left-6 top-1.5 h-2 w-2 rounded-full ring-4 ring-paper ${
                      current ? "bg-live" : "bg-line-strong"
                    }`}
                  >
                    {current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-75" />
                    )}
                  </span>
                  <div className="text-sm">
                    <span className="font-medium">{job.place}</span>{" "}
                    <span className="text-muted">— {job.role}</span>
                  </div>
                  <div className="font-mono-tag mt-0.5 text-xs text-muted">{job.period}</div>
                </div>
              );
            })}
          </div>

          <a
            href="#parcours"
            className="mt-8 inline-block text-sm font-medium text-ink hover:text-accent"
          >
            Voir tout le parcours →
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
