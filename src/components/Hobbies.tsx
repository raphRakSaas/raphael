import Image from "next/image";
import { Container, SectionHeading } from "./ui";
import { hobbies } from "@/lib/data";

export function Hobbies() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Hors du code" title={hobbies.subtitle} />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {hobbies.items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-line overflow-hidden shadow-soft">
              <div className="relative aspect-square w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="font-medium">{item.title}</div>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
