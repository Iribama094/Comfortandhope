const achievements = [
  {
    title: "Expanded Reach",
    description:
      "Your partnership enables us to reach more vulnerable communities and provide essential services to those in need.",
  },
  {
    title: "Sustainable Programs",
    description:
      "Long-term partnerships help us build sustainable programs that create lasting change in communities.",
  },
  {
    title: "Lives Transformed",
    description:
      "Every partnership directly translates to lives changed, families supported, and hope restored.",
  },
  {
    title: "Infrastructure Development",
    description:
      "Your support helps us build orphanages, schools, and health centers that serve communities for generations.",
  },
];

export default function PartnerImpact() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Impact
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            What Your Partnership Helps Us Achieve
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-white p-8"
            >
              <h3 className="text-lg font-semibold text-foreground">
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
