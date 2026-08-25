import Link from "next/link";
import Image from "next/image";
import AnimatedStat from "./components/AnimatedStat";
import { INTEREST_FORM_URL } from "./components/GoogleFormEmbed";

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
      <section className="brand-gradient text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Highschool-run nonprofit · Los Angeles
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
            Filling plates.{" "}
            <span className="text-charcoal">Reducing waste.</span> Building
            community.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">
            FeelingFullLA rescues surplus food and connects it with
            neighbors across Los Angeles who need it most.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
            >
              Volunteer With Us
            </a>
            <Link
              href="/mission"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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

        <div className="border-t border-white/20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3">
            <AnimatedStat target={100000} suffix="+" label="Lbs. of Food Donated" />
            <AnimatedStat target={6} suffix="+" label="Community Partners" />
            <AnimatedStat target={50} suffix="+" label="Volunteers" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Image
            src="/logo.png"
            alt="FeelingFullLA logo"
            width={128}
            height={128}
            className="mx-auto mb-8 h-28 w-28 rounded-3xl shadow-lg"
          />
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
            Every meal starts with someone who cares.
          </h2>
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
