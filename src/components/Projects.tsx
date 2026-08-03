"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading, Card } from "./ui";
import { projects } from "@/lib/data";
import { useMorph } from "./morph-context";
import { lerp, smoothstep } from "@/lib/morph-utils";

export function Projects() {
  const { targetRefs, progress, ready } = useMorph();

  const headingOpacity = !ready ? 1 : lerp(0.35, 1, progress);
  const imageOpacity = !ready ? 1 : smoothstep(0.85, 1, progress);
  const textOpacity = !ready ? 1 : smoothstep(0.7, 1, progress);
  const textShift = !ready ? 0 : lerp(16, 0, smoothstep(0.7, 1, progress));

  return (
    <section id="projects" className="border-b border-line py-20 md:py-28">
      <Container>
        <div style={{ opacity: headingOpacity }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Projets"
            title="Études de cas récentes"
            subtitle="Des produits que je construis et maintiens en production — défis techniques, architecture et résultats en détail."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={project.slug} className="group overflow-hidden">
              <div
                ref={targetRefs[i]}
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{ opacity: imageOpacity }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                    project.private ? "blur-sm" : ""
                  }`}
                />
                {project.private && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
                    <span className="rounded-full bg-paper px-4 py-1.5 text-xs font-medium">
                      🔒 Captures non publiques — démo sur demande
                    </span>
                  </div>
                )}
              </div>
              <div
                className="p-6"
                style={{ opacity: textOpacity, transform: `translateY(${textShift}px)` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono-tag text-xs text-muted">
                    {project.category} · {project.meta}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-medium">{project.name}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <Link
                  href={project.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
                >
                  Voir le projet →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
