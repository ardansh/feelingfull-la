"use client";

import { useState } from "react";

// Shows a partner's logo, gracefully falling back to an initials badge if the
// image file isn't present yet.
export default function PartnerLogo({
  src,
  name,
  initials,
}: {
  src: string;
  name: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/15 text-lg font-bold text-orange">
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      className="max-h-20 max-w-[180px] object-contain"
    />
  );
}
