import { createFileRoute } from "@tanstack/react-router";
import { Pill, Stethoscope } from "lucide-react";
import brandsImg from "@/assets/brands.jpg";
import equipmentImg from "@/assets/equipment.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — SG Global Healthcare Corp" },
      { name: "description", content: "Explore our pharmaceutical brands, vaccines, and advanced medical equipment portfolio." },
      { property: "og:title", content: "Our Products — SG Global Healthcare Corp" },
      { property: "og:description", content: "Trusted brands and advanced medical equipment." },
    ],
  }),
  component: ProductsPage,
});

const brands = [
  { name: "Abbott", desc: "Global leader in diagnostics, devices, and nutrition." },
  { name: "SD Biosensor", desc: "Rapid in-vitro diagnostic test kits and analyzers." },
  { name: "Wondfo", desc: "Point-of-care diagnostic solutions across categories." },
  { name: "Indoplas", desc: "Reliable medical consumables and supplies." },
  { name: "Mindray", desc: "Patient monitoring, imaging, and IVD equipment." },
  { name: "Fujifilm", desc: "Imaging and life-science healthcare technologies." },
  { name: "GSK", desc: "Innovative vaccines and prescription medicines." },
  { name: "Sanofi", desc: "Trusted vaccines and therapeutic products." },
  { name: "Unilab", desc: "Leading Philippine pharmaceutical brand." },
  { name: "Sahar", desc: "Quality pharmaceutical and healthcare products." },
  { name: "Anke", desc: "Advanced diagnostic imaging systems." },
  { name: "Nelpa", desc: "Trusted Filipino pharmaceutical brand." },
];

const equipment = [
  { name: "Patient Monitors", desc: "Multi-parameter monitoring for ICU and general wards." },
  { name: "Defibrillators", desc: "Automated external defibrillators for emergency response." },
  { name: "CT Scanners", desc: "High-resolution computed tomography imaging systems." },
  { name: "Ventilators", desc: "Critical-care ventilation for respiratory support." },
  { name: "ECG Machines", desc: "Diagnostic electrocardiography for cardiac assessment." },
  { name: "Surgical Equipment", desc: "Reliable instruments for operating rooms." },
];

const vaccineCategories: { name: string; types: string[] }[] = [
  { name: "Anti-Tetanus Serum", types: ["Antitet 1500 IU", "Sharjvax 1500 IU", "Sharjvax 3000 IU"] },
  { name: "BCG", types: ["BCG Serum"] },
  { name: "DPT Combi Pedia", types: ["Hexaxim", "Infanrix Hexa", "Pentaxim", "Infanrix IPV+HIB"] },
  { name: "TD Booster", types: ["Adacel", "Boostrix"] },
  { name: "Dengue Kit", types: ["Dengue Test Kit"] },
  { name: "ERIG", types: ["Vinrab"] },
  { name: "Erythropoietin", types: ["Epoetin Alfa 4000 IU (Eposino)"] },
  { name: "Hepatitis A", types: ["Havrix Adult", "Havrix Jr."] },
  { name: "Hepatitis B", types: ["Amvax Adult", "Amvax Pedia", "Euvax B Adult", "Euvax B Pedia", "Genvac Adult", "Genvac Pedia"] },
  { name: "Hepatitis A & B Combi", types: ["Twinrix Adult"] },
  { name: "Hepa B Immunoglobulin", types: ["Hepabig"] },
  { name: "HPV", types: ["Cervarix", "Gardasil", "Gardasil Nano"] },
  { name: "Influenza", types: ["Fluarixtetra", "Influvac Trivalent", "Influvac Tetra", "Vaxigrip Tetra"] },
  { name: "Japanese Encephalitis", types: ["Imojev"] },
  { name: "MMR", types: ["MMR II", "Priorix", "Tresivac"] },
  { name: "Meningococcal", types: ["Menactra", "Nimentrix"] },
  { name: "Measles", types: ["M-VAC"] },
  { name: "Poliomyelitis", types: ["Imovac Polio"] },
  { name: "Pneumococcal", types: ["Pneumovax 23", "Prevenar 13", "Synflorix"] },
  { name: "Rabies", types: ["Abhayrab", "Speeda", "Verorab"] },
  { name: "Rotavirus", types: ["Rotarix", "Rotateq", "Rotasil"] },
  { name: "Shingles", types: ["Zostavac"] },
  { name: "Tetanus Toxoid", types: ["Imatet", "T-VAC"] },
  { name: "Tetanus Immunoglobulin", types: ["Sero-Tet"] },
  { name: "Typhoid", types: ["Typbar", "Typhim VI"] },
  { name: "Varicella", types: ["Varilrix", "Varivax", "Mevacvari"] },
];

function ProductsPage() {
  return (
    <div>
      <section className="bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Products</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            A complete portfolio of trusted brands and advanced medical equipment.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Every product is meticulously vetted for quality, safety, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr] md:items-start">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <img src={brandsImg} alt="Pharmaceutical brands on shelves" width={1280} height={896} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Pill className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Brands</h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Our portfolio includes reliable brands across diverse therapeutic areas. Each brand undergoes
              meticulous vetting to ensure alignment with our values of safety and excellence.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((b) => (
                <article
                  key={b.name}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                >
                  <h3 className="text-base font-bold text-primary-deep">{b.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vaccines */}
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Vaccines</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Comprehensive immunization portfolio</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Meticulously selected vaccines covering viral infections, bacterial diseases, and preventable illnesses — sourced from globally renowned manufacturers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vaccineCategories.map((v) => (
              <article
                key={v.name}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary-deep">
                  {v.name}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {v.types.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment */}
      <section id="equipment" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[2fr_1.2fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Medical Equipment</h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Advanced medical equipment solutions to enhance healthcare accessibility and outcomes —
              from diagnostic tools and patient monitoring systems to surgical equipment and rehabilitation aids.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {equipment.map((e) => (
                <article
                  key={e.name}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                >
                  <h3 className="text-lg font-bold text-primary-deep">{e.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] md:order-last">
            <img src={equipmentImg} alt="Modern medical equipment" width={1280} height={896} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}