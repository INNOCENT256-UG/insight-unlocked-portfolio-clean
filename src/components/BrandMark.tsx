import { cn } from "@/lib/utils";

/**
 * Personal identity mark: a serif "I" stem read as a data axis, with three
 * nodes and their connecting path — Innocent, information, analysis, insight.
 * Monochrome with a single warm accent node. Stays legible at 16px.
 */
export function IMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
      fill="none"
    >
      {/* stem */}
      <path d="M13 6.5h6M13 25.5h6M16 6.5v19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* connection path */}
      <path
        d="M6.5 21 16 16l9.5-6.5"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* data nodes */}
      <circle cx="6.5" cy="21" r="1.7" fill="currentColor" fillOpacity="0.55" />
      <circle cx="25.5" cy="9.5" r="1.7" fill="var(--color-signal)" />
      {/* the period of "Innocent." */}
      <circle cx="25.5" cy="25.5" r="1.9" fill="var(--color-signal)" />
    </svg>
  );
}

export function Wordmark({
  className,
}: {
  className?: string;
  showLabel?: boolean;
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src="/images/logo-iw.webp"
        alt="Innocent Watsala"
        width={192}
        height={192}
        decoding="async"
        className="h-10 w-10 shrink-0 rounded-full bg-white p-0.5 object-contain"
      />
    </span>
  );
}
