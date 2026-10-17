import { cn } from "@/lib/utils";

/** Small, quiet analytical accents used to reinforce the data identity. */

export function Sparkline({
  points = [8, 14, 11, 20, 17, 26, 24, 34],
  className,
}: {
  points?: number[];
  className?: string;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 30 - ((p - min) / span) * 26;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 100 32"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
      className={cn("h-8 w-full text-signal", className)}
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

export function MiniBars({ values = [30, 55, 42, 78, 64, 90], className }: { values?: number[]; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex h-8 items-end gap-1", className)}>
      {values.map((v, i) => (
        <span
          key={i}
          style={{ height: `${v}%` }}
          className="w-1.5 rounded-[1px] bg-signal/70"
        />
      ))}
    </div>
  );
}

export function KpiCard({
  label,
  value,
  caption,
  children,
}: {
  label: string;
  value: string;
  caption?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="rule-label">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold tabular-nums">{value}</p>
      {caption ? <p className="mt-1 text-xs text-muted-foreground">{caption}</p> : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}
