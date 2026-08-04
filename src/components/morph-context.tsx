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
    function clampScroll(v: number) {
      return Math.min(1, Math.max(0, v));
    }

    // If the page mounts already scrolled (back-navigation, a `/#projects`
    // deep link, or a refresh mid-page), the browser jumps straight to that
    // anchor — which lands at a scroll offset that generally doesn't match
    // this component's own "fully morphed" scroll position. Recomputing
    // progress from that mismatched offset leaves it stuck mid-transition
    // (stack overlay half-landed, real card still hidden) with no further
    // scroll event to correct it. So: until the user actually scrolls, a
    // non-top landing snaps straight to the finished state instead of that
    // in-between frame. The moment a real scroll event fires, we drop this
    // lock for good and follow the formula continuously in both directions
    // (so scrolling back up still folds the cards back into the hero stack).
    const lockedToFinalRef = { current: window.scrollY >= 4 };

    function formulaProgress() {
      const end = endScrollYRef.current;
      if (end == null) return null;
      return clampScroll(window.scrollY / end);
    }

    function measure() {
      const anchor = docRect(anchorRef.current);
      const targets = targetRefsRef.current.map((r) => docRect(r.current));
      setAnchorRect(anchor);
      setTargetRects(targets);
      if (anchor && targets[0]) {
        endScrollYRef.current = Math.max(targets[0].top - REST_OFFSET, 1);
        setReady(true);
        if (lockedToFinalRef.current) {
          setProgress(1);
        } else {
          const p = formulaProgress();
          if (p != null) setProgress(p);
        }
      }
    }

    function onScroll() {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        lockedToFinalRef.current = false;
        const p = formulaProgress();
        if (p != null) setProgress(p);
      });
    }

    measure();
    const t = setTimeout(measure, 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    // Fires on bfcache restores (browser back/forward) where the page is
    // reused without a fresh mount elsewhere but scroll position can differ.
    window.addEventListener("pageshow", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pageshow", measure);
      // Reset the guard, not just cancel the frame — otherwise a stale
      // non-null id survives cleanup (notably React StrictMode's dev-only
      // mount→cleanup→remount) and permanently blocks the next mount's
      // onScroll from ever scheduling a new frame, freezing progress for
      // the rest of the session.
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
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
