"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading, Card } from "./ui";
import { projects, Project } from "@/lib/data";
import { useMorph } from "./morph-context";
import { lerp, smoothstep } from "@/lib/morph-utils";

const MORPHED_COUNT = 4;

function GroupTitle({ children }: { children: string }) {
  return (
    <div className="sm:col-span-2 flex items-center gap-4 pt-2 first:pt-0">
      <span className="font-mono-tag whitespace-nowrap text-xs uppercase tracking-widest text-muted">
        {children}
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="p-6">
      <span className="font-mono-tag text-xs text-muted">{project.meta}</span>
      <h3 className="mt-3 text-xl font-medium">{project.name}</h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Link
          href={project.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
        >
          Voir le projet →
        </Link>
        {project.appHref && (
          <Link
            href={project.appHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-accent"
          >
            {project.appLabel ?? "Essayer"} →
          </Link>
        )}
      </div>
    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
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
            Captures non publiques — démo sur demande
          </span>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const { targetRefs, progress, ready } = useMorph();

  const headingOpacity = !ready ? 1 : lerp(0.35, 1, progress);
  const imageOpacity = !ready ? 1 : smoothstep(0.85, 1, progress);
  const textOpacity = !ready ? 1 : smoothstep(0.7, 1, progress);
  const textShift = !ready ? 0 : lerp(16, 0, smoothstep(0.7, 1, progress));

  // Data is ordered Startup-first — the morph only tracks the first MORPHED_COUNT cards.
  const startup = projects.filter((p) => p.category === "Startup");
  const sideProjects = projects.filter((p) => p.category === "Side project");

  function renderCard(project: Project, i: number) {
    if (i < MORPHED_COUNT) {
      return (
        <Card key={project.slug} className="group overflow-hidden">
          <div ref={targetRefs[i]} className="relative aspect-[16/10] w-full" style={{ opacity: imageOpacity }}>
            <ProjectImage project={project} />
          </div>
          <div style={{ opacity: textOpacity, transform: `translateY(${textShift}px)` }}>
            <ProjectBody project={project} />
          </div>
        </Card>
      );
    }

    return (
      <Card key={project.slug} className="group overflow-hidden">
        <div className="relative aspect-[16/10] w-full">
          <ProjectImage project={project} />
        </div>
        <ProjectBody project={project} />
      </Card>
    );
  }

  return (
    <section id="projects" className="border-b border-line py-20 md:py-28">
      <Container>
        <div
          style={{ opacity: headingOpacity }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <SectionHeading
            eyebrow="Projets"
            title="Études de cas récentes"
            subtitle="Des produits que je construis et maintiens en production — projets plüm et side projects, défis techniques et résultats en détail."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <GroupTitle>Startup — plüm</GroupTitle>
          {startup.map((project, i) => renderCard(project, i))}

          <GroupTitle>Side projects</GroupTitle>
          {sideProjects.map((project, i) => renderCard(project, startup.length + i))}
        </div>
      </Container>
    </section>
  );
}
