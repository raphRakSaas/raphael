import { Container } from "./ui";
import { quote } from "@/lib/data";

export function Quote() {
  return (
    <section className="border-b border-line bg-mist py-16 md:py-20">
      <Container>
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="text-2xl md:text-4xl font-medium tracking-tight leading-snug">
            “{quote}”
          </p>
        </blockquote>
      </Container>
    </section>
  );
}
