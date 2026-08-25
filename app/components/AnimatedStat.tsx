"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export default function AnimatedStat({
  target,
  suffix = "",
  label,
  duration = 1500,
}: AnimatedStatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-orange sm:text-5xl">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-charcoal/70 sm:text-base">
        {label}
      </p>
    </div>
  );
}
