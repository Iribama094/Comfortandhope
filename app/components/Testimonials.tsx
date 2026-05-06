"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Comfort & Hope gave me the tools I needed to start my own business. Now I can support my children and send them to school. I have my dignity back.",
    name: "Sarah Amara",
    role: "Beneficiary, Skills Training Program",
    image: "/testimonials/Sarah.png",
  },
  {
    quote:
      "The clean water project changed everything for our village. Our children are healthier, and the women no longer walk miles for water.",
    name: "James Okonkwo",
    role: "Community Leader",
    image: null,
  },
  {
    quote:
      "Thanks to the scholarship program, I was the first girl in my family to attend university. Education truly transforms lives.",
    name: "Grace Mensah",
    role: "Scholarship Recipient",
    image: null,
  },
];

const INTERVAL_MS = 5000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const paused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 250);
  }, []);

  const prev = () => goTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = useCallback(
    () => goTo(current === testimonials.length - 1 ? 0 : current + 1),
    [current, goTo]
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (!paused.current) next();
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  const t = testimonials[current];

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
          Testimonials
        </p>
        <h2 className="font-display mt-3 text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Stories of <span className="italic text-primary">change</span>
        </h2>

        <div
          className="mt-12"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
        >
          <Quote className="mx-auto h-10 w-10 text-primary/20" />

          <div
            className="mt-6 transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <blockquote className="font-display text-2xl font-normal leading-relaxed text-foreground md:text-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-8">
              {t.image ? (
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="mx-auto h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
              )}
              <p className="mt-3 text-base font-semibold text-foreground">
                {t.name}
              </p>
              <p className="text-sm text-primary">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-body transition-colors hover:bg-surface"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-body transition-colors hover:bg-surface"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
