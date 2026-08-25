import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | FeelingFullLA",
};

// Leadership: full name + role is fine to publish WITH each person's consent.
const MANAGEMENT = [
  { name: "Your Name", role: "Founder & President" },
  { name: "Team Member", role: "Vice President" },
  { name: "Team Member", role: "Director of Operations" },
  { name: "Team Member", role: "Outreach & Partnerships" },
];

// Volunteers: use first name + last initial, and only with consent.
// For minors, get a parent/guardian's OK before adding them.
const VOLUNTEERS = [
  "Volunteer A.",
  "Volunteer B.",
  "Volunteer C.",
  "Volunteer D.",
  "Volunteer E.",
  "Volunteer F.",
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
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Our Team
          </span>
          <h1 className="mt-6 text-3xl font-bold sm:text-5xl">
            The people behind FeelingFullLA.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            A student-led crew of volunteers and organizers working to rescue
            food and feed our neighbors across Los Angeles.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Management
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MANAGEMENT.map((person) => (
              <div
                key={person.role}
                className="flex flex-col items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/15 text-lg font-bold text-orange">
                  {initials(person.name)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60">{person.role}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold text-charcoal sm:text-3xl">
            Volunteers
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-charcoal/60">
            The heart of FeelingFullLA — thank you to everyone who shows up.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
        </div>
      </section>
    </>
  );
}
