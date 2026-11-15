import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Optional actions or meta shown under the description. */
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="relative site-container py-8 sm:py-10 lg:py-12">
        <Reveal>
          <p className="rule-label flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-signal" />
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl leading-[1.08] tracking-[-0.015em] sm:text-4xl lg:text-[2.95rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
          {children ? <div className="mt-5">{children}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}
