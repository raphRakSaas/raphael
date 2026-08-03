import { Container, SectionHeading } from "./ui";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="À propos" title={about.headline} />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <div className="font-mono-tag text-6xl md:text-7xl tracking-tight">{about.stat.value}</div>
            <p className="mt-2 max-w-xs text-sm text-muted">{about.stat.label}</p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono-tag text-xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <div className="text-lg font-medium">{about.name}</div>
              <div className="text-sm text-muted">{about.title}</div>

              <div className="mt-6 space-y-4">
                <div className="font-mono-tag text-xs uppercase tracking-widest text-muted">
                  Mon parcours pro
                </div>
                {about.workHistory.map((job) => (
                  <div key={job.place} className="flex items-baseline justify-between gap-4 text-sm">
                    <div>
                      <span className="font-medium">{job.place}</span>{" "}
                      <span className="text-muted">— {job.role}</span>
                    </div>
                    <span className="font-mono-tag shrink-0 text-xs text-muted">{job.period}</span>
                  </div>
                ))}
                <a href="#parcours" className="inline-block text-sm font-medium text-ink hover:text-accent">
                  Voir tout le parcours →
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
