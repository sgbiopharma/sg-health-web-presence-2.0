import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SG Global Healthcare" },
      { name: "description", content: "Get in touch with SG Global Healthcare for pharmaceutical and medical equipment inquiries." },
      { property: "og:title", content: "Contact SG Global Healthcare" },
      { property: "og:description", content: "Reach out for pharmaceutical and medical equipment inquiries." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwEY-sTeu0J5Ugy0S2j4yWAmc7ic475QvTEOhEd_xixRYYPOyQjHqVEMisHumPsciV-HA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: result.data.name,
            email: result.data.email,
            message: result.data.message,
          }),
        },
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <section className="bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Contact us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Let's deliver better healthcare, together.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Questions about our products, partnerships, or bulk orders? Our team will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <div className="space-y-4">
            {[
              { icon: Phone, title: "Phone", value: "0917-6788-808     |     0977-811-1186", href: "tel:+639176788808" },
              { icon: Mail, title: "Email", value: "sgbiopharma.ph@gmail.com", href: "mailto:sgbiopharma.ph@gmail.com" },
              { icon: MapPin, title: "Office", value: "Sapphire St., Fortuneville 1, Baliti,\nSan Fernando, Pampanga, Philippines 2000" },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href ?? "#"}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">{c.title}</div>
                  <div className="mt-1 whitespace-pre-line text-sm font-medium text-foreground">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="rounded-2xl border border-border bg-secondary/50 p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-deep">Business Hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">Monday – Saturday · 8:00 AM – 6:00 PM (PHT)</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 text-2xl font-bold text-primary-deep">Thank you! Your message has been sent.</h3>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary-deep hover:bg-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold tracking-tight">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">Fill in the form, and we'll be in touch.</p>
                <div className="mt-6 space-y-5">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      maxLength={100}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      maxLength={255}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Message" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={1000}
                      rows={6}
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your inquiry…"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : (<>Send message <Send className="h-4 w-4" /></>)}
                  </button>
                  {submitError && (
                    <p className="text-center text-sm font-medium text-destructive">{submitError}</p>
                  )}
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary-deep">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    </label>
  );
}