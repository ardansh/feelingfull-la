import Link from "next/link";
import Image from "next/image";
import AnimatedStat from "./components/AnimatedStat";
import Gallery from "./components/Gallery";

const GALLERY = [
  { src: "/gallery-1.png", alt: "FeelingFullLA volunteers with awards at Upward Bound House" },
  { src: "/gallery-2.png", alt: "FeelingFullLA team rescuing produce at a local farmers market" },
  { src: "/gallery-3.png", alt: "FeelingFullLA volunteers at a community event" },
  { src: "/gallery-4.png", alt: "FeelingFullLA food rescue in action" },
  { src: "/gallery-5.png", alt: "FeelingFullLA volunteers distributing food" },
  { src: "/gallery-6.png", alt: "FeelingFullLA community partners" },
  { src: "/gallery-7.png", alt: "FeelingFullLA team out in the community" },
  { src: "/gallery-8.png", alt: "FeelingFullLA volunteers with rescued greens at a FoodCycle LA pickup" },
  { src: "/gallery-9.png", alt: "A crate of rescued plums" },
];

export default function Home() {
  return (
    <>
      <section className="bg-cream text-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <h1 className="text-2xl font-bold leading-tight text-orange sm:text-3xl lg:text-4xl">
            Filling plates. Reducing waste. Building community.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-charcoal/70">
            We&apos;re a local charity that rescues surplus food and gets it to
            neighbors across Los Angeles who need it most.
          </p>
          <div className="mt-8">
            <Link
              href="/mission"
              className="inline-block rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-orange"
            >
              Our Mission
            </Link>
          </div>

          <Gallery photos={GALLERY} />
        </div>

        <div className="border-t border-charcoal/10">
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
            className="mx-auto mb-10 h-28 w-28 rounded-3xl shadow-lg"
          />
          <Link
            href="/contact"
            className="inline-block rounded-full bg-charcoal px-12 py-6 text-lg font-semibold text-cream transition-colors hover:bg-orange sm:text-xl"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}
