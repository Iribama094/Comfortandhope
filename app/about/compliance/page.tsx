import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Regulatory Compliance - Comfort & Hope Foundation",
  description:
    "Comfort & Hope Foundation operates with full transparency and compliance with all applicable laws and regulations.",
};

const reports = [
  {
    title: "Annual Reports",
    description:
      "Comprehensive overview of our programs, impact, and financials",
  },
  {
    title: "Financial Statements",
    description: "Audited financial statements available upon request",
  },
  {
    title: "Impact Reports",
    description:
      "Quarterly updates on program outcomes and beneficiary impact",
  },
];

export default function CompliancePage() {
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
            <span className="text-white">Regulatory Compliance</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Regulatory Compliance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Comfort & Hope Foundation operates with full transparency and compliance
              with all applicable laws and regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Intro */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Our Standards
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Our Commitment to Compliance
          </h2>
          <p className="mt-6 text-body leading-relaxed">
            At Comfort & Hope Foundation, we believe that trust is earned through
            transparency and accountability. We are committed to maintaining
            the highest standards of regulatory compliance, ethical conduct, and
            operational integrity in all aspects of our work.
          </p>
        </div>
      </section>

      {/* Registration & Financial */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="text-lg font-bold text-foreground">
                Registration &amp; Licensing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Comfort & Hope Foundation is registered as a nonprofit organization
                with the Corporate Affairs Commission (CAC) in Nigeria. We
                maintain all required licenses and permits to operate legally
                and ethically.
              </p>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  CAC Registration Number: [Registration Number]
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Tax Identification Number (TIN)
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Annual renewal of all permits and licenses
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="text-lg font-bold text-foreground">
                Financial Accountability
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                We adhere to international accounting standards and best
                practices for nonprofit financial management:
              </p>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Annual independent financial audits
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Quarterly financial reports to the board
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Public disclosure of financial statements upon request
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Compliance with tax regulations and filing requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection & Safeguarding */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="text-lg font-bold text-foreground">
                Data Protection &amp; Privacy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                We comply with data protection regulations including Nigeria
                Data Protection Regulation (NDPR) and international standards.
              </p>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Strict confidentiality protocols for donor and beneficiary data
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Secure data storage and encryption systems
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Regular security audits and updates
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Staff training on data protection best practices
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="text-lg font-bold text-foreground">
                Safeguarding Policies
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                We maintain comprehensive safeguarding policies to protect
                children and vulnerable adults:
              </p>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Background checks for all staff and volunteers
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Mandatory safeguarding training
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Clear reporting procedures for concerns
                </li>
                <li className="flex items-center gap-2 text-sm text-body">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Zero-tolerance policy for abuse or misconduct
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Fraud */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Anti-Fraud &amp; Corruption
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Comfort & Hope Foundation has zero tolerance for fraud, corruption, or
            misuse of funds. We have established robust internal controls and
            monitoring systems to ensure integrity in all operations.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Segregation of duties in financial processes",
              "Regular internal and external audits",
              "Whistleblower protection policy",
              "Anonymous reporting channels",
              "Swift investigation and action on any allegations",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-body"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reporting & Transparency */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Open Communication
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Reporting &amp; Transparency
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">
              We believe in open communication and regular reporting to our
              stakeholders
            </p>
          </div>

          <div className="mt-14">
            <h3 className="text-center text-lg font-semibold text-foreground">
              Available Reports
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {reports.map((report) => (
                <div
                  key={report.title}
                  className="rounded-xl border border-border bg-white p-6 text-center"
                >
                  <h4 className="text-base font-semibold text-foreground">
                    {report.title}
                  </h4>
                  <p className="mt-2 text-sm text-body">
                    {report.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Questions About Compliance?
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            If you have questions about our compliance practices or would like
            to request documentation, please contact our compliance team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Contact Compliance Team
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
