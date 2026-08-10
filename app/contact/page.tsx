import GoogleFormEmbed from "../components/GoogleFormEmbed";

export default function ContactPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="inline-block rounded-full bg-orange/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange">
            Contact
          </span>
          <h1 className="mt-6 text-3xl font-bold text-charcoal sm:text-5xl">
            For vendors &amp; food banks.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
            Reach out if you&apos;d like to donate surplus food, partner on a
            distribution, or learn more.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="rounded-2xl bg-charcoal p-8 text-cream">
            <h2 className="text-lg font-bold">Reach us directly</h2>
            <p className="mt-3 text-sm text-cream/70">
              Vendors and food banks with surplus food to donate — email us
              and we&apos;ll coordinate pickup.
            </p>
            <a
              href="mailto:feelingfulllosangeles@gmail.com"
              className="mt-6 inline-block rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-peach"
            >
              feelingfulllosangeles@gmail.com
            </a>
            <p className="mt-6 text-sm text-cream/70">
              Or follow along and message us on Instagram{" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange"
              >
                @feelingfullla
              </a>
              .
            </p>
          </div>

          <GoogleFormEmbed title="FeelingFullLA contact form" />
        </div>
      </div>
    </section>
  );
}
