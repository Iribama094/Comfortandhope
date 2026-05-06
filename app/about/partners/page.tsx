import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Our Partners - Comfort & Hope Foundation",
  description:
    "Meet the organizations and institutions partnering with Comfort & Hope to create lasting community impact across Nigeria.",
};

const partners = [
  {
    name: "GreenTech Solutions Ltd.",
    type: "Corporate Partner",
    description:
      "GreenTech has been a cornerstone partner since 2024, funding our Clean Water Initiative and providing technical expertise for sustainable well construction.",
    contribution: "Clean Water Initiative Sponsor",
  },
  {
    name: "HealthFirst Alliance",
    type: "Institutional Partner",
    description:
      "HealthFirst collaborates with Comfort & Hope on medical outreach programs, providing medical supplies, trained personnel, and mobile clinic support.",
    contribution: "Healthcare Programs Collaborator",
  },
  {
    name: "University of Lagos",
    type: "Academic Partner",
    description:
      "The University of Lagos partners with us on education research, student internship programs, and co-designed community health studies.",
    contribution: "Research & Education Partner",
  },
  {
    name: "First Bank Foundation",
    type: "Corporate Partner",
    description:
      "First Bank Foundation provides financial literacy training resources and sponsors our Skills & Empowerment program across multiple states.",
    contribution: "Skills Training Sponsor",
  },
  {
    name: "UNICEF Nigeria",
    type: "Institutional Partner",
    description:
      "UNICEF collaborates with Comfort & Hope on child protection, girl-child education advocacy, and emergency relief response coordination.",
    contribution: "Child Protection & Education",
  },
  {
    name: "Dangote Foundation",
    type: "Corporate Partner",
    description:
      "The Dangote Foundation supports Comfort & Hope's emergency relief operations and community development infrastructure projects.",
    contribution: "Relief & Infrastructure Sponsor",
  },
  {
    name: "Covenant University",
    type: "Academic Partner",
    description:
      "Covenant University provides volunteer students, research support, and co-hosts our annual Girl Child Education Summit.",
    contribution: "Education & Volunteer Support",
  },
  {
    name: "TechBridge Africa",
    type: "Corporate Partner",
    description:
      "TechBridge provides digital literacy tools, computer equipment, and volunteer instructors for our education hubs.",
    contribution: "Digital Education Sponsor",
  },
];

export default function PartnersPage() {
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
            <span className="text-white">Our Partners</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Our Partners
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We are proud to work alongside organizations that share our
              vision for empowered communities and sustainable change.
              Together, we achieve more.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Collaborations
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Organizations We Work With
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="flex h-20 items-center justify-center rounded-lg bg-surface text-sm font-medium text-muted">
                  Logo
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {partner.name}
                </h3>
                <span className="mt-1 inline-block text-xs font-medium text-primary">
                  {partner.type}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {partner.description}
                </p>
                <p className="mt-3 text-xs text-muted">
                  {partner.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Become a Partner
          </h2>
          <p className="mt-4 text-body">
            Join our growing network of partners and help us scale our impact
            across more communities. We welcome corporate, institutional,
            academic, and individual partnerships.
          </p>
          <Link
            href="/partner"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
