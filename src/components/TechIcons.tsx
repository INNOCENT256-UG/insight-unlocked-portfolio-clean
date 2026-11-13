import * as React from "react";
import { Pause, Play } from "lucide-react";
import {
  siAnthropic,
  siDocker,
  siGit,
  siGithub,
  siJupyter,
  siMysql,
  siNumpy,
  siOllama,
  siPandas,
  siPostgresql,
  siPython,
  siScikitlearn,
} from "simple-icons";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

function SimpleIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
}

/** Official GitHub Invertocat mark from simple-icons. */
export function GitHubLogo({ className }: IconProps) {
  return <SimpleIcon path={siGithub.path} className={className} />;
}

function ExcelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)} fill="currentColor">
      <path d="M14 2H5.5A1.5 1.5 0 0 0 4 3.5v17A1.5 1.5 0 0 0 5.5 22H14v-2H6V4h8V2Zm1.6 4H22a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9h-6.4V6Zm1.7 2.6-.9 1.4 1.2 1.9-1.3 2.1h1.8l.6-1.1.6 1.1h1.8l-1.3-2.1 1.2-1.9-.9-1.4-1.4 2.2-1.4-2.2Z" />
    </svg>
  );
}

function PowerBiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)} fill="currentColor">
      <path d="M17.2 2h3.1c.6 0 1.1.5 1.1 1.1v17.8c0 .6-.5 1.1-1.1 1.1h-3.1c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1Zm-6.7 5.1h3.1c.6 0 1.1.5 1.1 1.1v12.7c0 .6-.5 1.1-1.1 1.1h-3.1c-.6 0-1.1-.5-1.1-1.1V8.2c0-.6.5-1.1 1.1-1.1Zm-6.8 6.3h3.1c.6 0 1.1.5 1.1 1.1v6.4c0 .6-.5 1.1-1.1 1.1H3.7c-.6 0-1.1-.5-1.1-1.1v-6.4c0-.6.5-1.1 1.1-1.1Z" />
    </svg>
  );
}

function TableauIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)} fill="currentColor">
      <path d="M11.2 2h1.6v2.6h2.5V6h-2.5v2.6h-1.6V6H8.7V4.6h2.5V2Zm0 13.4h1.6V18h2.5v1.4h-2.5V22h-1.6v-2.6H8.7V18h2.5v-2.6ZM2 11.2h2.6V8.7H6v2.5h2.6v1.6H6v2.5H4.6v-2.5H2v-1.6Zm13.4 0H18V8.7h1.4v2.5H22v1.6h-2.6v2.5H18v-2.5h-2.6v-1.6ZM6.3 5.2h1.2v1.7h1.7v1.2H7.5v1.7H6.3V8.1H4.6V6.9h1.7V5.2Zm10.2 0h1.2v1.7h1.7v1.2h-1.7v1.7h-1.2V8.1h-1.7V6.9h1.7V5.2Zm-10.2 9h1.2v1.7h1.7v1.2H7.5v1.7H6.3v-1.7H4.6v-1.2h1.7v-1.7Zm10.2 0h1.2v1.7h1.7v1.2h-1.7v1.7h-1.2v-1.7h-1.7v-1.2h1.7v-1.7Z" />
    </svg>
  );
}

function SqlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75">
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    </svg>
  );
}

function VsCodeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M17.6 1.6 22.5 4v16l-4.9 2.4-10.3-9.5-3.7 2.8L1.5 14.4V9.6l2.1-1.3 3.7 2.8L17.6 1.6Zm.4 5.6-5.5 4.8 5.5 4.8V7.2Z" />
    </svg>
  );
}

export type TechTool = {
  name: string;
  tone: string;
  Icon: (props: IconProps) => React.ReactElement;
};

const ROW_ONE: TechTool[] = [
  { name: "Python", tone: "text-tool-python", Icon: (p) => <SimpleIcon path={siPython.path} {...p} /> },
  { name: "SQL", tone: "text-signal", Icon: SqlIcon },
  { name: "PostgreSQL", tone: "text-tool-postgresql", Icon: (p) => <SimpleIcon path={siPostgresql.path} {...p} /> },
  { name: "MySQL", tone: "text-tool-mysql", Icon: (p) => <SimpleIcon path={siMysql.path} {...p} /> },
  { name: "Excel", tone: "text-tool-excel", Icon: ExcelIcon },
  { name: "Power BI", tone: "text-tool-powerbi", Icon: PowerBiIcon },
  { name: "Tableau", tone: "text-[#E97627]", Icon: TableauIcon },
  { name: "Pandas", tone: "text-tool-pandas", Icon: (p) => <SimpleIcon path={siPandas.path} {...p} /> },
];

const ROW_TWO: TechTool[] = [
  { name: "Jupyter", tone: "text-tool-jupyter", Icon: (p) => <SimpleIcon path={siJupyter.path} {...p} /> },
  { name: "NumPy", tone: "text-[#013243]", Icon: (p) => <SimpleIcon path={siNumpy.path} {...p} /> },
  { name: "Scikit-learn", tone: "text-[#F7931E]", Icon: (p) => <SimpleIcon path={siScikitlearn.path} {...p} /> },
  { name: "Git", tone: "text-tool-git", Icon: (p) => <SimpleIcon path={siGit.path} {...p} /> },
  { name: "GitHub", tone: "text-foreground", Icon: GitHubLogo },
  { name: "Docker", tone: "text-[#2496ED]", Icon: (p) => <SimpleIcon path={siDocker.path} {...p} /> },
  { name: "VS Code", tone: "text-tool-vscode", Icon: VsCodeIcon },
  { name: "Ollama", tone: "text-foreground", Icon: (p) => <SimpleIcon path={siOllama.path} {...p} /> },
  { name: "AI Tools", tone: "text-signal", Icon: (p) => <SimpleIcon path={siAnthropic.path} {...p} /> },
];

export const techTools: TechTool[] = [...ROW_ONE, ...ROW_TWO];

function MarqueeRow({
  items,
  durationSeconds,
  offsetFloat = false,
}: {
  items: TechTool[];
  durationSeconds: number;
  offsetFloat?: boolean;
}) {
  const renderItems = (isDuplicate: boolean) =>
    items.map(({ name, tone, Icon }, index) => (
      <li
        key={`${isDuplicate ? "dup" : "main"}-${name}`}
        aria-hidden={isDuplicate || undefined}
        className={cn(
          "flex shrink-0 items-center gap-2.5 px-6 py-2 text-foreground/85 transition-opacity hover:opacity-100 sm:px-8",
          isDuplicate && "marquee-duplicate",
          index % 3 === 1 && (offsetFloat ? "float-gentle-delay" : "float-gentle"),
        )}
      >
        <Icon className={cn("h-5 w-5 shrink-0 sm:h-6 sm:w-6", tone)} />
        <span className="whitespace-nowrap font-sans text-sm font-medium tracking-tight text-foreground sm:text-[0.9375rem]">
          {name}
        </span>
      </li>
    ));

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className="marquee-track items-center"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {renderItems(false)}
        {renderItems(true)}
      </ul>
    </div>
  );
}

export function TechStrip({ className }: { className?: string }) {
  const [paused, setPaused] = React.useState(false);

  return (
    <section className={cn("w-full border-t border-border pt-6", className)} aria-labelledby="toolkit-title">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p id="toolkit-title" className="rule-label">
          Core analytical &amp; engineering stack
        </p>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-1.5 rounded-sm px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {paused ? (
            <>
              <Play className="h-3 w-3" aria-hidden="true" />
              Play
            </>
          ) : (
            <>
              <Pause className="h-3 w-3" aria-hidden="true" />
              Pause
            </>
          )}
        </button>
      </div>

      <div className="marquee-group space-y-1.5" data-paused={paused ? "true" : undefined}>
        <MarqueeRow items={ROW_ONE} durationSeconds={34} />
        <MarqueeRow items={ROW_TWO} durationSeconds={44} offsetFloat />
      </div>
    </section>
  );
}
