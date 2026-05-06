const types = [
  "Corporate Partnership",
  "Faith-Based Partnership",
  "NGO Collaboration",
  "Service Partnership (skills/expertise)",
  "Philanthropic / Donor Partnership",
  "Sponsorship",
  "Logistics Support",
  "Media / Awareness Partner",
];

export default function PartnershipTypes() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Partnership Options
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Types of Partnerships
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            We offer flexible partnership models to match your
            organization&apos;s goals and capabilities.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {types.map((type) => (
            <div
              key={type}
              className="rounded-xl border border-border bg-white px-6 py-4 text-sm font-medium text-foreground"
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
