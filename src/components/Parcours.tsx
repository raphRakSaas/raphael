import { Container, SectionHeading } from "./ui";
import { parcours, parcoursIntro, TimelineEntry } from "@/lib/data";

function EntryCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="rounded-2xl border border-line p-5">
      <div className="font-mono-tag text-xs text-muted">{entry.date}</div>
      <div className="mt-2 font-medium">{entry.title}</div>
      {entry.place && <div className="text-sm text-muted">{entry.place}</div>}
      {entry.description && <p className="mt-2 text-sm text-muted">{entry.description}</p>}
      {entry.tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-tag rounded-full border border-line-strong px-2.5 py-0.5 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Parcours() {
  return (
    <section id="parcours" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Parcours" title={parcoursIntro.title} subtitle={parcoursIntro.subtitle} />

        <div className="mt-6 hidden md:grid grid-cols-2 gap-8">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">
            {parcoursIntro.leftLabel}
          </span>
          <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">
            {parcoursIntro.rightLabel}
          </span>
        </div>

        <div className="mt-4 space-y-10">
          {parcours.map((band) => (
            <div key={band.years} className="border-t border-line pt-8">
              <div className="font-mono-tag mb-6 text-sm text-ink">{band.years}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {band.left.map((entry, i) => (
                    <EntryCard key={i} entry={entry} />
                  ))}
                </div>
                <div className="space-y-4">
                  {band.right.map((entry, i) => (
                    <EntryCard key={i} entry={entry} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
