import Link from "next/link";
import PageHero from "../../components/PageHero";

export default function PartnerHero() {
  return (
    <PageHero
      eyebrow="Partnerships"
      title="Partner with us"
      italicWord="us"
      description="Together, we can achieve more. Let's collaborate to create sustainable impact at scale across Nigeria's most underserved communities."
      crumbs={[{ label: "Partner" }]}
      size="lg"
      variant="image"
      image={{
        src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2400&q=80",
        alt: "Community members working together",
      }}
    >
      <div className="flex flex-wrap gap-4">
        <Link
          href="#become-partner"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent-dark"
        >
          Become a Partner
        </Link>
        <Link
          href="#why-partner"
          className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:border-white/60 hover:bg-white/10"
        >
          Why Partner?
        </Link>
      </div>
    </PageHero>
  );
}
