import type { ReactNode } from "react";

export function ResumeSection({
  label,
  title,
  children,
}: {
  label: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section aria-label={title ?? label} className="resume-section border-t border-border pt-8">
      <p className="rule-label flex items-center gap-3">
        <span aria-hidden="true" className="inline-block h-px w-6 bg-signal" />
        {label}
      </p>
      {title ? <h2 className="mt-3 font-display text-2xl font-semibold">{title}</h2> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </li>
  );
}
