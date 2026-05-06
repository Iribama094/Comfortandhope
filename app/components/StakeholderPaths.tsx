import Link from "next/link";
import { Heart, Briefcase, Users, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const paths = [
  {
    icon: Heart,
    audience: "Individual donor",
    title: "Give once, or sustain change monthly",
    description:
      "Direct support for the program of your choice. Tax-deductible. As little as ₦5,000.",
    href: "/donations",
    cta: "Make a donation",
    accent: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    icon: Briefcase,
    audience: "Corporate partner",
    title: "Build CSR that actually moves a needle",
    description:
      "Strategic, programmatic, and in-kind partnerships with measurable impact reporting.",
    href: "/partner",
    cta: "Explore partnership",
    accent: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    audience: "Volunteer",
    title: "Give your time to a community that needs it",
    description:
      "Join our 600-strong volunteer network — field, professional, and online opportunities.",
    href: "/volunteer",
    cta: "Become a volunteer",
    accent: "from-accent/15 to-accent/5",
    iconBg: "bg-accent/20 text-accent-dark",
  },
];

export default function StakeholderPaths() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
              How You Can Help
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Find your{" "}
              <span className="italic text-primary">place</span> in our work
            </h2>
            <p className="mt-5 text-body">
              Whoever you are — donor, partner, or volunteer — there&apos;s a
              way to help that fits your time and resources.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.audience} delay={(i + 1) as 1 | 2 | 3}>
              <Link
                href={p.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${p.accent} p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${p.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <p.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">
                  I&apos;m an
                </p>
                <p className="mt-1 font-display text-2xl font-medium text-foreground">
                  {p.audience}
                </p>
                <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {p.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
