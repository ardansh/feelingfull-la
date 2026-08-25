import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team & Alumni | FeelingFullLA",
};

// Management / leadership (past and present) — name + role, listed with consent.
const MANAGEMENT = [
  { name: "Shaylan Chadha", role: "Founder" },
  { name: "Nate Berman", role: "General Manager (2022–2024)" },
  { name: "Ardan Shendrikar", role: "General Manager (2024–2025)" },
  { name: "Martha Valkov", role: "General Manager (2024–2025)" },
  { name: "Lajus Collins", role: "General Manager (2025–current)" },
  { name: "Todd Valkov", role: "Head of Outreach (2022–2024)" },
];

// Senior volunteers — listed with consent, first-name alphabetical order.
const SENIOR_VOLUNTEERS = [
  "Ardan Shendrikar",
  "Eric Cacavas",
  "Henry Lawrence",
  "Josh Huang",
  "Kai Pringle",
  "Lajus Collins",
  "Lorenz Collins",
  "Martha Valkov",
  "Noah Benharash",
  "Rama Karimi",
  "Todd Valkov",
  "Zachary Amster",
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
            Management
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

          <h2 className="mt-16 text-2xl font-bold text-charcoal sm:text-3xl">
            Senior Volunteers
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {SENIOR_VOLUNTEERS.map((name) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-white px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/15 text-xs font-bold text-orange">
                  {initials(name)}
                </div>
                <span className="text-sm font-medium text-charcoal">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/volunteers"
              className="inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-peach"
            >
              See all volunteers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
