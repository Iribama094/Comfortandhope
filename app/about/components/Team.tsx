import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Sulcom Ahiyemi",
    role: "Founder & Executive Director",
  },
  {
    name: "Adaeze Okafor",
    role: "Director of Programs",
  },
  {
    name: "Michael Ade",
    role: "Head of Operations",
  },
  {
    name: "Grace Mensah",
    role: "Community Outreach Lead",
  },
  {
    name: "David Nwankwo",
    role: "Finance & Administration",
  },
  {
    name: "Amina Bello",
    role: "Volunteer Coordinator",
  },
];

export default function Team() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Leadership
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-body">
              Our dedicated team brings together diverse expertise united by a
              shared passion for community empowerment and sustainable change.
            </p>
          </div>
          <Link
            href="/about/team"
            className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline md:flex"
          >
            View All Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-xl border border-border bg-white p-6"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-primary/10" />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-primary">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
