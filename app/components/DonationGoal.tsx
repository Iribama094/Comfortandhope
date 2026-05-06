"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const RAISED = 4_280_000;
const GOAL = 6_000_000;
const CURRENCY = "₦";
const SUPPORTERS = 1247;

function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return n.toString();
}

export default function DonationGoal() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const target = (RAISED / GOAL) * 100;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          // Animate progress bar
          requestAnimationFrame(() => setProgress(target));
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const remaining = GOAL - RAISED;

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div
            ref={ref}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white via-white to-surface p-8 shadow-xl shadow-primary-dark/5 md:p-12"
          >
            {/* Decorative blob */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-green-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Live campaign
                </span>
                <span className="text-muted">May 2026 fundraising goal</span>
              </div>

              <h2 className="font-display mt-5 text-3xl font-medium leading-tight text-foreground md:text-5xl">
                Together we&apos;ve raised{" "}
                <span className="italic text-primary">
                  {CURRENCY}
                  {formatCompact(RAISED)}
                </span>{" "}
                this month
              </h2>

              {/* Progress bar */}
              <div className="mt-10">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-display text-4xl font-semibold text-foreground md:text-5xl">
                      {Math.round(target)}%
                    </p>
                    <p className="mt-1 text-sm text-muted">of monthly goal</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">
                      {CURRENCY}
                      {formatCompact(GOAL)} goal
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {CURRENCY}
                      {formatCompact(remaining)} to go
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface">
                  <div
                    className="relative h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-[width] duration-[1500ms] ease-out"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 animate-marquee bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:200%_100%]" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>
                      <span className="font-semibold text-foreground">
                        {SUPPORTERS.toLocaleString()}
                      </span>{" "}
                      supporters this month
                    </span>
                  </div>
                  <Link
                    href="/donations"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
                  >
                    Add to the total
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
