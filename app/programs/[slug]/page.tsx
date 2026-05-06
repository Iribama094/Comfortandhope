import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin, ArrowRight, Check, Heart, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { programs, getProgram } from "../../components/programsData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: program.title,
    description: program.description,
    openGraph: {
      title: `${program.title} — Comfort & Hope Foundation`,
      description: program.description,
    },
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-dark">
          <div className="absolute inset-0">
            <Image
              src={program.heroImage}
              alt={program.title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/programs" className="hover:text-white">Programs</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{program.title}</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                Our Work
              </span>
              <h1 className="font-display mt-5 text-5xl font-medium leading-[1.05] text-white md:text-6xl lg:text-7xl">
                {program.title}
              </h1>
              <p className="font-display mt-6 max-w-2xl text-xl italic text-accent md:text-2xl">
                {program.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Big stat band */}
        <section className="border-y border-border bg-white px-6 py-12">
          <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-3">
            <div>
              <p className="font-display text-6xl font-semibold leading-none text-primary md:text-7xl">
                {program.stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted">
                {program.stat.label}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-body">
                {program.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Highlights + locations */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                What We Do
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
                The pillars of this program
              </h2>
              <ul className="mt-8 space-y-4">
                {program.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base leading-relaxed text-body">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                Where We Work
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
                Active in {program.locations.length} states
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {program.locations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{loc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-primary-dark px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-5xl">
              Help us scale{" "}
              <span className="italic text-accent">{program.title.toLowerCase()}</span>
            </h2>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                href="/donations"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-dark transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
              >
                <Heart className="h-4 w-4" />
                Support this program
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Users className="h-4 w-4" />
                Volunteer
              </Link>
            </div>
          </div>
        </section>

        {/* Other programs */}
        <section className="bg-surface px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
              Explore More
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium text-foreground md:text-4xl">
              Other programs
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted line-clamp-2">{p.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
