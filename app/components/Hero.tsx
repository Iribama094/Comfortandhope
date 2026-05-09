"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Users, ArrowDown } from "lucide-react";

interface Slide {
  image: string;
  alt: string;
  lead: string;
  accent: string;
}

// Rotating image + quote pairings.
// Replace the Unsplash URLs with your own program photography when available.
const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?auto=format&fit=crop&w=2400&q=80",
    alt: "Children in a Nigerian classroom raising their hands",
    lead: "Where there is life,",
    accent: "there is hope",
  },
  {
    image:
      "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=2400&q=80",
    alt: "Children of an African community sharing a moment of joy",
    lead: "We rise by",
    accent: "lifting others",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617056239820-8ce90ba48193?auto=format&fit=crop&w=2400&q=80",
    alt: "A young girl smiling on her way to school",
    lead: "Small actions,",
    accent: "lasting change",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2400&q=80",
    alt: "African children gathered together",
    lead: "Hope is",
    accent: "a verb",
  },
];

const ROTATE_MS = 11000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary-dark pb-28 md:pb-32">
      {/* Crossfading background images */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <div className="absolute inset-0 animate-ken-burns">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
                sizes="100vw"
              />
            </div>
          </div>
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/65 to-primary-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-primary-dark/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent,rgba(31,58,43,0.4))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md">
            <Heart className="h-3 w-3 fill-accent" />
            Comfort & Hope Foundation
          </span>

          {/* Rotating quote — stacked absolutely so nothing below moves */}
          <div className="relative mt-6">
            {/* Invisible spacer using the longest quote — locks the height */}
            <h1
              aria-hidden="true"
              className="font-display invisible text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Where there is life,
              <br />
              there is hope
            </h1>

            {/* Stacked quotes (only one visible at a time) */}
            <div className="absolute inset-0">
              {slides.map((slide, i) => (
                <h1
                  key={i}
                  aria-hidden={i !== index}
                  className={`font-display absolute inset-0 text-5xl font-medium leading-[1.05] tracking-tight text-white transition-opacity duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-6xl lg:text-7xl ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.lead}
                  <br />
                  <span className="relative italic text-accent">
                    {slide.accent}
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6C40 2 80 2 120 4C160 6 180 4 198 2"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                    </svg>
                  </span>
                </h1>
              ))}
            </div>
          </div>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Every child deserves the chance to dream. Every family deserves
            dignity. Join us in bringing comfort and hope to communities across
            Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/donations"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/25 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/45"
            >
              <Heart className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
              Donate Now
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/volunteer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/15"
            >
              <Users className="h-4 w-4" />
              Become a Volunteer
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/75">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Registered Nigerian nonprofit · Trusted by 5,000+ supporters
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="mt-16 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-10 bg-accent"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
