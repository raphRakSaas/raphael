import Link from "next/link";
import { Container } from "./ui";
import { nav, siteMeta } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-12">
      <Container className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <span className="font-mono-tag text-lg">{siteMeta.footerName}</span>

        <nav className="flex flex-wrap gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="text-xs text-muted">{siteMeta.ownerLine}</span>
      </Container>
    </footer>
  );
}
