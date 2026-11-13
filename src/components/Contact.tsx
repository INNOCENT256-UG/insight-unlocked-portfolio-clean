import { Link } from "@tanstack/react-router";
import { Check, Copy, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { GitHubLogo } from "./TechIcons";

type Fields = { name: string; email: string; subject: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "", consent: false };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (values.message.trim().length < 20) errors.message = "Please write at least 20 characters.";
  if (!values.consent) errors.consent = "Please confirm before preparing your email draft.";
  return errors;
}

export function Contact({ heading = true }: { heading?: boolean }) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: "name" | "email" | "subject" | "message") => (event: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    setChecked(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  // Front end only for now: swap this handler for an email service or server
  // function when one is connected. No data leaves the browser today.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const errorKeys = (["name", "email", "subject", "message", "consent"] as const).filter(
      (key) => Boolean(nextErrors[key]),
    );
    if (errorKeys.length > 0) {
      setChecked(false);
      document.getElementById(errorKeys[0])?.focus();
      return;
    }
    setChecked(true);
  };

  const mailtoHref = checked
    ? `${profile.links.email.href}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(
        `From: ${values.name.trim()} (${values.email.trim()})\n\n${values.message.trim()}`,
      )}`
    : profile.links.email.href;

  return (
    <section
      id="contact"
      aria-labelledby={heading ? "contact-title" : undefined}
      aria-label={heading ? undefined : "Contact details and message form"}
      className="border-b border-border"
    >
      <div className={cn("mx-auto max-w-6xl px-5 sm:px-8", heading ? "py-10 sm:py-12 lg:py-14" : "py-8 lg:py-10")}>
        {heading ? (
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let's turn data into something useful."
            description="Open to data analytics, business intelligence and reporting roles, as well as analysis and dashboard work."
          />
        ) : null}

        <div className={cn("grid gap-8 lg:grid-cols-[0.8fr_1.2fr]", heading && "mt-8")}>
          <Reveal>
            <ul className="space-y-4">
              <li className="border-t border-border pt-4">
                <a href={profile.links.email.href} className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-signal" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-foreground">Email</span>
                    <span className="block break-all text-sm text-muted-foreground">
                      {profile.links.email.address}
                    </span>
                  </span>
                </a>
                <div className="mt-2.5 pl-7">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-signal"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
                        Copied to clipboard
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        Copy email address
                      </>
                    )}
                  </button>
                  <span aria-live="polite" className="sr-only">
                    {copied ? "Email address copied to clipboard." : ""}
                  </span>
                </div>
              </li>
              <li className="border-t border-border pt-4">
                <a
                  href={profile.links.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-signal"
                >
                  <GitHubLogo className="mt-0.5 h-4.5 w-4.5 shrink-0 text-signal" />
                  <span>
                    <span className="block text-sm font-medium text-foreground">GitHub</span>
                    <span className="block text-sm text-muted-foreground">github.com/INNOCENT256-UG</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form noValidate onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-5 sm:p-6">
              <div className="mb-5 border-l-2 border-signal bg-surface/60 py-3 pl-4 pr-3 text-sm leading-relaxed text-muted-foreground">
                This form validates your details locally and prepares an email draft — no data is stored or sent from a server. You can also{" "}
                <a href={profile.links.email.href} className="font-medium text-signal underline underline-offset-4">
                  email Innocent directly
                </a>
                .
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    autoComplete="name"
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    autoComplete="email"
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={set("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject ? (
                  <p id="subject-error" className="text-xs text-destructive">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={set("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Checkbox
                  id="consent"
                  name="consent"
                  checked={values.consent}
                  onCheckedChange={(isChecked) => {
                    setValues((prev) => ({ ...prev, consent: isChecked === true }));
                    setErrors((prev) => (prev.consent ? { ...prev, consent: undefined } : prev));
                    setChecked(false);
                  }}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : "consent-hint"}
                  className="mt-0.5"
                />
                <div className="space-y-1">
                  <Label htmlFor="consent" className="text-sm font-normal leading-relaxed">
                    I agree that my name, email and message may be used to reply to this enquiry.
                  </Label>
                  <p id="consent-hint" className="text-xs text-muted-foreground">
                    Nothing else is collected and your details are never added to a mailing list. See
                    the{" "}
                    <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
                      privacy policy
                    </Link>
                    .
                  </p>
                  {errors.consent ? (
                    <p id="consent-error" className="text-xs text-destructive">
                      {errors.consent}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" variant="outline" className="rounded-sm">
                  Prepare message
                </Button>
                {checked ? (
                  <Button asChild size="lg" className="rounded-sm cta-gradient">
                    <a href={mailtoHref}>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Open in email app
                    </a>
                  </Button>
                ) : null}
                {(values.name || values.email || values.subject || values.message || values.consent) ? (
                  <Button
                    type="button"
                    size="lg"
                    variant="ghost"
                    className="rounded-sm text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      setValues(empty);
                      setErrors({});
                      setSubmitAttempted(false);
                      setChecked(false);
                    }}
                  >
                    Clear form
                  </Button>
                ) : null}
              </div>
              <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                {checked
                  ? "Your message details look complete. Click “Open in email app” to send via your default mail client."
                  : submitAttempted && Object.values(errors).some(Boolean)
                    ? "Please check the highlighted fields before preparing your message."
                    : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
