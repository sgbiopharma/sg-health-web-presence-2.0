import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, Award, HeartPulse, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pharma.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SG Global Healthcare Corp — Quality Pharmaceuticals & Medical Equipment" },
      { name: "description", content: "Trusted distributor of quality medicines, vaccines, and medical equipment. Delivering wellness, ensuring access nationwide." },
      { property: "og:title", content: "SG Global Healthcare Corp" },
      { property: "og:description", content: "Quality pharmaceuticals and medical equipment, distributed with integrity." },
    ],
  }),
  component: HomePage,
});

const clients = [
  "Clark Development Corporation",
  "Clark International Airport",
  "CITEM",
  "DepEd — Pampanga",
  "DOH Central Luzon",
  "GreenCity Medical Center",
  "Bayan ng Mexico",
  "Bayan ng San Antonio",
  "Bayan ng Orani",
  "Pampanga State Agricultural University",
  "AC Sacred Heart Medical Center",
  "City of San Fernando",
  "Aspac",
  "Sercom Philippines Inc.",
  "Jose B. Lingad Memorial General Hospital",
  "Lungsod ng Angeles",
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]" />
        <div className="absolute -right-24 -top-24 -z-10 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-deep">
              <HeartPulse className="h-3.5 w-3.5" /> Delivering wellness, ensuring access
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Quality healthcare,
              <span className="block bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                accessible to every Filipino.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              SG Global Healthcare Corp is a trusted wholesale distributor of pharmaceutical products,
              vaccines, and advanced medical equipment — sourced from world-class manufacturers and
              delivered with integrity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
              >
                Explore our products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary-deep hover:bg-secondary"
              >
                Learn more about us
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              <div>
                <dt className="text-3xl font-extrabold text-primary-deep">500+</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">Products</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-primary-deep">50+</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">Partner brands</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-primary-deep">100%</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">FDA compliant</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Pharmacist reviewing pharmaceutical products"
                width={1600}
                height={1024}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A pharmaceutical distributor built on trust and accessibility.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              SG Global Healthcare Corp is a rapidly expanding pharmaceutical and medical supply entity
              dedicated to wholesale distribution. We leverage extensive experience in pharmaceutical sales
              and marketing to revolutionize healthcare accessibility — providing medicines of exceptional
              quality at affordable prices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "FDA Licensed", text: "Fully licensed drug & device distributor." },
              { icon: Award, title: "Quality Assured", text: "Globally trusted manufacturing partners." },
              { icon: Truck, title: "Nationwide Reach", text: "Reliable distribution across the Philippines." },
              { icon: HeartPulse, title: "Patient-First", text: "Affordability without compromise on care." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Corporate Clients</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Trusted by leading institutions nationwide.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Government agencies, hospitals, universities, and private enterprises rely on SG Global
              Healthcare for consistent, quality healthcare supply.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c}
                className="flex min-h-[88px] items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-semibold text-primary-deep shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Partner with us to deliver better healthcare.
              </h2>
              <p className="mt-3 text-primary-foreground/85">
                From bulk pharmaceutical orders to medical equipment procurement, our team is ready to support your institution.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary-deep shadow-md hover:bg-white"
            >
              Contact us today <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}