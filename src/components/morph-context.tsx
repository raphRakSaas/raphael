"use client";

import { createContext, useContext, useEffect, useRef, useState, RefObject } from "react";

export type Rect = { top: number; left: number; width: number; height: number };

const CARD_COUNT = 4;
export const REST_OFFSET = 110;

type MorphContextValue = {
  anchorRef: RefObject<HTMLDivElement | null>;
  targetRefs: RefObject<HTMLDivElement | null>[];
  progress: number;
  ready: boolean;
  anchorRect: Rect | null;
  targetRects: (Rect | null)[];
};

const MorphContext = createContext<MorphContextValue | null>(null);

export function useMorph() {
  const ctx = useContext(MorphContext);
  if (!ctx) throw new Error("useMorph must be used within MorphProvider");
  return ctx;
}

function docRect(el: HTMLElement | null): Rect | null {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: r.top + window.scrollY, left: r.left, width: r.width, height: r.height };
}

export function MorphProvider({ children }: { children: React.ReactNode }) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRefsRef = useRef<RefObject<HTMLDivElement | null>[]>(
    Array.from({ length: CARD_COUNT }, () => ({ current: null }))
  );

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [anchorRect, setAnchorRect] = useState<Rect | null>(null);
  const [targetRects, setTargetRects] = useState<(Rect | null)[]>(
    Array.from({ length: CARD_COUNT }, () => null)
  );
  const endScrollYRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function measure() {
      const anchor = docRect(anchorRef.current);
      const targets = targetRefsRef.current.map((r) => docRect(r.current));
      setAnchorRect(anchor);
      setTargetRects(targets);
      if (anchor && targets[0]) {
        endScrollYRef.current = Math.max(targets[0].top - REST_OFFSET, 1);
        setReady(true);
      }
    }

    function onScroll() {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const end = endScrollYRef.current;
        if (end == null) return;
        setProgress(clampScroll(window.scrollY / end));
      });
    }

    function clampScroll(v: number) {
      return Math.min(1, Math.max(0, v));
    }

    measure();
    const t = setTimeout(measure, 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <MorphContext.Provider
      value={{
        anchorRef,
        targetRefs: targetRefsRef.current,
        progress,
        ready,
        anchorRect,
        targetRects,
      }}
    >
      {children}
    </MorphContext.Provider>
  );
}
