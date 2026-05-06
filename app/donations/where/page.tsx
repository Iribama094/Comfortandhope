import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Utensils,
  Brain,
  GraduationCap,
  Heart,
  Users,
  ShieldAlert,
  BookOpen,
  Home,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Where Your Donation Goes - Comfort & Hope Foundation",
  description:
    "See exactly how Comfort & Hope allocates donations across food, mental health, girl-child empowerment, widows support, emergency relief, and more.",
};

const areas = [
  {
    icon: Utensils,
    title: "Food and Basic Needs Outreach",
    description:
      "Providing groceries, clean water, clothing, toiletries, and essential supplies to families facing hunger and hardship.",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description:
      "Funding counseling services, psychosocial support, mental health first responders, and community awareness campaigns to reduce stigma.",
  },
  {
    icon: GraduationCap,
    title: "Girl-Child Empowerment",
    description:
      "Scholarships, school supplies, uniforms, mentorship programs, and digital learning hubs for girls in underserved communities.",
  },
  {
    icon: Heart,
    title: "Widows Support Program",
    description:
      "Financial assistance, vocational training, counseling, and community support networks for widows and their families.",
  },
  {
    icon: Users,
    title: "Community Outreach Missions",
    description:
      "On-the-ground visits, awareness campaigns, needs assessments, and direct community engagement in remote and underserved areas.",
  },
  {
    icon: Home,
    title: "Orphanage and Shelter Development",
    description:
      "Building safe shelters, orphanages, and transitional housing for vulnerable children, homeless individuals, and displaced families.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Relief Efforts",
    description:
      "Rapid-response food distribution, temporary shelter, medical supplies, and disaster recovery support during crises.",
  },
  {
    icon: BookOpen,
    title: "Education & Skills Training",
    description:
      "Vocational training, financial literacy, digital skills, entrepreneurship programs, and continuing education for youth and women.",
  },
];

export default function WhereDonationGoesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/donations" className="hover:text-white">Donations</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Where Your Donation Goes</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Where Your Donation Goes
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We operate with transparency, accountability, and integrity.
              Your donation directly supports the following programs and
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Program Areas */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Fund Allocation
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Your Donation Directly Supports
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-base font-medium italic text-primary">
            Every gift builds a bridge toward hope.
          </p>
        </div>
      </section>

      {/* Accountability */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Accountability
          </p>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            Our Commitment to Transparency
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Comfort & Hope publishes annual financial reports, undergoes independent
            audits, and maintains open records for all stakeholders. We believe
            that your trust is earned through consistent, verifiable
            accountability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donations"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Donate Now
            </Link>
            <Link
              href="/about/compliance"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white"
            >
              Regulatory Compliance
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
