"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/partners", label: "Partners" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Feeling<span className="text-orange">Full</span>LA
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-orange ${
                    active ? "text-orange" : "text-cream/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/volunteer"
          className="hidden rounded-full bg-orange px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-peach md:inline-block"
        >
          Get Involved
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-cream/10 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    active ? "text-orange" : "text-cream/80 hover:text-orange"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
