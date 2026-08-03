import { Container, SectionHeading } from "./ui";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Process" title={process.title} subtitle={process.subtitle} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {process.steps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-line p-8 shadow-soft">
              <div className="font-mono-tag text-4xl text-line-strong">{step.number}</div>
              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
