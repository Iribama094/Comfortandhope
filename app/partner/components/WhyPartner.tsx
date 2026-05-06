import { Building2, Target, Globe } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Corporate Social Responsibility",
    description:
      "Align your brand with a cause that matters. Engage employees and demonstrate your commitment to social good.",
  },
  {
    icon: Target,
    title: "Program Sponsorship",
    description:
      "Directly fund specific initiatives like schools, clinics, or water projects and see tangible results.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Leverage our established presence and community trust to implement effective development programs.",
  },
];

export default function WhyPartner() {
  return (
    <section id="why-partner" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Why Partner With Us
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Why Partner with Comfort & Hope?
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
