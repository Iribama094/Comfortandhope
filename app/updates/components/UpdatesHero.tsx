import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function UpdatesHero() {
  return (
    <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">Updates</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
            Updates &amp; Stories
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Stay connected with everything happening at Comfort & Hope. From our
            latest outreach missions and community stories to upcoming events
            and partner highlights, this is where hope comes alive.
          </p>
        </div>
      </div>
    </section>
  );
}
