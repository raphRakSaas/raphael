"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Button } from "./ui";
import { nav, siteMeta } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link href="#" className="font-mono-tag text-sm font-medium tracking-tight">
          {siteMeta.logo}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href="/CV_Raphael_Rakotonaivo.pdf" variant="secondary" className="!px-5 !py-2.5 text-sm">
            CV ↓
          </Button>
          <Button href="#contact" className="!px-5 !py-2.5 text-sm">
            Me contacter
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </div>
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <Container className="flex flex-col gap-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <Button href="/CV_Raphael_Rakotonaivo.pdf" variant="secondary" className="flex-1 text-sm">
                CV ↓
              </Button>
              <Button href="#contact" className="flex-1 text-sm" >
                Me contacter
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
