import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, Award, HeartPulse, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pharma.jpg";
import cdcLogo from "@/assets/clients/cdc.jpg";
import ciacLogo from "@/assets/clients/ciac.jpg";
import citemLogo from "@/assets/clients/citem.jpg";
import depedLogo from "@/assets/clients/deped.jpg";
import dohLogo from "@/assets/clients/doh.jpg";
import greencityLogo from "@/assets/clients/greencity.jpg";
import mexicoLogo from "@/assets/clients/mexico.jpg";
import sanAntonioLogo from "@/assets/clients/san-antonio.jpg";
import oraniLogo from "@/assets/clients/orani.jpg";
import mchphuLogo from "@/assets/clients/mchphu.jpg";
import psauLogo from "@/assets/clients/psau.jpg";
import sacredHeartLogo from "@/assets/clients/sacred-heart.jpg";
import jblmghLogo from "@/assets/clients/jblmgh.jpg";
import jvghLogo from "@/assets/clients/jvgh.jpg";
import angelesLogo from "@/assets/clients/angeles.jpg";
import sanFernandoLogo from "@/assets/clients/san-fernando.jpg";
import stoRosarioLogo from "@/assets/clients/sto-rosario.jpg";
import aspacLogo from "@/assets/clients/aspac.jpg";
import sercomLogo from "@/assets/clients/sercom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SG Global Healthcare — Quality Pharmaceuticals & Medical Equipment" },
      { name: "description", content: "Trusted distributor of quality medicines, vaccines, and medical equipment. Delivering wellness, ensuring access nationwide." },
      { property: "og:title", content: "SG Global Healthcare" },
      { property: "og:description", content: "Quality pharmaceuticals and medical equipment, distributed with integrity." },
    ],
  }),
  component: HomePage,
});

const clients = [
  { name: "Clark Development Corporation", logo: cdcLogo },
  { name: "Clark International Airport Corporation", logo: ciacLogo },
  { name: "CITEM", logo: citemLogo },
  { name: "DepEd — Region III, Division of Pampanga", logo: depedLogo },
  { name: "DOH Central Luzon", logo: dohLogo },
  { name: "GreenCity Medical Center", logo: greencityLogo },
  { name: "Bayan ng Mexico, Pampanga", logo: mexicoLogo },
  { name: "Bayan ng San Antonio, Zambales", logo: sanAntonioLogo },
  { name: "Bayan ng Orani, Bataan", logo: oraniLogo },
  { name: "Mexico Community Hospital — Public Health Unit", logo: mchphuLogo },
  { name: "Pampanga State Agricultural University", logo: psauLogo },
  { name: "AC Sacred Heart Medical Center", logo: sacredHeartLogo },
  { name: "Jose B. Lingad Memorial General Hospital", logo: jblmghLogo },
  { name: "Joni Villanueva General Hospital", logo: jvghLogo },
  { name: "Lungsod ng Angeles", logo: angelesLogo },
  { name: "City of San Fernando, Pampanga", logo: sanFernandoLogo },
  { name: "Sto. Rosario Elementary School — San Luis, Pampanga", logo: stoRosarioLogo },
  { name: "ASPAC", logo: aspacLogo },
  { name: "Sercom Philippines Inc.", logo: sercomLogo },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
        {/* Background image on the right, fading into deep color on the left */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Pharmacist reviewing pharmaceutical products"
            className="h-full w-full object-cover object-right"
          />
          {/* Curved/feathered overlay blending image into the deep panel */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 140% at 0% 50%, var(--primary-deep) 38%, color-mix(in oklab, var(--primary-deep) 85%, transparent) 55%, transparent 78%)",
            }}
          />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[image:var(--gradient-primary)] opacity-40 mix-blend-multiply" />
        </div>

        <div className="mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-20 md:min-h-[560px] md:px-8 md:py-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold italic leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Quality healthcare,
              <span className="block">accessible to every Filipino.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              SG Global Healthcare is a trusted wholesale distributor of pharmaceutical products,
              vaccines, and advanced medical equipment — delivered with integrity.
            </p>
            <div className="mt-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-primary-foreground/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary-deep"
              >
                EXPLORE OUR PRODUCTS <ArrowRight className="h-4 w-4" />
              </Link>
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
              SG Global Healthcare is a rapidly expanding pharmaceutical and medical supply company
              dedicated to wholesale distribution. We leverage extensive experience in pharmaceutical sales
              and marketing to revolutionize healthcare accessibility. Our mission is to provide medicines
              of exceptional quality at affordable prices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "FDA-LICENSED", text: "Fully licensed drug & device distributor." },
              { icon: Award, title: "QUALITY ASSURED", text: "Globally trusted manufacturing partners." },
              { icon: Truck, title: "NATIONWIDE REACH", text: "Reliable distribution across the Philippines." },
              { icon: HeartPulse, title: "PATIENT-FIRST", text: "Affordability without compromise on care." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm transition hover:bg-card">
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="bg-secondary/40 py-16 md:py-20 backdrop-blur-[2px]">
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
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <article
                key={c.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/85 p-5 text-center shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-card hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-2">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold leading-snug text-primary-deep sm:text-sm">{c.name}</p>
              </article>
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
              CONTACT US TODAY <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}