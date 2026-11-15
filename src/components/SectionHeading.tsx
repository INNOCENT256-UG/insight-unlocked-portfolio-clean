import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  /** Applied to the heading so sections can reference it with aria-labelledby. */
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, className, align = "left", id }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("rule-label flex items-center gap-3", align === "center" && "justify-center")}>
        <span aria-hidden="true" className="inline-block h-px w-8 bg-signal" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl leading-[1.12] tracking-[-0.015em] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-2.5 max-w-2xl text-base leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
