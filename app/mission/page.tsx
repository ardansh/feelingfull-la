type IconName = "leaf" | "users" | "handshake" | "package";

const PILLARS = [
  {
    title: "Reduce Waste",
    icon: "leaf" as IconName,
    description:
      "We rescue surplus, still-good food from grocers, farms, and restaurants before it ends up in a landfill.",
    statIcon: "package" as IconName,
    stats: ["100k lbs donated"],
  },
  {
    title: "Fight Hunger",
    icon: "users" as IconName,
    description:
      "We get that food into the hands of individuals and families across Los Angeles facing food insecurity.",
    statIcon: "users" as IconName,
    stats: ["3,000 families fed"],
  },
  {
    title: "Build Community",
    icon: "handshake" as IconName,
    description:
      "We bring students, volunteers, and local organizations together around a shared cause.",
    statIcon: "users" as IconName,
    stats: ["8 partner organizations", "50+ volunteers"],
  },
];

function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "leaf":
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
          <path d="m18 15-2-2" />
          <path d="m15 18-2-2" />
        </svg>
      );
    case "package":
      return (
        <svg {...common}>
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
  }
}

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
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                    <Icon name={pillar.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold text-charcoal">
                    {pillar.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-charcoal/70">
                  {pillar.description}
                </p>

                <div className="mt-6 border-t border-charcoal/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/50">
                    Key Statistics
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                      <Icon name={pillar.statIcon} className="h-5 w-5" />
                    </span>
                    <div className="border-l border-charcoal/15 pl-4">
                      {pillar.stats.map((stat) => (
                        <p
                          key={stat}
                          className="text-lg font-bold leading-snug text-orange"
                        >
                          {stat}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
