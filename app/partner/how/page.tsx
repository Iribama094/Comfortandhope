"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const steps = [
  {
    step: "01",
    title: "Submit a Partnership Inquiry",
    description:
      "Fill out the form below with details about your organization, partnership interest, and the areas you'd like to collaborate on. This helps us prepare for a productive first conversation.",
  },
  {
    step: "02",
    title: "Discovery & Consultation",
    description:
      "Our partnerships team will review your inquiry and schedule a consultation call within 5 business days. We'll discuss alignment, explore collaboration areas, and answer your questions.",
  },
  {
    step: "03",
    title: "Proposal & Agreement",
    description:
      "Based on our discussion, we'll prepare a tailored partnership proposal outlining scope, deliverables, timelines, and reporting commitments. We formalize with a Memorandum of Understanding (MOU).",
  },
  {
    step: "04",
    title: "Onboarding & Kickoff",
    description:
      "Once the agreement is signed, you're onboarded with a dedicated partnership manager, access to our project pipeline, and an orientation to our impact measurement framework.",
  },
  {
    step: "05",
    title: "Collaborate & Create Impact",
    description:
      "Begin co-creating programs, engaging volunteers, receiving quarterly impact reports, and celebrating the change we achieve together. Your partnership manager keeps communication seamless.",
  },
];

export default function HowToPartnerPage() {
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
            <span className="text-white">How to Partner</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              How to Become a Partner
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Becoming a Comfort & Hope partner is straightforward. Follow the steps
              below and submit your inquiry — our team will guide you through
              the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              The Process
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Five Simple Steps
            </h2>
          </div>

          <div className="mt-14 space-y-0">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
                Get Started
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
                Partnership Inquiry Form
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                Fill out the form and our partnerships team will reach out
                within 5 business days to schedule a consultation.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-border bg-white p-5">
                  <h3 className="text-sm font-semibold text-foreground">
                    What to Expect
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-body">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Response within 5 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Consultation call to discuss alignment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Tailored partnership proposal
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Dedicated partnership manager
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-white p-5">
                  <h3 className="text-sm font-semibold text-foreground">
                    Not Sure Which Type?
                  </h3>
                  <p className="mt-2 text-sm text-body">
                    Explore our{" "}
                    <Link href="/partner/types" className="font-medium text-primary hover:underline">
                      partnership types
                    </Link>{" "}
                    or{" "}
                    <Link href="/contact" className="font-medium text-primary hover:underline">
                      contact us
                    </Link>{" "}
                    and we&apos;ll help you find the right fit.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Submit Your Inquiry
              </h3>
              <form className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Organization name"
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@organization.com"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 000 000 0000"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Partnership Type
                  </label>
                  <select className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
                    <option value="">Select type</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="institutional">Institutional Partnership</option>
                    <option value="academic">Academic Partnership</option>
                    <option value="individual">Individual Partnership</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Areas of Interest
                  </label>
                  <select className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
                    <option value="">Select area</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="water">Clean Water</option>
                    <option value="relief">Emergency Relief</option>
                    <option value="skills">Skills &amp; Empowerment</option>
                    <option value="community">Community Development</option>
                    <option value="multiple">Multiple Areas</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your organization and how you'd like to partner..."
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
