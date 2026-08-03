"use client";

import Image from "next/image";
import { useMorph, REST_OFFSET } from "./morph-context";
import { projects } from "@/lib/data";
import { lerp } from "@/lib/morph-utils";

const FAN = [
  { dx: 10, dy: -6, rotate: 3, z: 40 },
  { dx: -14, dy: 16, rotate: -6, z: 30 },
  { dx: 22, dy: 10, rotate: 9, z: 20 },
  { dx: -8, dy: -18, rotate: -11, z: 10 },
];

export function StackOverlay() {
  const { anchorRect, targetRects, progress, ready } = useMorph();

  if (!ready || !anchorRect || targetRects.some((r) => !r)) return null;

  const cardW = anchorRect.width * 0.72;
  const cardH = cardW * 0.68;
  const centerX = anchorRect.left + anchorRect.width / 2;
  const centerY = anchorRect.top + anchorRect.height / 2;
  const endScrollY = targetRects[0]!.top - REST_OFFSET;

  const overlayOpacity = 1 - Math.max(0, (progress - 0.92) / 0.08);
  if (overlayOpacity <= 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden>
      {projects.slice(0, 4).map((project, i) => {
        const fan = FAN[i];
        const target = targetRects[i]!;

        const startTop = centerY - cardH / 2 + fan.dy;
        const startLeft = centerX - cardW / 2 + fan.dx;
        const endTop = target.top - endScrollY;
        const endLeft = target.left;

        const top = lerp(startTop, endTop, progress);
        const left = lerp(startLeft, endLeft, progress);
        const width = lerp(cardW, target.width, progress);
        const height = lerp(cardH, target.height, progress);
        const rotate = lerp(fan.rotate, 0, progress);

        return (
          <div
            key={project.slug}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width,
              height,
              transform: `translate(${left}px, ${top}px) rotate(${rotate}deg)`,
              transformOrigin: "top left",
              zIndex: fan.z,
              opacity: overlayOpacity,
            }}
            className="overflow-hidden rounded-2xl border border-line shadow-soft-lg"
          >
            <Image src={project.image} alt={project.name} fill sizes="600px" className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}
