import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SG Global Healthcare Corp" },
      { name: "description", content: "Learn about SG Global Healthcare Corp — our mission, vision, and core values driving quality healthcare distribution." },
      { property: "og:title", content: "About SG Global Healthcare Corp" },
      { property: "og:description", content: "Our mission, vision, and core values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Revolutionizing healthcare accessibility — one community at a time.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            SG Global Healthcare Corp is a rapidly expanding pharmaceutical and medical supply industry
            entity that operates as a dedicated wholesale distributor. With deep experience in
            pharmaceutical sales and marketing, we are committed to providing medicines of exceptional
            quality at affordable prices for every Filipino.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <img src={aboutImg} alt="Pharmaceutical vials" width={1280} height={896} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Company Overview</h2>
            <p className="mt-5 text-muted-foreground">
              Our portfolio specializes in cardiology, nephrology, and internal medicine, sourced from
              reputable companies known for high manufacturing and importation standards. We prioritize
              quality and affordability so Filipinos can access the medicines they need to lead healthier
              lives.
            </p>
            <p className="mt-4 text-muted-foreground">
              At SG Global Healthcare, we take pride in our unwavering commitment to the health and
              well-being of every customer we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Offerings</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What drives us forward</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Mission",
                body: "To ensure every Filipino can access essential medicines for a healthier tomorrow — enhancing healthcare accessibility by delivering high-quality and affordable pharmaceutical solutions.",
              },
              {
                icon: Eye,
                title: "Vision",
                body: "To become the leading distribution company in the Philippines, renowned for our unwavering commitment to quality, affordability, and innovation — driving positive change in healthcare outcomes nationwide.",
              },
              {
                icon: Heart,
                title: "Core Values",
                body: "Quality assurance, integrity, customer focus, innovation, and social responsibility. We prioritize safety, ethics, tailored solutions, progress, and community welfare.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-primary-deep">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}