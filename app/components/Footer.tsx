import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-cream">
            Feeling<span className="text-orange">Full</span>LA
          </p>
          <p className="mt-2 max-w-xs text-sm">
            A highschool-run nonprofit reducing food waste and fighting
            hunger across Los Angeles.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-cream">Connect</span>
          <a
            href="mailto:feelingfulllosangeles@gmail.com"
            className="transition-colors hover:text-orange"
          >
            feelingfulllosangeles@gmail.com
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-orange"
          >
            @feelingfullla on Instagram
          </a>
          <span>feelingfullla.org</span>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-cream">Explore</span>
          <Link href="/mission" className="transition-colors hover:text-orange">
            Our Mission
          </Link>
          <Link href="/partners" className="transition-colors hover:text-orange">
            Our Partners
          </Link>
          <Link href="/volunteer" className="transition-colors hover:text-orange">
            Volunteer
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs">
        © {new Date().getFullYear()} FeelingFullLA. All rights reserved.
      </div>
    </footer>
  );
}
