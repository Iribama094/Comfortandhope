import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  Brain,
  GraduationCap,
  HandHeart,
  Users,
  Home,
  LifeBuoy,
  Hammer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Area {
  label: string;
  icon: LucideIcon;
}

const areas: Area[] = [
  { label: "Food and Basic Needs Outreach", icon: Utensils },
  { label: "Mental Health Support", icon: Brain },
  { label: "Girl-Child Empowerment", icon: GraduationCap },
  { label: "Widows Support Program", icon: HandHeart },
  { label: "Community Outreach Missions", icon: Users },
  { label: "Orphanage and Shelter Development", icon: Home },
  { label: "Emergency Relief Efforts", icon: LifeBuoy },
  { label: "Education & Skills Training", icon: Hammer },
];

export default function WhereItGoes() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Transparency & Accountability
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Where Your Donation Goes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            We operate with transparency, accountability, and integrity. Your
            donation directly supports:
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.label}
                className="group rounded-xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {area.label}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm font-medium italic text-primary">
          Every gift builds a bridge toward hope.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/donations/where"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            See Detailed Allocation Breakdown
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
