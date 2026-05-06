import { Heart, Users, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Make a Direct Impact",
    description:
      "See firsthand how your efforts change lives and bring hope to vulnerable communities.",
  },
  {
    icon: Users,
    title: "Join a Community",
    description:
      "Connect with like-minded individuals who share your passion for service and compassion.",
  },
  {
    icon: Sparkles,
    title: "Grow Personally",
    description:
      "Develop new skills, gain experience, and grow spiritually through meaningful service.",
  },
];

export default function WhyVolunteer() {
  return (
    <section id="why-volunteer" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Why Volunteer
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Why Volunteer with Comfort & Hope?
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-border bg-white p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
