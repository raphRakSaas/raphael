"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Container, SectionHeading } from "./ui";
import { ScrollFade } from "./scroll-fade";
import { parcours, parcoursIntro, TimelineEntry, TimelineBand } from "@/lib/data";

function isCurrent(entry: TimelineEntry) {
  return entry.date.toLowerCase().includes("présent");
}

// Tailwind can't generate classes built from runtime template literals (its
// scanner reads source text literally), so per-entry grid placement is
// applied as inline styles, gated on this media query instead.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

// The central spine: one continuous line between the two columns, with a
// glowing dot whose position is driven by scroll progress — it travels down
// as you scroll down, and back up as you scroll up.
function CenterSpine({
  scrollYProgress,
  minRow,
  maxRow,
}: {
  scrollYProgress: MotionValue<number>;
  minRow: number;
  maxRow: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function measure() {
      if (ref.current) setHeight(ref.current.offsetHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const ballTop = useTransform(scrollYProgress, [0, 1], [0, Math.max(height - 12, 0)]);

  return (
    <div
      ref={ref}
      style={{ gridColumn: 2, gridRow: `${minRow} / ${maxRow + 1}` }}
      className="relative left-1/2 hidden w-px -translate-x-1/2 bg-line md:block"
    >
      <motion.span style={{ top: ballTop }} className="absolute -left-[5.5px] h-3 w-3 rounded-full">
        <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-75" />
        <span className="absolute inset-0 rounded-full bg-live shadow-[0_0_10px_2px_rgba(33,179,11,0.55)]" />
      </motion.span>
    </div>
  );
}

// One connector per occupied row: a dot centered in the gutter, with a short
// stub reaching toward whichever side(s) have a card on that row.
function RowConnector({ row, hasLeft, hasRight, current }: { row: number; hasLeft: boolean; hasRight: boolean; current: boolean }) {
  return (
    <div
      style={{ gridColumn: 2, gridRow: row }}
      className="relative hidden md:block"
    >
      {hasLeft && <span className="absolute right-1/2 top-[9px] h-px w-3 bg-line" />}
      {hasRight && <span className="absolute left-1/2 top-[9px] h-px w-3 bg-line" />}
      <span
        className={`absolute left-1/2 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full ring-4 ring-paper ${
          current ? "bg-live" : "bg-line-strong"
        }`}
      >
        {current && <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-75" />}
      </span>
    </div>
  );
}

function DetailBubble({ entry }: { entry: TimelineEntry }) {
  if (!entry.description && !entry.tags) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.96 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-1/2 top-full z-30 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-line bg-ink p-4 text-paper shadow-soft-lg"
    >
      <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-line bg-ink" />
      {entry.description && <p className="text-sm leading-relaxed text-neutral-200">{entry.description}</p>}
      {entry.tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-tag rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function TimelineCard({
  entry,
  column,
  mobileTag,
}: {
  entry: TimelineEntry;
  column: 1 | 3;
  mobileTag?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const isDesktop = useIsDesktop();
  const current = isCurrent(entry);
  const hasDetails = Boolean(entry.description || entry.tags);

  return (
    <div
      className="relative"
      style={
        isDesktop
          ? { gridColumn: column, gridRow: entry.row, zIndex: hovered ? 50 : undefined }
          : { zIndex: hovered ? 50 : undefined }
      }
    >
      {!isDesktop && (
        <span
          className={`absolute -left-6 top-1.5 h-2 w-2 rounded-full ring-4 ring-paper ${
            current ? "bg-live" : "bg-line-strong"
          }`}
        >
          {current && <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-75" />}
        </span>
      )}
      <ScrollFade distance={20}>
        {mobileTag && (
          <span className="font-mono-tag mb-2 inline-block rounded-full border border-line-strong px-2.5 py-0.5 text-[11px] text-muted md:hidden">
            {mobileTag}
          </span>
        )}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="relative w-full"
        >
          <div
            className={`rounded-2xl border bg-paper p-5 transition-shadow duration-300 ${
              hovered ? "border-ink/15 shadow-soft-lg" : "border-line shadow-soft"
            }`}
          >
            <div className="font-mono-tag text-xs text-muted">{entry.date}</div>
            <div className="mt-2 text-base font-medium">{entry.title}</div>
            {entry.place && <div className="text-sm text-accent">{entry.place}</div>}
          </div>

          <AnimatePresence>{hovered && hasDetails && <DetailBubble entry={entry} />}</AnimatePresence>
        </motion.div>
      </ScrollFade>
    </div>
  );
}

function Band({ band }: { band: TimelineBand }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const allRows = Array.from(new Set([...band.left.map((e) => e.row), ...band.right.map((e) => e.row)])).sort(
    (a, b) => a - b
  );
  const minRow = allRows[0];
  const maxRow = allRows[allRows.length - 1];

  const mobileEntries = [
    ...band.left.map((e) => ({ entry: e, tag: parcoursIntro.leftLabel })),
    ...band.right.map((e) => ({ entry: e, tag: parcoursIntro.rightLabel })),
  ].sort((a, b) => a.entry.row - b.entry.row);

  return (
    <div ref={ref} className="border-t border-line pt-8">
      <div className="font-mono-tag mb-6 text-sm text-ink">{band.years}</div>

      {/* Desktop: two columns either side of a central spine */}
      <div className="hidden gap-y-6 md:grid md:grid-cols-[1fr_2.5rem_1fr]">
        {allRows.length > 1 && <CenterSpine scrollYProgress={scrollYProgress} minRow={minRow} maxRow={maxRow} />}
        {allRows.map((row) => (
          <RowConnector
            key={row}
            row={row}
            hasLeft={band.left.some((e) => e.row === row)}
            hasRight={band.right.some((e) => e.row === row)}
            current={
              band.left.some((e) => e.row === row && isCurrent(e)) ||
              band.right.some((e) => e.row === row && isCurrent(e))
            }
          />
        ))}
        {band.left.map((entry, i) => (
          <TimelineCard key={`l-${i}`} entry={entry} column={1} />
        ))}
        {band.right.map((entry, i) => (
          <TimelineCard key={`r-${i}`} entry={entry} column={3} />
        ))}
      </div>

      {/* Mobile: single chronological column, tagged by track */}
      <div className="relative space-y-5 pl-7 md:hidden">
        <div className="absolute bottom-1 left-2 top-1 w-px bg-line" />
        {mobileEntries.map(({ entry, tag }, i) => (
          <TimelineCard key={i} entry={entry} column={1} mobileTag={tag} />
        ))}
      </div>
    </div>
  );
}

export function Parcours() {
  return (
    <section id="parcours" className="border-b border-line py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Parcours" title={parcoursIntro.title} subtitle={parcoursIntro.subtitle} />

        <div className="mt-6 hidden grid-cols-[1fr_2.5rem_1fr] gap-8 md:grid">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">
            {parcoursIntro.leftLabel}
          </span>
          <span />
          <span className="font-mono-tag text-xs uppercase tracking-widest text-muted">
            {parcoursIntro.rightLabel}
          </span>
        </div>

        <div className="mt-4 space-y-10">
          {parcours.map((band) => (
            <Band key={band.years} band={band} />
          ))}
        </div>
      </Container>
    </section>
  );
}
