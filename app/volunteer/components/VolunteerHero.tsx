import Link from "next/link";
import PageHero from "../../components/PageHero";

export default function VolunteerHero() {
  return (
    <PageHero
      eyebrow="Join Us"
      title="Become a volunteer"
      italicWord="volunteer"
      description="Join our network of changemakers. Whether you have a few hours a week or want to commit long-term, there's a place for you at Comfort & Hope Foundation."
      crumbs={[{ label: "Volunteer" }]}
      size="lg"
      variant="split"
      image={{
        src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80",
        alt: "Volunteers and community members",
      }}
    >
      <div className="flex flex-wrap gap-4">
        <Link
          href="#register"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent-dark"
        >
          Register Now
        </Link>
        <Link
          href="#guidelines"
          className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:border-white/60 hover:bg-white/10"
        >
          Guidelines &amp; Policies
        </Link>
      </div>
    </PageHero>
  );
}
