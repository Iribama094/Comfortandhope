import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Why Your Donation Matters - Comfort & Hope Foundation",
  description:
    "Discover how your donation creates lasting change by feeding hungry children, restoring dignity to widows, and empowering communities.",
};

const impacts = [
  "Provide food, groceries, and water",
  "Distribute clothing, toiletries, and hygiene supplies",
  "Support mental health responders",
  "Educate and empower the girl child",
  "Assist widows and struggling families",
  "Fund outreach missions and emergency relief",
  "Build future shelters, orphanages, and schools",
];

export default function WhyDonationMattersPage() {
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
            <span className="text-white">Why Your Donation Matters</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Why Your Donation Matters
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Every day, thousands of vulnerable people struggle to access
              basic necessities. They face hunger, homelessness, isolation,
              and emotional burdens. Your generosity provides the bridge
              between hardship and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Impact List */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
                The Impact of Giving
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
                Your Donation Helps Us
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                At Comfort & Hope Foundation, every act of giving becomes a bridge
                between someone&apos;s pain and their possibility. Your
                donation, whether big or small, material or
                financial, directly transforms lives.
              </p>

              <ul className="mt-8 space-y-4">
                {impacts.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-body"
                  >
                    <Heart className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base font-medium italic text-primary">
                When you give, you become a vessel of hope.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="text-4xl font-bold text-primary">5,000+</p>
                <p className="mt-2 text-sm text-body">
                  Lives directly impacted through food, clothing, and basic
                  needs outreach
                </p>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="mt-2 text-sm text-body">
                  Girls empowered through education, scholarships, and
                  mentorship programs
                </p>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="text-4xl font-bold text-primary">200+</p>
                <p className="mt-2 text-sm text-body">
                  Widows and families supported with resources, counseling,
                  and emergency assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Donation Provides */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Real Impact
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              What Your Donation Provides
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Food & Basic Needs",
                description:
                  "Groceries, clean water, and essential supplies for families facing hunger and hardship.",
              },
              {
                title: "Mental Health Support",
                description:
                  "Counseling, psychosocial support, and mental health first responders for those in crisis.",
              },
              {
                title: "Girl-Child Education",
                description:
                  "School supplies, tuition, uniforms, and mentorship for girls in underserved communities.",
              },
              {
                title: "Widows & Families",
                description:
                  "Financial assistance, skill training, and community support for widows and struggling families.",
              },
              {
                title: "Emergency Relief",
                description:
                  "Rapid-response supplies, temporary shelter, and medical aid during crises and disasters.",
              },
              {
                title: "Outreach Missions",
                description:
                  "Community visits, awareness campaigns, and on-the-ground support in remote areas.",
              },
              {
                title: "Shelter Development",
                description:
                  "Building future shelters, orphanages, and safe spaces for vulnerable children and families.",
              },
              {
                title: "Skills & Training",
                description:
                  "Vocational training, digital literacy, and entrepreneurship programs for youth and women.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10" />
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Your donation, no matter the size, is a powerful act of hope. Be
            part of the movement that transforms lives.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donations"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Donate Now
            </Link>
            <Link
              href="/donations/ways"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Ways to Give
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
