"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Smartphone, Globe, Server, Rocket, Plug, Database, type LucideIcon } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { services, techMarquee } from "@/lib/data";

// Order matches services.items in src/lib/data.ts
const ICONS: LucideIcon[] = [Smartphone, Globe, Server, Rocket, Plug, Database];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

export function Services() {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <section id="services" className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Services" title={services.title} subtitle={services.subtitle} />

            <div className="mt-10">
              <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">
                My tech stack
              </span>

              <div className="relative mt-4 overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent" />
                <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent" />
                <div className="flex w-max animate-marquee gap-8 py-2">
                  {loop.map((tech, i) => (
                    <div key={`${tech.name}-${i}`} className="flex shrink-0 items-center gap-2 opacity-70">
                      <Image src={tech.icon} alt={tech.name} width={18} height={18} unoptimized />
                      <span className="font-mono-tag text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="space-y-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants}
          >
            {services.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div key={item.title} variants={itemVariants} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted">{item.note}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
