"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import { nav } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4 md:top-6">
      <div className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-line bg-paper/90 px-4 py-2.5 shadow-soft backdrop-blur-md md:px-5">
        <Link href="#" className="flex shrink-0 items-center gap-2">
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-line">
            <Image src="/images/raph.jpeg" alt="Aina Raphaël Rakotonaivo" fill className="object-cover" />
          </span>
          <span className="font-mono-tag text-sm font-medium tracking-tight">Raphaël</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
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

        <div className="hidden md:flex items-center gap-2">
          <Button href="/CV_Raphael_Rakotonaivo.pdf" variant="secondary" className="!px-4 !py-2 text-sm">
            CV ↓
          </Button>
          <Button href="#contact" className="!px-4 !py-2 text-sm">
            Me contacter
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full max-w-4xl rounded-3xl border border-line bg-paper shadow-soft-lg md:hidden">
          <div className="flex flex-col gap-4 p-6">
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
              <Button href="#contact" className="flex-1 text-sm">
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
