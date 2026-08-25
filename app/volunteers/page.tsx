import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Volunteers | FeelingFullLA",
};

// Every volunteer — listed with consent, first-name alphabetical order.
const VOLUNTEERS = [
  "Aditya Sharma",
  "Ansar Sherkhanov",
  "Ardan Shendrikar",
  "Atticus Coluzzi",
  "Camila Stauber",
  "Darian Bagheri",
  "Eric Cacavas",
  "Ethan Khanian",
  "Harrison Schumacher",
  "Henry Lawrence",
  "Jackson Ford",
  "Josh Huang",
  "Kai Pringle",
  "Kiarash Vazirnezami",
  "Lajus Collins",
  "Lorenz Collins",
  "Martha Valkov",
  "Nate Berman",
  "Noah Benharash",
  "Rama Karimi",
  "Rocco Fama",
  "Ronen Hayempour",
  "Shaylan Chadha",
  "Shyan Chadha",
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

export default function VolunteersPage() {
  return (
    <>
      <section className="brand-gradient text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <h1 className="text-3xl font-bold sm:text-5xl">All Volunteers</h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {VOLUNTEERS.map((name) => (
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
              href="/team"
              className="text-sm font-semibold text-orange transition-colors hover:text-peach"
            >
              ← Back to the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
