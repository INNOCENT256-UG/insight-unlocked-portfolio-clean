import type * as React from "react";
import { siPython, siPandas, siMysql, siPostgresql, siGit, siJupyter } from "simple-icons";
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

/** Microsoft-family and editor marks are drawn in-house (monochrome, currentColor). */
function ExcelIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
    >
      <path d="M14 2H5.5A1.5 1.5 0 0 0 4 3.5v17A1.5 1.5 0 0 0 5.5 22H14v-2H6V4h8V2Zm1.6 4H22a.9.9 0 0 1 .9.9v10.2a.9.9 0 0 1-.9.9h-6.4V6Zm1.7 2.6-.9 1.4 1.2 1.9-1.3 2.1h1.8l.6-1.1.6 1.1h1.8l-1.3-2.1 1.2-1.9-.9-1.4-1.4 2.2-1.4-2.2Z" />
    </svg>
  );
}

function PowerBiIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="currentColor"
    >
      <path d="M17.2 2h3.1c.6 0 1.1.5 1.1 1.1v17.8c0 .6-.5 1.1-1.1 1.1h-3.1c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1Zm-6.7 5.1h3.1c.6 0 1.1.5 1.1 1.1v12.7c0 .6-.5 1.1-1.1 1.1h-3.1c-.6 0-1.1-.5-1.1-1.1V8.2c0-.6.5-1.1 1.1-1.1Zm-6.8 6.3h3.1c.6 0 1.1.5 1.1 1.1v6.4c0 .6-.5 1.1-1.1 1.1H3.7c-.6 0-1.1-.5-1.1-1.1v-6.4c0-.6.5-1.1 1.1-1.1Z" />
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

export const techTools: TechTool[] = [
  {
    name: "Python",
    tone: "text-tool-python",
    Icon: (p) => <SimpleIcon path={siPython.path} {...p} />,
  },
  {
    name: "Pandas",
    tone: "text-tool-pandas",
    Icon: (p) => <SimpleIcon path={siPandas.path} {...p} />,
  },
  {
    name: "PostgreSQL",
    tone: "text-tool-postgresql",
    Icon: (p) => <SimpleIcon path={siPostgresql.path} {...p} />,
  },
  {
    name: "MySQL",
    tone: "text-tool-mysql",
    Icon: (p) => <SimpleIcon path={siMysql.path} {...p} />,
  },
  { name: "Excel", tone: "text-tool-excel", Icon: ExcelIcon },
  { name: "Power BI", tone: "text-tool-powerbi", Icon: PowerBiIcon },
  { name: "VS Code", tone: "text-tool-vscode", Icon: VsCodeIcon },
  {
    name: "Jupyter",
    tone: "text-tool-jupyter",
    Icon: (p) => <SimpleIcon path={siJupyter.path} {...p} />,
  },
  { name: "Git", tone: "text-tool-git", Icon: (p) => <SimpleIcon path={siGit.path} {...p} /> },
];

const toolkitGroups = [
  { label: "Programming", tools: [techTools[0]!] },
  { label: "Data analysis", tools: [techTools[1]!, techTools[7]!] },
  { label: "Databases", tools: [techTools[2]!, techTools[3]!] },
  { label: "BI & productivity", tools: [techTools[4]!, techTools[5]!] },
  { label: "Development & version control", tools: [techTools[6]!, techTools[8]!] },
] as const;

export function TechStrip({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)} aria-labelledby="toolkit-title">
      <div className="flex items-end justify-between gap-5 border-b border-border pb-4">
        <div>
          <p className="rule-label">Capabilities</p>
          <h2 id="toolkit-title" className="mt-1 font-display text-2xl leading-none sm:text-3xl">
            Technical toolkit
          </h2>
        </div>
        <span aria-hidden="true" className="mb-1 hidden h-px flex-1 bg-border sm:block" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {toolkitGroups.map(({ label, tools }) => (
          <section
            key={label}
            aria-label={label}
            className="border border-border/80 bg-card/50 p-4"
          >
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </h3>
            <ul
              className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 xl:grid-cols-1"
              aria-label={`${label} tools`}
            >
              {tools.map(({ name, tone, Icon }) => (
                <li key={name} className="flex min-w-0 items-center gap-2">
                  <span
                    className={cn("inline-flex h-6 w-6 shrink-0 items-center justify-center", tone)}
                  >
                    <Icon className="h-[1.05rem] w-[1.05rem]" />
                  </span>
                  <span className="truncate text-[0.8125rem] font-medium text-foreground">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
