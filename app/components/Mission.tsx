import { Heart, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We serve with empathy and kindness, treating every individual with dignity and respect.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in the power of unity and working together to solve complex challenges.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We implement long-term solutions that empower communities to become self-reliant.",
  },
];

export default function Mission() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
          Our Mission
        </p>
        <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
          Building Bridges to a Brighter Future
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-body">
          At Comfort & Hope Foundation, we believe that every person deserves the
          opportunity to thrive. Through sustainable development, education, and
          healthcare initiatives, we work hand-in-hand with communities to create
          lasting change.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-white px-6 py-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
