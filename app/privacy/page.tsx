import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Comfort & Hope Foundation",
  description:
    "Learn how Comfort & Hope Foundation collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Privacy Policy</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Your privacy matters to us. This policy explains how we collect,
              use, and safeguard your personal information.
            </p>
            <p className="mt-4 text-sm text-white/40">
              Last updated: February 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                1. Information We Collect
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                We collect information you provide directly to us when you
                interact with our website, make a donation, sign up for our
                newsletter, register for events, volunteer, or contact us. This
                may include:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Full name and contact details (email, phone number, address)",
                  "Donation and payment information",
                  "Volunteer application details",
                  "Partnership inquiry information",
                  "Messages and communications you send to us",
                  "Event registration details",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                2. Automatically Collected Information
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                When you visit our website, we may automatically collect certain
                information about your device and usage, including:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "IP address and approximate location",
                  "Browser type and version",
                  "Device type and operating system",
                  "Pages visited, time spent, and navigation paths",
                  "Referring website or source",
                  "Cookies and similar tracking technologies",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                3. How We Use Your Information
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                We use the information we collect for the following purposes:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Processing donations and issuing tax receipts",
                  "Communicating with you about our programs and impact",
                  "Responding to inquiries and support requests",
                  "Managing volunteer and partnership applications",
                  "Sending newsletters and updates (with your consent)",
                  "Improving our website and user experience",
                  "Complying with legal and regulatory obligations",
                  "Preventing fraud and ensuring security",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                4. Information Sharing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information in the following limited
                circumstances:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "With trusted service providers who assist us in operating our website and processing donations (e.g., payment processors)",
                  "When required by law, regulation, or legal process",
                  "To protect the rights, property, or safety of Comfort & Hope Foundation, our users, or others",
                  "With your explicit consent",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                5. Cookies and Tracking
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Our website uses cookies and similar technologies to enhance your
                browsing experience. Cookies are small text files stored on your
                device that help us understand how you interact with our site.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        Cookie Type
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Essential
                      </td>
                      <td className="px-4 py-3 text-body">
                        Required for the website to function properly (e.g.,
                        security, cookie consent preferences)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Analytics
                      </td>
                      <td className="px-4 py-3 text-body">
                        Help us understand how visitors interact with our
                        website so we can improve it
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Functional
                      </td>
                      <td className="px-4 py-3 text-body">
                        Remember your preferences and settings for a better
                        experience
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-body">
                You can manage your cookie preferences at any time through our
                cookie banner or your browser settings. Disabling certain cookies
                may affect website functionality.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                6. Data Security
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include
                encryption, secure servers, access controls, and regular security
                assessments.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                While we strive to protect your information, no method of
                transmission over the internet is 100% secure. We cannot
                guarantee absolute security but are committed to maintaining the
                highest standards of data protection.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                7. Your Rights
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Access: Request a copy of the personal data we hold about you",
                  "Correction: Request correction of inaccurate or incomplete data",
                  "Deletion: Request deletion of your personal data, subject to legal obligations",
                  "Opt-out: Unsubscribe from marketing communications at any time",
                  "Portability: Request your data in a structured, commonly used format",
                  "Objection: Object to certain processing of your personal data",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-body">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@comfortandhope.org"
                  className="font-medium text-primary hover:underline"
                >
                  privacy@comfortandhope.org
                </a>
                .
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                8. Data Retention
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                We retain your personal information only for as long as necessary
                to fulfill the purposes for which it was collected, comply with
                legal obligations, resolve disputes, and enforce our agreements.
                Donation records are retained as required by applicable tax and
                charity regulations.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                9. Third-Party Links
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of these external sites. We encourage you to review the
                privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                10. Children&apos;s Privacy
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Our website is not directed at children under the age of 13. We
                do not knowingly collect personal information from children. If
                you believe we have inadvertently collected information from a
                child, please contact us immediately so we can delete it.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                11. Changes to This Policy
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of significant changes by posting the updated policy on this
                page with a revised &quot;Last updated&quot; date. We encourage
                you to review this policy periodically.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                12. Contact Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-6 rounded-xl border border-border bg-surface p-6">
                <p className="text-sm font-semibold text-foreground">
                  Comfort & Hope Foundation
                </p>
                <div className="mt-3 space-y-2 text-sm text-body">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@comfortandhope.org"
                      className="font-medium text-primary hover:underline"
                    >
                      privacy@comfortandhope.org
                    </a>
                  </p>
                  <p>Phone: +234 (0)1 270 8888</p>
                  <p>Address: 123 Hope Avenue, Suite 400, Lagos State, NG 10112</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
