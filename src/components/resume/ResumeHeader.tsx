import { Github, Mail, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { resumeHeader } from "@/data/resume";

export function ResumeHeader() {
  const { email, github } = profile.links;

  return (
    <header className="resume-header">
      <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {resumeHeader.name}
        <span className="text-signal">.</span>
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{resumeHeader.role}</h1>
      <p className="mt-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
        {resumeHeader.disciplines}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        “{resumeHeader.statement}”
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-signal" aria-hidden="true" />
          <a className="underline-offset-4 hover:underline" href={email.href}>
            {email.address}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Github className="h-4 w-4 text-signal" aria-hidden="true" />
          <a className="underline-offset-4 hover:underline" href={github.href} target="_blank" rel="noreferrer">
            github.com/INNOCENT256-UG
          </a>
        </li>
      </ul>

      <div className="resume-actions mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          variant="outline"
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") window.print();
          }}
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print Resume
        </Button>
      </div>
    </header>
  );
}
