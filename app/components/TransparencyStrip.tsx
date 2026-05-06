import { Shield, FileText, Users, PiggyBank } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const items = [
  {
    icon: PiggyBank,
    value: "87¢",
    label: "Of every $1 goes directly to programs",
  },
  {
    icon: Shield,
    value: "Registered",
    label: "Nigerian nonprofit, fully compliant",
    href: "/about/compliance",
  },
  {
    icon: FileText,
    value: "Annual Report",
    label: "Audited financials, published yearly",
    href: "/about/annual-report",
  },
  {
    icon: Users,
    value: "100%",
    label: "Volunteer board — no compensation",
    href: "/about/board",
  },
];

export default function TransparencyStrip() {
  return (
    <section className="relative -mt-32 px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        {/* Lifted card with shadow — pulls up into the hero for a premium overlap */}
        <Reveal>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-2xl shadow-primary-dark/15 backdrop-blur-sm md:p-10">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                Built on Trust
              </p>
              <h2 className="font-display mx-auto mt-2 max-w-2xl text-2xl font-medium leading-tight text-foreground md:text-3xl">
                Every donation is treated with the{" "}
                <span className="italic text-primary">accountability</span> it
                deserves
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, i) => {
                const Inner = (
                  <div className="group flex h-full items-start gap-4 rounded-2xl bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-primary/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold leading-none text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-1.5 text-sm leading-snug text-muted">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={item.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
                    {item.href ? (
                      <Link href={item.href} className="block h-full">{Inner}</Link>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
