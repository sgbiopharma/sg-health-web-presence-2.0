import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Facebook, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Quote — SG Global Healthcare" },
      { name: "description", content: "Request a quote from SG Global Healthcare for pharmaceutical and medical equipment inquiries." },
      { property: "og:title", content: "Get a Quote — SG Global Healthcare" },
      { property: "og:description", content: "Request a quote for pharmaceutical and medical equipment inquiries." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  company: z.string().trim().min(2, "Please enter your company name").max(150),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  contact: z.string().trim().min(5, "Please enter a valid contact number").max(40),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ company: "", name: "", email: "", contact: "", message: "" });
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
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            formType: "get_quote",
            sheetName: "Get a Quote Form",
            company: result.data.company,
            name: result.data.name,
            email: result.data.email,
            contactNumber: result.data.contact,
            message: result.data.message,
          }),
        },
      );
      setSent(true);
      setForm({ company: "", name: "", email: "", contact: "", message: "" });
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
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Get a Quote</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                Fast, transparent pricing for your healthcare supply needs.
              </h1>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <video
                src="/get-a-quote.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 text-2xl font-bold text-primary-deep">Thank you! Your quote request has been sent.</h3>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary-deep hover:bg-secondary"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold tracking-tight">Request a quote</h2>
                <p className="mt-2 text-sm text-muted-foreground">Tell us what you need, and we'll provide detailed pricing within 24 hours.</p>
                <div className="mt-6 space-y-5">
                  <Field label="Company" error={errors.company}>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      maxLength={150}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Your company name"
                    />
                  </Field>
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
                  <Field label="Contact Number" error={errors.contact}>
                    <input
                      type="tel"
                      value={form.contact}
                      onChange={(e) => update("contact", e.target.value)}
                      maxLength={40}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. 0917-000-0000"
                    />
                  </Field>
                  <Field label="Message / Inquiry" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={1000}
                      rows={6}
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us what you'd like a quote for…"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : (<>Request quote <Send className="h-4 w-4" /></>)}
                  </button>
                  {submitError && (
                    <p className="text-center text-sm font-medium text-destructive">{submitError}</p>
                  )}
                </div>
              </>
            )}
          </form>

          {/* Details */}
          <div className="space-y-4 md:pt-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Contact us</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach us by phone, email, or visit our office — we're here to help with your medical supplies and pharmaceutical needs.
              </p>
            </div>
            {[
              { icon: Phone, title: "Phone", value: "0917-678-8808\n(045) 966-7012", href: "tel:+639176788808", bg: undefined as string | undefined },
              { icon: Mail, title: "Email", value: "infosgbiopharma.ph@gmail.com", href: "mailto:infosgbiopharma.ph@gmail.com", bg: "#EFFCF1" },
              { icon: MapPin, title: "Office", value: "Fortuneville 1, Baliti,\nSan Fernando, Pampanga, Philippines 2000", href: undefined, bg: undefined },
              { icon: Clock, title: "Business Hours", value: "Monday – Saturday · 8:00 AM – 6:00 PM (PHT)", href: undefined, bg: "#EFFCF1" },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href ?? "#"}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                style={c.bg ? { backgroundColor: c.bg } : undefined}
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
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-deep">Follow Us</h3>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="https://www.linkedin.com/company/sg-biopharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm transition hover:scale-105"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/SG-Biopharma/61587927110398/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm transition hover:scale-105"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/639778111186"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm transition hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.487-8.413z"/>
                  </svg>
                </a>
                <a
                  href="viber://chat?number=%2B639778111186"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Viber"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm transition hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M11.398.002C9.473.028 5.331.344 3.013 2.467 1.292 4.176.687 6.692.62 9.81c-.06 3.108-.13 8.937 5.488 10.516v2.42s-.038.974.602 1.17c.79.246 1.24-.51 1.99-1.323.41-.446.98-1.103 1.41-1.6 3.84.32 6.79-.418 7.13-.528.78-.255 5.181-.819 5.901-6.664.738-6.025-.36-9.832-2.34-11.55l-.013-.005C19.198.788 16.2.04 12.79.002c0 0-.252-.016-.793-.014l-.6.014zm.06 1.694c.46-.003.74.013.74.013 2.886.026 5.36.625 6.687 1.745 1.674 1.434 2.528 4.868 1.905 9.9-.6 4.881-4.166 5.19-4.825 5.402-.282.09-2.879.738-6.142.526 0 0-2.434 2.937-3.193 3.7-.121.123-.265.171-.36.146-.135-.034-.172-.196-.17-.43l.02-4.022C.788 17.357.85 12.396.9 9.792.957 7.183 1.451 5.046 2.901 3.617 4.857 1.842 8.353 1.687 11.398 1.696zm.027 2.51a.532.532 0 1 0 0 1.064c2.105 0 3.81 1.41 3.81 3.157a.526.526 0 1 0 1.052 0c0-2.341-2.18-4.221-4.862-4.221zm-3.586.71a1.62 1.62 0 0 0-.546.075v.008c-.402.094-1.273.487-1.815 1.198-.625.815-.638 1.788-.625 1.997.014.21.043 1.113.598 2.04 1.137 2.094 3.013 4.119 5.876 5.301.94.378 1.71.602 2.318.78.857.273 1.638.232 2.295-.144.823-.485 1.117-1.18 1.117-1.78 0-.273-.043-.41-.075-.479-.118-.223-.342-.346-.566-.479-.708-.387-1.45-.737-2.087-1.075-.546-.286-.927-.198-1.232.187l-.61.768c-.32.39-.892.336-.91.336-.06.001-1.082-.331-2.305-1.418-1.196-1.058-1.59-2.28-1.598-2.323l-.014-.026c-.018-.062.005-.182.082-.265l.61-.625c.273-.273.31-.654.024-1.21-.337-.638-.687-1.38-1.075-2.087-.13-.225-.252-.45-.475-.566a.83.83 0 0 0-.408-.084l-.077-.029zm3.586 1.398a.532.532 0 1 0 0 1.064c1.117 0 2.034.917 2.034 2.034a.526.526 0 1 0 1.052 0c0-1.732-1.354-3.098-3.086-3.098zm0 2.034a.532.532 0 1 0 0 1.064c.273 0 .532.122.732.32.198.198.32.458.32.732a.526.526 0 1 0 1.052 0c0-1.117-.917-2.116-2.104-2.116z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
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