import PartnerLogo from "../components/PartnerLogo";

const PARTNERS = [
  { name: "Nourish LA", initials: "NL", logo: "/partners/nourish-la.png" },
  { name: "St. Mark's Parish", initials: "SM", logo: "/partners/st-marks.png" },
  {
    name: "Westside Food Bank",
    initials: "WF",
    logo: "/partners/westside-food-bank.png",
  },
  {
    name: "UCLA CPO Food Closet",
    initials: "UC",
    logo: "/partners/cpo-food-closet.png",
  },
  {
    name: "St. Joseph Center",
    initials: "SJ",
    logo: "/partners/st-joseph-center.png",
  },
  {
    name: "Upward Bound House",
    initials: "UB",
    logo: "/partners/upward-bound-house.png",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="brand-gradient text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-snug sm:text-5xl">
            FeelingFullLA works alongside local food banks, parishes, and
            student organizations to get food where it needs to go.
          </h1>
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
                <div className="flex h-20 items-center justify-center">
                  <PartnerLogo
                    src={partner.logo}
                    name={partner.name}
                    initials={partner.initials}
                  />
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
