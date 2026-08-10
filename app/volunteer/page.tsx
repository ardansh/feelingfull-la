import GoogleFormEmbed from "../components/GoogleFormEmbed";

export default function VolunteerPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="inline-block rounded-full bg-orange/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange">
            Volunteer
          </span>
          <h1 className="mt-6 text-3xl font-bold text-charcoal sm:text-5xl">
            Join the FeelingFullLA team.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Tell us a bit about yourself and we&apos;ll follow up with
            upcoming food rescue and distribution events.
          </p>
        </div>

        <div className="mt-12">
          <GoogleFormEmbed title="FeelingFullLA volunteer interest form" />
        </div>
      </div>
    </section>
  );
}
