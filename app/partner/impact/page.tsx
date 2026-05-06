import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Partnership Impact - Comfort & Hope Foundation",
  description:
    "See how partnerships with Comfort & Hope Foundation create measurable, lasting change in communities.",
};

const achievements = [
  {
    title: "Expanded Reach",
    description:
      "Your partnership enables us to reach more vulnerable communities and provide essential services to those in need across wider geographic areas. Together, we can serve 3x more beneficiaries.",
  },
  {
    title: "Sustainable Programs",
    description:
      "Long-term partnerships help us build sustainable programs that create lasting change in communities, breaking cycles of poverty and creating generational impact.",
  },
  {
    title: "Lives Transformed",
    description:
      "Every partnership directly translates to lives changed, families supported, and hope restored in communities that need it most. Your impact is measurable and meaningful.",
  },
  {
    title: "Infrastructure Development",
    description:
      "Your support helps us build orphanages, schools, health centers, and water wells that serve communities for generations to come.",
  },
  {
    title: "Capacity Building",
    description:
      "Partnerships strengthen our organizational capacity, allowing us to serve more people more effectively with better systems and processes.",
  },
  {
    title: "Global Network",
    description:
      "Your partnership connects you to a global network of changemakers, creating opportunities for collaboration and knowledge sharing.",
  },
];

const successStories = [
  {
    title: "Corporate Partner A",
    description:
      "3-year partnership resulted in 10 water wells built, serving 5,000+ people with clean water access.",
    impact: "5,000+ lives changed",
  },
  {
    title: "Faith Partnership B",
    description:
      "Monthly feeding programs now serve 800 families, up from 200, thanks to church network collaboration.",
    impact: "4x program growth",
  },
  {
    title: "NGO Collaboration C",
    description:
      "Joint mental health initiative provided counseling to 1,500 individuals in underserved communities.",
    impact: "1,500+ people supported",
  },
];

const stats = [
  { value: "25+", label: "Active Partners" },
  { value: "₦50M+", label: "Partnership Value" },
  { value: "15,000+", label: "Lives Impacted" },
  { value: "50+", label: "Communities Served" },
];

export default function PartnerImpactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/partner" className="hover:text-white">Partner</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Partnership Impact</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Partnership Impact
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              See how partnerships with Comfort & Hope Foundation create measurable,
              lasting change in communities.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Measurable Outcomes
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              What Your Partnership Helps Us Achieve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">
              Every partnership creates ripple effects of positive change across
              communities
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Success Stories */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Real Results
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Partnership Success Stories
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {successStories.map((story) => (
              <div
                key={story.title}
                className="rounded-xl border border-border bg-white p-8"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {story.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Impact: {story.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Partnership Impact by the Numbers
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-accent md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
