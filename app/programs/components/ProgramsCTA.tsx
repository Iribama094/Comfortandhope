import Link from "next/link";

export default function ProgramsCTA() {
  return (
    <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Support Our Programs
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-white/70">
          Your donations and partnership directly fund our programs, helping
          us reach more communities and transform more lives. Every
          contribution counts.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/donations"
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
