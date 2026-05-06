import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { programs } from "./programsData";

export default function Programs() {
  const [featured, ...rest] = programs;

  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                Our Work
              </p>
              <h2 className="font-display mt-3 text-4xl font-medium leading-[1.1] text-foreground md:text-5xl">
                Four programs.{" "}
                <span className="italic text-primary">One mission.</span>
              </h2>
            </div>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View all programs
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Asymmetric grid: 1 large featured + 3 smaller */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:grid-rows-3">
          {/* Featured (spans 3 cols, 3 rows) */}
          <Reveal className="lg:col-span-3 lg:row-span-3">
            <Link
              href={`/programs/${featured.slug}`}
              className="group relative block h-full min-h-[420px] overflow-hidden rounded-2xl"
            >
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-dark">
                  Featured Program
                </span>
                <h3 className="font-display mt-4 text-3xl font-medium leading-tight text-white md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
                  {featured.tagline}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <div className="text-white">
                    <p className="font-display text-2xl font-semibold">
                      {featured.stat.value}
                    </p>
                    <p className="text-xs text-white/70">{featured.stat.label}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1">
                    Explore program
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* 3 smaller cards stacked */}
          {rest.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i + 1) as 1 | 2 | 3}
              className="lg:col-span-2"
            >
              <Link
                href={`/programs/${p.slug}`}
                className="group flex h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative aspect-square w-32 shrink-0 overflow-hidden md:w-40">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="160px"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} mix-blend-multiply`} />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5">
                  <h3 className="font-display text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted line-clamp-2">
                    {p.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                    <span className="font-bold text-primary">{p.stat.value}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {p.locations.length} states
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
