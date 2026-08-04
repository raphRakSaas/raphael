import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container, Button, Eyebrow } from "@/components/ui";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { projects } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Aina Raphaël Rakotonaivo`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug];

  if (!project || !study) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="border-b border-line py-16 md:py-20">
          <Container>
            <Link href="/#projects" className="text-sm text-muted hover:text-ink">
              ← Tous les projets
            </Link>

            <Reveal>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span
                  className={`font-mono-tag rounded-full px-2.5 py-0.5 text-[11px] ${
                    project.category === "Startup" ? "bg-ink text-paper" : "border border-line-strong text-muted"
                  }`}
                >
                  {project.category}
                </span>
                <span className="font-mono-tag text-xs text-muted">{project.meta}</span>
              </div>

              <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">{project.name}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{study.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {study.links.map((link, i) => (
                  <Button key={link.href} href={link.href} variant={i === 0 ? "primary" : "secondary"} external>
                    {link.icon && (
                      <Image src={link.icon} alt="" width={16} height={16} unoptimized className="shrink-0" />
                    )}
                    {link.label} →
                  </Button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-8">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono-tag whitespace-nowrap text-2xl">{stat.value}</div>
                    <div className="mt-1.5 whitespace-nowrap text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {study.cover && (
              <Reveal delay={0.2}>
                <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line shadow-soft-lg">
                  <Image
                    src={study.cover}
                    alt={`${project.name} — aperçu`}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            )}
          </Container>
        </section>

        {/* Screenshot gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <section className="border-b border-line py-12">
            <StaggerGroup className="mx-auto flex max-w-full snap-x justify-center gap-5 overflow-x-auto px-6 pb-2 md:px-8">
              {study.gallery.map((src, i) => (
                <StaggerItem
                  key={src}
                  className="relative h-[420px] w-[195px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-line shadow-soft-lg transition-transform duration-300 hover:-translate-y-1.5 md:h-[520px] md:w-[241px]"
                >
                  <Image
                    src={src}
                    alt={`${project.name} — écran ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 195px, 241px"
                    className="object-cover object-top"
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        )}

        {/* Achievements */}
        <section className="border-b border-line py-16 md:py-20">
          <Container>
            <Reveal>
              <Eyebrow>Ce que j&apos;ai fait</Eyebrow>
            </Reveal>
            <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {study.achievements.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-line p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </section>

        {/* Technical challenges */}
        <section className="border-b border-line py-16 md:py-20">
          <Container>
            <Reveal>
              <Eyebrow>Défis techniques</Eyebrow>
            </Reveal>
            <StaggerGroup className="mt-8 space-y-6">
              {study.challenges.map((challenge) => (
                <StaggerItem
                  key={challenge.title}
                  className="rounded-3xl border border-line p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg md:p-8"
                >
                  <h3 className="text-lg font-medium">{challenge.title}</h3>
                  <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">Problème</span>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{challenge.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">Solution</span>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{challenge.solution}</p>
                    </div>
                    <div>
                      <span className="font-mono-tag text-xs uppercase tracking-widest text-accent">Résultat</span>
                      <p className="mt-2 text-sm leading-relaxed">{challenge.result}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </section>

        {/* Architecture */}
        <section className="border-b border-line py-16 md:py-20">
          <Container>
            <Reveal>
              <Eyebrow>Architecture</Eyebrow>
            </Reveal>
            <StaggerGroup className="mt-8 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-4">
              {study.architecture.map((step, i) => (
                <StaggerItem key={step} className="flex items-center gap-3 md:gap-4">
                  <div className="flex-1 rounded-2xl border border-line bg-mist px-5 py-4 text-center text-sm font-medium md:flex-none">
                    {step}
                  </div>
                  {i < study.architecture.length - 1 && (
                    <span className="hidden text-line-strong md:block">→</span>
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </section>

        {/* Stack + context */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
              <div>
                <Reveal>
                  <Eyebrow>Stack technique</Eyebrow>
                </Reveal>
                <StaggerGroup className="mt-6 flex flex-wrap gap-3">
                  {study.stack.map((tech) => (
                    <StaggerItem
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 transition-colors duration-200 hover:border-ink/30"
                    >
                      <Image src={tech.icon} alt={tech.name} width={16} height={16} unoptimized />
                      <span className="font-mono-tag text-xs">{tech.name}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-line bg-mist p-6 shadow-soft">
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="font-mono-tag text-xs uppercase tracking-widest text-muted">Contexte</dt>
                      <dd className="mt-1">{study.context}</dd>
                    </div>
                    <div>
                      <dt className="font-mono-tag text-xs uppercase tracking-widest text-muted">Rôle</dt>
                      <dd className="mt-1">{study.role}</dd>
                    </div>
                    <div>
                      <dt className="font-mono-tag text-xs uppercase tracking-widest text-muted">Période</dt>
                      <dd className="mt-1 font-mono-tag">{study.period}</dd>
                    </div>
                  </dl>

                  {study.privacyNote && (
                    <p className="mt-6 flex items-start gap-2 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                      <Lock size={13} className="mt-0.5 shrink-0" strokeWidth={2} />
                      {study.privacyNote}
                    </p>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <Link href="/#projects" className="text-sm font-medium text-ink hover:text-accent">
                ← Tous les projets
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
