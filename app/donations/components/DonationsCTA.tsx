import Link from "next/link";

export default function DonationsCTA() {
  return (
    <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Join Us. Be the Hope
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          When you give, you don&apos;t just donate. You feed, heal,
          strengthen, protect, uplift, and restore. Your generosity becomes
          someone&apos;s miracle.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/50">
          Together, we can rewrite stories, restore dignity, and remind every
          person that as long as there is life, there is hope.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#donate"
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
          >
            Donate Today
          </a>
          <Link
            href="/volunteer"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Become a Volunteer
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/40">
          Let your kindness become a bridge to a brighter tomorrow.
        </p>
      </div>
    </section>
  );
}
