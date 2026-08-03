import Image from "next/image";
import { Container, SectionHeading } from "./ui";
import { services, techMarquee } from "@/lib/data";

export function Services() {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Services" title={services.title} subtitle={services.subtitle} />

        <div className="mt-12 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-10 py-4">
            {loop.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex items-center gap-2 shrink-0 opacity-70">
                <Image src={tech.icon} alt={tech.name} width={20} height={20} unoptimized />
                <span className="font-mono-tag text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line p-6 hover:border-ink transition-colors"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="mt-3 font-medium">{item.title}</div>
              <div className="mt-1 text-sm text-muted">{item.note}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
