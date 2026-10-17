import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, className, align = "left" }: Props) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="rule-label flex items-center gap-3">
        <span aria-hidden="true" className="inline-block h-px w-8 bg-signal" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}
