"use client";

import { useState } from "react";
import { sendForm } from "../lib/forms";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const ok = await sendForm({
      Name: String(data.get("name") ?? ""),
      "Why they want to volunteer": String(data.get("reason") ?? ""),
      _subject: "New volunteer signup — FeelingFullLA",
    });

    setSubmitting(false);
    if (ok) setSubmitted(true);
    else setError(true);
  }

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
            onSubmit={handleSubmit}
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

            {error && (
              <p className="text-sm font-medium text-red-600">
                Something went wrong. Please try again, or email us directly at{" "}
                <a
                  href="mailto:feelingfulllosangeles@gmail.com"
                  className="underline"
                >
                  feelingfulllosangeles@gmail.com
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-peach disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
