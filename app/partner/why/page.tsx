import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  TrendingUp,
  Shield,
  Handshake,
  Eye,
  BarChart3,
  Users,
  Globe,
  Lightbulb,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Why Partner with Comfort & Hope - Comfort & Hope Foundation",
  description:
    "Discover why partnering with Comfort & Hope Foundation is a powerful way to drive social impact, enhance your brand, and create lasting change.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Amplify Your Impact",
    description:
      "Leverage Comfort & Hope's deep grassroots presence across multiple states to maximize the reach and effectiveness of your social investment. We turn funding into measurable community outcomes.",
  },
  {
    icon: Shield,
    title: "Trusted & Transparent",
    description:
      "We maintain the highest standards of accountability. Every partner receives detailed quarterly reports on fund utilization, program outcomes, and beneficiary stories — verified through independent audits.",
  },
  {
    icon: Handshake,
    title: "Collaborative Approach",
    description:
      "We don't just accept funding — we co-design programs with partners. Your organization's goals, expertise, and values shape the initiatives we build together for maximum mutual benefit.",
  },
  {
    icon: Eye,
    title: "Visibility & Recognition",
    description:
      "Partners receive prominent recognition across events, publications, social media, and annual reports. Align your brand with positive community impact and authentic social responsibility.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description:
      "Our dedicated Monitoring & Evaluation team tracks every program outcome. Partners receive data-driven impact dashboards showing beneficiary reach, health improvements, education metrics, and more.",
  },
  {
    icon: Users,
    title: "Employee Engagement",
    description:
      "Corporate partners can engage employees through volunteer programs, skills-sharing initiatives, and community immersion days — boosting team morale and corporate culture.",
  },
  {
    icon: Globe,
    title: "Network of Changemakers",
    description:
      "Joining Comfort & Hope connects you with a growing ecosystem of corporate sponsors, NGOs, academic institutions, government agencies, and individual philanthropists driving change together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    description:
      "Academic and institutional partners benefit from field research opportunities, community data access, and co-authored publications that advance knowledge in development practice.",
  },
];

const stats = [
  { value: "20+", label: "Active Partners" },
  { value: "15+", label: "States Reached" },
  { value: "10,000+", label: "Lives Impacted via Partnerships" },
  { value: "92%", label: "Funds to Programs" },
];

export default function WhyPartnerPage() {
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
            <span className="text-white">Why Partner</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
                Why Partner with Comfort & Hope?
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                When you partner with Comfort & Hope, you&apos;re not just funding
                programs — you&apos;re joining a movement to uplift
                communities, empower individuals, and create lasting
                transformation across Nigeria.
              </p>
              <div className="mt-8">
                <Link
                  href="/partner/how"
                  className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
                >
                  Become a Partner
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Partnership Benefits
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              What You Gain as a Partner
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Partner?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Explore partnership types or get started with an inquiry today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/partner/how"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Get Started
            </Link>
            <Link
              href="/partner/types"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Partnership Types
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
