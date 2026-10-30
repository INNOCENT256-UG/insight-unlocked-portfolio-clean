import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative border-b border-border">
      <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <Reveal>
          <p className="rule-label flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-signal" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}
