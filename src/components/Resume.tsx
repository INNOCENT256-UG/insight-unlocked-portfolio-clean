
import { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { resumeVersions } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Resume() {
  const [selectedId, setSelectedId] = useState<string>(
    resumeVersions[0].id,
  );

  const selected =
    resumeVersions.find((resume) => resume.id === selectedId) ??
    resumeVersions[0];

  return (
    <section
      id="resume"
      aria-labelledby="resume-title"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:py-18">
        <SectionHeading
          eyebrow="Professional Profile"
          title="Experience and career focus"
          description="Explore my professional focus across data analytics, business intelligence, and operations."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div
              role="radiogroup"
              aria-label="Choose a professional profile"
              className="space-y-3"
            >
              {resumeVersions.map((version) => {
                const active = version.id === selectedId;

                return (
                  <button
                    key={version.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setSelectedId(version.id)}
                    className={cn(
                      "w-full rounded-xl border bg-card p-5 text-left transition-colors",
                      active
                        ? "border-signal"
                        : "border-border hover:border-foreground/25",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-base font-semibold">
                        {version.title}
                      </span>

                      {version.primary ? (
                        <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] tracking-wide text-accent-foreground uppercase">
                          Primary
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {version.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-card p-6 card-elevate">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <FileText className="h-4.5 w-4.5" aria-hidden="true" />
                </span>

                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selected.summary}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="rule-label">Relevant roles</p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {selected.audience.map((role) => (
                    <li
                      key={role}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {role.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For further information about my background and experience,
                  please get in touch.
                </p>

                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
