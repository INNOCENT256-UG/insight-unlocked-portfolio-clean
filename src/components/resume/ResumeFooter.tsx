import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeFooter() {
  return (
    <div className="resume-actions mt-16 rounded-xl border border-border bg-card p-8 text-center">
      <h2 className="font-display text-2xl font-semibold">Want to see how I apply these skills?</h2>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/projects">
            Explore My Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/contact">
            Contact Me
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        <Link to="/" className="underline underline-offset-4">
          Back to portfolio
        </Link>
      </p>
    </div>
  );
}
