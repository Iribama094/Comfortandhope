import Link from "next/link";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const updates = [
  {
    date: "12 Apr 2026",
    location: "Kaduna",
    title: "40 new scholarships awarded to girls",
    excerpt:
      "Our Girl Child Education program expanded to three new schools this month, reaching 40 additional students with full-year scholarships.",
    tag: "Education",
  },
  {
    date: "03 Apr 2026",
    location: "Delta State",
    title: "Emergency relief reaches 200 families after floods",
    excerpt:
      "Food, clean water, and medical supplies distributed in partnership with local councils within 48 hours of the flooding.",
    tag: "Relief",
  },
  {
    date: "28 Mar 2026",
    location: "Benue",
    title: "New borehole commissioned in Otukpo village",
    excerpt:
      "Serving 1,200 residents with safe drinking water — our 14th well this year.",
    tag: "Clean Water",
  },
];

export default function LatestUpdate() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                Impact in Motion
              </p>
              <h2 className="font-display mt-2 text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Field updates from the <span className="italic text-primary">last 30 days</span>
              </h2>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              All updates
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {updates.map((u, i) => (
            <Reveal key={u.title} delay={(i + 1) as 1 | 2 | 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/15 to-accent/15" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {u.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {u.location}
                    </span>
                  </div>
                  <span className="mt-3 inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {u.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {u.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {u.excerpt}
                  </p>
                  <Link
                    href="/news"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
