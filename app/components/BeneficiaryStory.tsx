import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function BeneficiaryStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-white to-surface px-6 py-20 md:py-28">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80"
                alt="Amara, a scholarship recipient"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-white p-5 shadow-xl md:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                Lives Changed
              </p>
              <p className="mt-1 text-3xl font-bold text-primary">5,000+</p>
              <p className="text-xs text-muted">children since 2019</p>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <Reveal delay={1}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
              A Story of Hope
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              &ldquo;I used to walk two hours to fetch water. Now I walk ten
              minutes to school.&rdquo;
            </h2>

            <div className="relative mt-6 rounded-xl border-l-4 border-accent bg-white p-6 shadow-sm">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-accent p-1.5 text-primary-dark" />
              <p className="text-body leading-relaxed">
                When Comfort & Hope built a well in our village, it didn&apos;t
                just give us water — it gave me time. Time to study. Time to
                dream. Last year I was the first girl from my community to pass
                the national scholarship exam. I want to be a doctor and come
                back home to serve.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                — Amara, 14
                <span className="ml-2 font-normal text-muted">
                  Benue State
                </span>
              </p>
            </div>

            <Link
              href="/gallery"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Read more stories
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
