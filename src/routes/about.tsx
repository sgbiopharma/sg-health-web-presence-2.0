import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SG Global Healthcare" },
      { name: "description", content: "Learn about SG Global Healthcare — our mission, vision, and core values driving quality healthcare distribution." },
      { property: "og:title", content: "About SG Global Healthcare" },
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
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">OUR STORY</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.15] tracking-tight md:text-5xl">
            Revolutionizing healthcare accessibility,
            <span className="block">one community at a time.</span>
          </h1>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Founded in 2020, SG Biopharma Pharmaceutical Products Trading (SG Biopharma) was built on
            the belief that healthcare institutions deserve a distribution partner they can truly rely
            on. Over the years, we have built long-term relationships with government agencies,
            hospitals, and private institutions across the Philippines. Our work is grounded in trust,
            consistency, and an uncompromising standard of quality.
          </p>
        </div>
      </section>

      {/* Video strip */}
      <section className="mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-6">
        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/jt3Cr4Tj5fY?autoplay=1&mute=1&loop=1&playlist=jt3Cr4Tj5fY&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
              title="SG Biopharma"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder={0}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <img src={aboutImg} alt="Pharmaceutical vials" width={1280} height={896} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our offerings</h2>
            <p className="mt-5 text-muted-foreground">
              SG Biopharma provides a comprehensive range of pharmaceutical solutions to healthcare
              institutions across the Philippines.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our flagship product, SG Care, is an FDA-approved line of diagnostic tubes and vials
              developed and manufactured in-house. It is trusted by hospitals and healthcare
              institutions across the Philippines for its precision, safety, and reliability.
            </p>
            <p className="mt-4 text-muted-foreground">
              We distribute a curated selection of pharmaceutical brands specializing in cardiology,
              nephrology, and internal medicine, sourced from reputable companies known for high
              manufacturing and importation standards. We also carry a comprehensive vaccine portfolio
              and a range of advanced medical equipment to serve the full spectrum of institutional
              healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission · Vision · Core Values */}
      <section className="relative overflow-hidden bg-secondary/60 py-14 md:py-16">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[image:var(--gradient-primary)] opacity-15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">What drives us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Mission, vision, and core values</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Mission",
                body: "To revolutionize healthcare accessibility by delivering high-quality and affordable pharmaceutical solutions, ensuring that every Filipino has the means to access essential medicines for a healthier tomorrow.",
              },
              {
                icon: Eye,
                title: "Vision",
                body: "To emerge as the leading distribution company in the Philippines, renowned for our unwavering commitment to quality, affordability, and innovation, and to drive positive change in healthcare outcomes nationwide.",
              },
              {
                icon: Heart,
                title: "Core values",
                body: "Our values are quality assurance, integrity, customer focus, innovation, and social responsibility. We prioritize safety, ethics, tailored solutions, progress, and community welfare.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-10 blur-2xl transition group-hover:opacity-25" />
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