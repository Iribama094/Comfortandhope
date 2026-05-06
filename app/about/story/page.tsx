import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Target,
  Eye,
  Heart,
  Shield,
  Compass,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Our Story - Comfort & Hope Foundation",
  description:
    "Rooted in faith, driven by compassion, and committed to restoring hope and dignity to vulnerable communities.",
};

const values = [
  {
    icon: Sparkles,
    title: "Faith in God",
    description:
      "Our foundation is built on unwavering trust in God and His guidance in all we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding transparency, honesty, and accountability in all our operations.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Serving with empathy, kindness, and genuine care for every individual.",
  },
  {
    icon: Star,
    title: "Dignity",
    description:
      "Treating every person with respect and honoring their inherent worth.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "Creating measurable, lasting change that transforms lives and communities.",
  },
  {
    icon: Compass,
    title: "Hope",
    description:
      "Inspiring belief in a better tomorrow and the possibility of transformation.",
  },
  {
    icon: Target,
    title: "Empowerment",
    description:
      "Equipping individuals with tools, skills, and opportunities to thrive.",
  },
];

const objectives = [
  "To provide basic needs and emergency relief, alleviating immediate suffering through food, clothing, and essential supplies.",
  "To support orphaned and homeless children by creating safe, nurturing environments and educational opportunities.",
  "To empower widows and vulnerable adults through skills training, economic support, and mental health assistance.",
  "To promote girl-child education and development through scholarships, mentorship, and leadership programs.",
  "To provide accessible mental health support and counseling for vulnerable populations dealing with trauma.",
];

export default function OurStoryPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/about" className="hover:text-white">About</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Our Story</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Rooted in faith, driven by compassion, and committed to restoring
              hope and dignity to vulnerable communities.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-20 md:py-28">
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
              committed to bringing hope, dignity, and tangible support to the
              less privileged in our society. We exist to serve widows, homeless
              individuals, orphaned children, and the girl child.
            </p>
            <p>
              We believe that sustainable change comes from within. That&apos;s
              why we work closely with local leaders, families, and stakeholders
              to identify needs and co-create solutions that last. Our approach
              is holistic, addressing not just immediate needs but the systemic
              root causes of poverty and inequality.
            </p>
            <p>
              Guided by faith, compassion, and the belief that &ldquo;Where
              there is life, there is hope,&rdquo; we are convinced that no life
              is insignificant and that every person deserves a chance at a
              brighter, healthier future.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            What Drives Us
          </p>
          <div className="mt-6 space-y-6 text-body leading-relaxed">
            <p>
              In Nigeria and across the world, countless individuals live in
              conditions that most of us cannot imagine. Widows struggle to
              provide for their families, orphaned children lack guidance and
              care, the homeless face daily uncertainty, and vulnerable girls are
              denied opportunities to grow, learn, and thrive.
            </p>
            <p>
              At Comfort & Hope Foundation, we are deeply moved by these realities. We
              believe that no life is insignificant and that everyone deserves a
              chance at a better tomorrow. Our founder&apos;s unwavering passion
              for serving others is the heartbeat of our organization.
            </p>
            <p>
              We are motivated to act because we see the power of small,
              meaningful interventions to transform lives. From providing a
              single meal to supporting a child&apos;s education, every action
              matters. Our programs are designed not only to meet immediate needs
              but also to create lasting impact.
            </p>
            <p>
              Comfort & Hope Foundation is more than a charity; it is a labor of love,
              driven by faith, purpose, and a relentless desire to serve. We
              invite everyone to join us in this mission. Together, we can turn
              despair into hope, helplessness into opportunity, and dreams into
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                To serve the less privileged with compassion and practical
                support by providing food, clothing, toiletries, education,
                shelter, and mental health assistance. We exist to uplift
                widows, homeless individuals, orphaned children, and the girl
                child, nurturing hope, restoring dignity, and empowering lives
                under God&apos;s guidance.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                A world where every vulnerable person experiences safety,
                dignity, hope, and emotional well-being. We envision Comfort & Hope
                Foundation as a global network of orphanages, shelters, schools,
                and mental health support services, providing nurturing
                environments where faith, love, and care create opportunities
                for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              What Guides Us
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Our Goals
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Our Objectives
            </h2>
            <p className="mt-4 text-body">
              Clear goals that guide our work and measure our impact
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-xl border border-border bg-white p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-body">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
