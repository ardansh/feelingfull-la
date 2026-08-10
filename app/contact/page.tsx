"use client";

import { useState } from "react";
import { sendForm } from "../lib/forms";

const REASON_LABELS: Record<string, string> = {
  "vendor-donation": "Vendor / Food Donation",
  "food-bank-partnership": "Food Bank Partnership",
  general: "General Inquiry",
  other: "Other",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const reason = String(data.get("reason") ?? "");
    const ok = await sendForm({
      Name: String(data.get("name") ?? ""),
      "Reason for contact": REASON_LABELS[reason] ?? reason,
      Message: String(data.get("message") ?? ""),
      _subject: "New contact message — FeelingFullLA",
    });

    setSubmitting(false);
    if (ok) setSubmitted(true);
    else setError(true);
  }

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
              className="mt-6 inline-block rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-peach"
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

          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-orange/30 bg-orange/10 p-8 text-center">
              <h2 className="text-xl font-bold text-charcoal">
                Message sent!
              </h2>
              <p className="mt-2 text-charcoal/70">
                Thanks for reaching out — we&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              className="space-y-6 rounded-2xl border border-charcoal/10 bg-white p-8"
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
                  placeholder="Your full name or organization"
                  className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-orange focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-semibold text-charcoal"
                >
                  Reason for contact
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-charcoal focus:border-orange focus:outline-none"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="vendor-donation">Vendor / Food Donation</option>
                  <option value="food-bank-partnership">
                    Food Bank Partnership
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-charcoal"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="mt-2 w-full rounded-lg border border-charcoal/15 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-orange focus:outline-none"
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please try again, or email us directly
                  at{" "}
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
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
