import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Building2,
  Church,
  Handshake,
  Wrench,
  Heart,
  Award,
  Truck,
  Megaphone,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Partnership Types - Comfort & Hope Foundation",
  description:
    "Discover the perfect partnership model that aligns with your organization's goals and capabilities.",
};

const types = [
  {
    icon: Building2,
    title: "Corporate Partnership",
    description:
      "Align your company's CSR goals with meaningful community impact. Engage employees and demonstrate your commitment to social good.",
    benefits: [
      "Brand visibility",
      "Employee engagement",
      "Tax benefits",
      "Impact reporting",
    ],
  },
  {
    icon: Church,
    title: "Faith-Based Partnership",
    description:
      "Churches and religious organizations partnering to amplify outreach efforts and serve vulnerable communities together.",
    benefits: [
      "Joint outreach programs",
      "Shared resources",
      "Community mobilization",
      "Spiritual support",
    ],
  },
  {
    icon: Handshake,
    title: "NGO Collaboration",
    description:
      "Partner with other nonprofits to leverage combined expertise, resources, and networks for greater impact.",
    benefits: [
      "Resource sharing",
      "Joint programs",
      "Knowledge exchange",
      "Expanded reach",
    ],
  },
  {
    icon: Wrench,
    title: "Service Partnership",
    description:
      "Contribute professional skills and expertise: legal, medical, educational, technical, or administrative services.",
    benefits: [
      "Skills-based volunteering",
      "Pro bono services",
      "Capacity building",
      "Professional development",
    ],
  },
  {
    icon: Heart,
    title: "Philanthropic Partnership",
    description:
      "Individual or family foundations providing financial support and strategic guidance for our programs.",
    benefits: [
      "Direct impact",
      "Legacy building",
      "Personal involvement",
      "Transparent reporting",
    ],
  },
  {
    icon: Award,
    title: "Sponsorship",
    description:
      "Sponsor specific programs, events, or infrastructure projects with your organization's name and branding.",
    benefits: [
      "Brand exposure",
      "Targeted impact",
      "Recognition",
      "Marketing opportunities",
    ],
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description:
      "Provide transportation, warehousing, or distribution services to help us deliver aid more efficiently.",
    benefits: [
      "Operational efficiency",
      "Cost savings",
      "Wider reach",
      "Supply chain optimization",
    ],
  },
  {
    icon: Megaphone,
    title: "Media / Awareness Partner",
    description:
      "Help amplify our message through media coverage, content creation, or awareness campaigns.",
    benefits: [
      "Increased visibility",
      "Storytelling",
      "Donor acquisition",
      "Community awareness",
    ],
  },
];

export default function PartnershipTypesPage() {
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
            <span className="text-white">Partnership Types</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Partnership Types
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Discover the perfect partnership model that aligns with your
              organization&apos;s goals and capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Flexible Models
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Flexible Partnership Models
          </h2>
          <p className="mt-6 text-body leading-relaxed">
            We offer flexible partnership models to match your
            organization&apos;s goals, resources, and capabilities. Whether
            you&apos;re a corporation, faith-based organization, NGO, or
            individual philanthropist, there&apos;s a partnership opportunity
            that&apos;s right for you.
          </p>
        </div>
      </section>

      {/* Types Grid */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {types.map((type) => (
              <div
                key={type.title}
                className="rounded-xl border border-border bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {type.description}
                </p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Key Benefits:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {type.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-body"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Partnership */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Custom Partnership Solutions
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Don&apos;t see a partnership model that fits? We&apos;re happy to
            work with you to create a custom partnership that aligns with your
            unique goals and capabilities. Let&apos;s explore how we can work
            together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Discuss Custom Partnership
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Choose the partnership model that works best for you and
            let&apos;s create lasting impact together.
          </p>
          <Link
            href="/partner"
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
