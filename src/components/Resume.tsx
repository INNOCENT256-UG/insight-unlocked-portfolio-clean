import { Download, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { resumeVersions } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Resume() {
  const [selectedId, setSelectedId] = useState<string>(resumeVersions[0].id);
  const selected = resumeVersions.find((r) => r.id === selectedId) ?? resumeVersions[0];

  return (
    <section id="resume" aria-labelledby="resume-title" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Resume"
          title="Data Analytics | Business Intelligence | AI & Automation"
          description="The Data Analytics resume is the primary professional profile. A separate operations resume is kept for logistics and ground operations roles — the two are never mixed."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div
              role="radiogroup"
              aria-label="Choose a resume version"
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
                      active ? "border-signal" : "border-border hover:border-foreground/25",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-base font-semibold">{version.title}</span>
                      {version.primary ? (
                        <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] tracking-wide text-accent-foreground uppercase">
                          Primary
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{version.summary}</p>
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
                  <h3 className="font-display text-lg font-semibold">{selected.title}</h3>
                  <p className="text-sm text-muted-foreground">{selected.summary}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="rule-label">Suited to</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {selected.audience.map((role) => (
                    <li
                      key={role}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={selected.file} download>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {selected.primary ? "Download Data Analytics Resume" : `Download ${selected.title}`}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={selected.file} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    View Resume
                  </a>
                </Button>
              </div>

              <p className="mt-4 font-mono text-[11px] text-muted-foreground">
                Placeholder file: {selected.file} — replace with the real PDF in /public/resume/.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
