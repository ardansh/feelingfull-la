"use client";

import { useState } from "react";

const OCCUPATIONS = [
  "Student",
  "Employed",
  "Unemployed",
  "Retired",
  "Other",
];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

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
            Placeholder text — tell us a bit about yourself and we&apos;ll
            follow up with upcoming food rescue and distribution events.
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 rounded-2xl border border-orange/30 bg-orange/10 p-8 text-center">
            <h2 className="text-xl font-bold text-charcoal">
              Thank you for signing up!
            </h2>
            <p className="mt-2 text-charcoal/70">
              We&apos;ve received your info and will be in touch soon.
            </p>
          </div>
        ) : (
          <form
            className="mt-12 space-y-6 rounded-2xl border border-charcoal/10 bg-white p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-charcoal"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-orange focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="occupation"
                className="block text-sm font-semibold text-charcoal"
              >
                Occupation
              </label>
              <select
                id="occupation"
                name="occupation"
                required
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-charcoal focus:border-orange focus:outline-none"
              >
                <option value="" disabled>
                  Select one
                </option>
                {OCCUPATIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-semibold text-charcoal"
              >
                Why do you want to volunteer at FeelingFullLA?
              </label>
              <textarea
                id="reason"
                name="reason"
                required
                rows={5}
                placeholder="Tell us a bit about why you're interested..."
                className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-orange focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-peach"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
