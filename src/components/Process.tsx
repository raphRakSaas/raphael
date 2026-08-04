"use client";

import { motion } from "motion/react";
import { Target, Code2, Rocket } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { process } from "@/lib/data";

const ICONS = [Target, Code2, Rocket];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export function Process() {
  return (
    <section id="process" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Process" title={process.title} subtitle={process.subtitle} />

        <motion.div
          className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="absolute left-0 right-0 top-[54px] hidden h-px bg-line md:block" />

          {process.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={step.number} variants={itemVariants} className="group relative">
                <div className="relative z-10 h-full rounded-3xl border border-line bg-paper p-8 shadow-soft transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-ink/15 group-hover:shadow-soft-lg">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <span className="font-mono-tag text-sm text-line-strong">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
