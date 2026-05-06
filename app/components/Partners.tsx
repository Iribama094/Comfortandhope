import Reveal from "./Reveal";

const partners = [
  "UNICEF Nigeria",
  "Federal Ministry of Health",
  "Access Bank",
  "Dangote Foundation",
  "MTN Foundation",
  "Rotary International",
  "USAID",
  "Red Cross",
];

export default function Partners() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
            In Partnership With
          </p>
        </Reveal>

        {/* Marquee row */}
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center justify-center"
              >
                <span className="whitespace-nowrap text-lg font-bold uppercase tracking-wider text-muted/70 transition-colors hover:text-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
