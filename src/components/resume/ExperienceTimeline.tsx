import { experience, transferableNote } from "@/data/resume";

export function ExperienceTimeline() {
  return (
    <>
      <ol className="space-y-8">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`} className="relative border-l border-border pl-6">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[4.5px] h-2 w-2 rounded-full bg-signal"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-semibold">{item.role}</h3>
              {item.period ? (
                <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {item.period}
                </p>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-foreground/80">
              {item.company} — {item.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-signal" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-8 border-l-2 border-signal/40 pl-4 text-sm leading-relaxed text-muted-foreground italic">
        {transferableNote}
      </p>
    </>
  );
}
