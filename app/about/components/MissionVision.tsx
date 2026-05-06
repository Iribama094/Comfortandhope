import { Target, Eye, Compass } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower underserved communities through sustainable development, education, healthcare, and emergency relief, creating lasting change that transforms lives.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every individual has access to quality education, healthcare, clean water, and the opportunity to live a life of dignity and purpose.",
  },
  {
    icon: Compass,
    title: "Our Values",
    description:
      "Compassion, integrity, community, sustainability, and accountability guide every decision we make and every program we create.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            What Drives Us
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Mission, Vision &amp; Values
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-white p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
