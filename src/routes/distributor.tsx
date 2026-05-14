import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import becomeBg from "@/assets/become.jpg";

export const Route = createFileRoute("/distributor")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — SG Biopharma" },
      { name: "description", content: "Partner with SG Biopharma to expand access to quality, affordable medicines across the Philippines." },
      { property: "og:title", content: "Become a Distributor — SG Biopharma" },
      { property: "og:description", content: "Join SG Biopharma in delivering reliable pharmaceutical solutions across the Philippines." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DistributorPage,
});

const schema = z.object({
  company: z.string().trim().min(2, "Please enter your company").max(150),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  contact: z.string().trim().min(5, "Please enter a valid contact number").max(40),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function DistributorPage() {
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
            formType: "distributor",
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
    <div className="relative overflow-hidden">
      {/* Page background — gradient + image on the right */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[image:var(--gradient-soft)]" />
        <div
          className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-1/2 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${becomeBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Partnership</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Let's deliver better healthcare, together.
          </h1>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[7fr_3fr]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border p-6 shadow-[var(--shadow-soft)] md:p-10"
            style={{ backgroundColor: "#ECFCEF" }}
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 text-2xl font-bold text-primary-deep">Thank you! We'll be in touch shortly.</h3>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary-deep hover:bg-secondary"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold tracking-tight">Distributor inquiry</h2>
                <p className="mt-2 text-sm text-muted-foreground">Fill in the form below and our team will get in touch with you shortly.</p>
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
                  <Field label="Message" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={1000}
                      rows={6}
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your distribution capabilities…"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : (<>Submit inquiry <Send className="h-4 w-4" /></>)}
                  </button>
                  {submitError && (
                    <p className="text-center text-sm font-medium text-destructive">{submitError}</p>
                  )}
                </div>
              </>
            )}
          </form>

          {/* Description */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-primary-deep">
                Partner with us
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>SG Biopharma is expanding, and we are looking for distribution partners who want to grow with us.</p>
                <p>
                  As the manufacturer of SG Care, our own FDA-approved line of diagnostic tubes and vials,
                  we give our partners access to an exclusive product alongside a comprehensive range of
                  pharmaceutical solutions, vaccines, and medical equipment.
                </p>
                <p>
                  Our distributors also enjoy competitive wholesale pricing on products held to the highest
                  standards of quality and regulatory compliance.
                </p>
                <p>Join our network and carry a portfolio that healthcare institutions across the Philippines already depend on.</p>
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