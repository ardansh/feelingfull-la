const PARTNERS = [
  { name: "Nourish LA", initials: "NL" },
  { name: "St. Mark's Parish", initials: "SM" },
  { name: "Westside Food Bank", initials: "WF" },
  { name: "Upward Bound", initials: "UB" },
  { name: "UCLA Food Pantry", initials: "UF" },
  { name: "St. Joseph's", initials: "SJ" },
];

export default function PartnersPage() {
  return (
    <>
      <section className="brand-gradient text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Our Partners
          </span>
          <h1 className="mt-6 text-3xl font-bold sm:text-5xl">
            We don&apos;t do this alone.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            FeelingFullLA works alongside local food banks, parishes, and
            student organizations to get food where it needs to go.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/15 text-lg font-bold text-orange">
                  {partner.initials}
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
