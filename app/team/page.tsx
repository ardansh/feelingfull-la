import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team & Alumni | FeelingFullLA",
};

// Current management — name + role, listed with consent.
const MANAGEMENT = [
  { name: "Shaylan Chadha", role: "Co-Founder" },
  { name: "Nate Berman", role: "Co-Director of Operations" },
  { name: "Ardan Shendrikar", role: "General Manager" },
  { name: "Lajus Collins", role: "General Manager" },
  { name: "Todd Valkov", role: "Co-Head of Outreach" },
  { name: "Martha Valkov", role: "Senior Volunteer" },
  { name: "Lorenz Collins", role: "Senior Volunteer" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <section className="brand-gradient text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <h1 className="text-3xl font-bold sm:text-5xl">
            The people behind FeelingFullLA.
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Current Management
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MANAGEMENT.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange/15 text-base font-bold text-orange">
                  {initials(person.name)}
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">{person.name}</h3>
                  <p className="mt-0.5 text-sm text-charcoal/60">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
