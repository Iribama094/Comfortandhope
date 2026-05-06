"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Heart, Globe, CalendarDays, TrendingUp } from "lucide-react";

interface Stat {
  icon: typeof Users;
  target: number;
  suffix: string;
  label: string;
  trend?: { value: string; period: string };
}

const stats: Stat[] = [
  {
    icon: Users,
    target: 5000,
    suffix: "+",
    label: "Children Helped",
    trend: { value: "+1,200", period: "this year" },
  },
  {
    icon: Heart,
    target: 1200,
    suffix: "+",
    label: "Families Supported",
    trend: { value: "+340", period: "this year" },
  },
  {
    icon: Globe,
    target: 30,
    suffix: "+",
    label: "Communities Served",
    trend: { value: "+8", period: "this year" },
  },
  {
    icon: CalendarDays,
    target: 7,
    suffix: "",
    label: "Years of Impact",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              if (interval) clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [target]);

  return (
    <p ref={ref} className="font-display text-5xl font-semibold leading-none text-white md:text-6xl">
      {count.toLocaleString()}
      {suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-primary-dark px-6 py-20 md:py-24">
      {/* Decorative top wave */}
      <div className="absolute inset-x-0 -top-px">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path
            d="M0 40V20C240 0 480 0 720 20C960 40 1200 40 1440 20V40H0Z"
            fill="#1F3A2B"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="mt-5">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium text-white/85">{stat.label}</p>
              {stat.trend && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-400">
                  <TrendingUp className="h-3 w-3" />
                  {stat.trend.value}
                  <span className="font-normal text-green-400/80">
                    {stat.trend.period}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
