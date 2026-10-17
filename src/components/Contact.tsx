import { Link } from "@tanstack/react-router";
import { Github, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Fields = { name: string; email: string; subject: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "", consent: false };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (values.message.trim().length < 20) errors.message = "Please write at least 20 characters.";
  if (!values.consent) errors.consent = "Please agree before sending your message.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: "name" | "email" | "subject" | "message") => (event: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  // Front end only for now: swap this handler for an email service or server
  // function when one is connected. No data leaves the browser today.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    setValues(empty);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's turn data into something useful."
          description="Open to data analytics, business intelligence and reporting roles, as well as analysis and dashboard work."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-4">
              <li>
                <a
                  href={profile.links.email.href}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 card-elevate"
                >
                  <Mail className="mt-0.5 h-4.5 w-4.5 text-signal" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium">Email</span>
                    <span className="block break-all text-sm text-muted-foreground">watsalainnocent081@gmail.com</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.links.github.href}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 card-elevate"
                >
                  <Github className="mt-0.5 h-4.5 w-4.5 text-signal" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium">GitHub</span>
                    <span className="block text-sm text-muted-foreground">github.com/INNOCENT256-UG</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form noValidate onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6">
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
                  onCheckedChange={(checked) =>
                    setValues((prev) => ({ ...prev, consent: checked === true }))
                  }
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
                <Button type="submit" size="lg">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </Button>
                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {sent
                    ? "Message validated. Email delivery isn't connected yet — please use the email link for now."
                    : ""}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
