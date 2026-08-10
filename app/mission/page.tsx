import Link from "next/link";

const PILLARS = [
  {
    title: "Reduce Waste",
    description:
      "We rescue surplus, still-good food from grocers, farms, and restaurants before it ends up in a landfill.",
  },
  {
    title: "Fight Hunger",
    description:
      "We get that food into the hands of individuals and families across Los Angeles facing food insecurity.",
  },
  {
    title: "Build Community",
    description:
      "We bring students, volunteers, and local organizations together around a shared cause.",
  },
];

export default function MissionPage() {
  return (
    <>
      <section className="brand-gradient text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Our Mission
          </span>
          <blockquote className="mt-8 text-2xl font-semibold leading-relaxed sm:text-4xl">
            &ldquo;Charity committed to reducing food waste in the Los
            Angeles area and beyond, devoted to mitigating hunger and
            helping those in need.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-charcoal/10 bg-white p-8"
              >
                <h3 className="text-xl font-bold text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
              Want to be part of the work?
            </h2>
            <Link
              href="/volunteer"
              className="mt-6 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-peach"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
