import Link from "next/link";
import Image from "next/image";
import AnimatedStat from "./components/AnimatedStat";

const GALLERY = [
  { src: "/gallery-1.png", alt: "FeelingFullLA volunteers with awards at Upward Bound House" },
  { src: "/gallery-2.png", alt: "FeelingFullLA team rescuing produce at a local farmers market" },
  { src: "/gallery-3.png", alt: "FeelingFullLA volunteers at a community event" },
  { src: "/gallery-4.png", alt: "FeelingFullLA food rescue in action" },
  { src: "/gallery-5.png", alt: "FeelingFullLA volunteers distributing food" },
  { src: "/gallery-6.png", alt: "FeelingFullLA community partners" },
  { src: "/gallery-7.png", alt: "FeelingFullLA team out in the community" },
];

export default function Home() {
  return (
    <>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <span className="inline-block rounded-full bg-orange/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange">
            Highschool-run nonprofit · Los Angeles
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
            Filling plates.{" "}
            <span className="text-orange">Reducing waste.</span> Building
            community.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            FeelingFullLA rescues surplus food and connects it with
            neighbors across Los Angeles who need it most — placeholder copy,
            swap in your own story here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/volunteer"
              className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-peach"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/mission"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-orange hover:text-orange"
            >
              Our Mission
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative aspect-square overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-cream/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
            <AnimatedStat target={100000} suffix="+" label="Lbs. of Food Donated" />
            <AnimatedStat target={383} suffix="+" label="Instagram Followers" />
            <AnimatedStat target={6} label="Community Partners" />
            <AnimatedStat target={300} suffix="+" label="Volunteers" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
            Every meal starts with someone who cares.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">
            Placeholder text — share a short story about a recent food
            rescue, donation drive, or distribution event here.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-orange"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}
