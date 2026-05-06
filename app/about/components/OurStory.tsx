export default function OurStory() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Who We Are
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Rooted in Hope, Driven by Compassion
          </h2>

          <div className="mt-8 space-y-6 text-body leading-relaxed">
            <p>
              Comfort & Hope Foundation is a faith-driven nonprofit organization,
              deeply rooted in our trust and belief in God, passionately
              committed to bringing hope, dignity, and tangible support to
              the less privileged in our society. We exist to serve widows,
              homeless individuals, orphaned children, and the girl child.
            </p>
            <p>
              We believe that sustainable change comes from within.
              That&apos;s why we work closely with local leaders, families,
              and stakeholders to identify needs and co-create solutions
              that last. Our approach is holistic, addressing not just
              immediate needs but the systemic root causes of poverty and
              inequality.
            </p>
            <p>
              Guided by faith, compassion, and the belief that &ldquo;Where
              there is life, there is hope,&rdquo; we are convinced that no
              life is insignificant and that every person deserves a chance
              at a brighter, healthier future.
            </p>
          </div>

          {/* Timeline / Key Milestones */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              {
                year: "Founded",
                title: "A Vision Takes Shape",
                description:
                  "Comfort & Hope Foundation established with a mission to empower underserved communities.",
              },
              {
                year: "First Program",
                title: "Education Initiative",
                description:
                  "Launched the Girl Child Education program, providing scholarships and mentorship to young girls.",
              },
              {
                year: "Expanding Reach",
                title: "Healthcare & Relief",
                description:
                  "Expanded into healthcare access and emergency relief, reaching thousands of families.",
              },
              {
                year: "Growing Impact",
                title: "Clean Water & Partnerships",
                description:
                  "Introduced the Clean Water Initiative and forged partnerships with organizations worldwide.",
              },
            ].map((milestone) => (
              <div
                key={milestone.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {milestone.year}
                </span>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
