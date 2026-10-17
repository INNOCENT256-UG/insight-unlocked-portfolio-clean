import type { CredentialItem } from "@/data/resume";

export function Credentials({ title, items }: { title: string; items: CredentialItem[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.title} className="rounded-lg border border-border bg-card p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-display text-base font-semibold">{item.title}</p>
              <p className="font-mono text-[11px] text-muted-foreground">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
            {item.note ? (
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
