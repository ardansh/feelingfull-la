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
          <blockquote className="text-2xl font-semibold leading-relaxed sm:text-4xl">
            Reducing food waste, one drop-off at a time.
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
        </div>
      </section>
    </>
  );
}
