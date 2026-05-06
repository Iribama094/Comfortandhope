import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Eye,
  ShieldCheck,
  Heart,
  Mail,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Donor Bill of Rights - Comfort & Hope Foundation",
  description:
    "Your trust is our responsibility. We are committed to ethical fundraising and donor stewardship.",
};

const donorRights = [
  "Be informed of the organisation's mission, how resources are used, and its capacity to use donations effectively",
  "Know the identity of those serving on the organisation's governing board and expect the board to exercise prudent judgment",
  "Have access to the organisation's most recent financial statements",
  "Be assured your gifts will be used for the purposes for which they were given",
  "Receive appropriate acknowledgment and recognition",
  "Be assured that information about your donation is handled with respect and confidentiality",
  "Expect that all relationships with individuals representing the organization will be professional in nature",
  "Be informed whether those seeking donations are volunteers, employees, or hired solicitors",
  "Have the opportunity to have your name deleted from mailing lists that the organization may share",
  "Feel free to ask questions when making a donation and receive prompt, truthful, and forthright answers",
];

const commitments = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We provide clear, accessible information about our programmes, finances, and impact.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "We maintain rigorous financial controls and regular independent audits.",
  },
  {
    icon: Heart,
    title: "Respect",
    description:
      "We honor donor intent and treat every contribution with gratitude and care.",
  },
  {
    icon: Mail,
    title: "Communication",
    description:
      "We keep donors informed about how their gifts are making a difference.",
  },
];

const privacyUses = [
  "Process your donations and send tax receipts",
  "Provide updates on programs and impact",
  "Respond to your inquiries and requests",
  "Improve our services and donor experience",
];

export default function DonorRightsPage() {
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
            <span className="text-white">Donor Rights</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Donor Bill of Rights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Your trust is our responsibility. We are committed to ethical
              fundraising and donor stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Intro */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Our Commitment to Donors
          </p>
          <p className="mt-6 text-body leading-relaxed">
            At Comfort & Hope Foundation, we believe that philanthropy is built on
            trust. We are committed to upholding the highest standards of
            ethical fundraising and donor relations. This Donor Bill of Rights
            ensures that every contributor is treated with respect,
            transparency, and integrity.
          </p>
        </div>
      </section>

      {/* Donor Rights List */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            As a Donor, You Have the Right To:
          </h2>

          <div className="mt-10 space-y-4">
            {donorRights.map((right, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-border bg-white p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-body">{right}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Beyond the Basics
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Our Commitments to You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">
              We go beyond the basics to ensure your giving experience is
              meaningful and rewarding
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Data Protection */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Privacy &amp; Data Protection
          </h2>
          <p className="mt-6 text-body leading-relaxed">
            We take your privacy seriously. Your personal information is
            protected and will never be sold, traded, or rented to third
            parties. We use your information solely to:
          </p>
          <ul className="mt-6 space-y-3">
            {privacyUses.map((use) => (
              <li
                key={use}
                className="flex items-center gap-3 text-sm text-body"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {use}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-body">
            You can opt out of communications at any time by contacting us at{" "}
            <a
              href="mailto:privacy@comfortandhope.org"
              className="font-medium text-primary hover:underline"
            >
              privacy@comfortandhope.org
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Questions or Concerns?
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            If you have any questions about your rights as a donor or concerns
            about how your donation is being used, please don&apos;t hesitate
            to contact us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:donors@comfortandhope.org"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              Email Donor Relations
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
