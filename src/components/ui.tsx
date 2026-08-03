import Link from "next/link";
import { ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-tag inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";
  const variants: Record<string, string> = {
    primary: "bg-ink text-paper hover:bg-neutral-800",
    secondary: "bg-paper text-ink border border-line-strong hover:border-ink",
    ghost: "text-ink hover:text-accent",
  };
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`rounded-3xl border border-line bg-paper shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
