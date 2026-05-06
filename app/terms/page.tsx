import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - Comfort & Hope Foundation",
  description:
    "Terms and conditions governing the use of the Comfort & Hope Foundation website and services.",
};

export default function TermsOfServicePage() {
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
            <span className="text-white">Terms of Service</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Please read these terms carefully before using the Comfort & Hope
              Outreach Foundation website and services.
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
                1. Acceptance of Terms
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                By accessing or using the Comfort & Hope Foundation website
                (&quot;Site&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree to these Terms,
                please do not use the Site. We reserve the right to modify these
                Terms at any time, and your continued use of the Site
                constitutes acceptance of any changes.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                2. About Comfort & Hope Foundation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Comfort & Hope Foundation is a faith-driven charitable
                organization committed to transforming the lives of vulnerable
                populations through compassion, empowerment, and sustainable
                impact. The Site provides information about our programs,
                services, events, and ways to get involved.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                3. Use of the Website
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                You agree to use the Site only for lawful purposes and in
                accordance with these Terms. You may not:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Use the Site in any way that violates applicable local, national, or international laws",
                  "Attempt to gain unauthorized access to any part of the Site, its servers, or any connected systems",
                  "Use the Site to transmit malware, viruses, or other harmful code",
                  "Engage in any activity that interferes with or disrupts the Site or its infrastructure",
                  "Scrape, crawl, or use automated tools to extract data from the Site without our permission",
                  "Impersonate any person or entity, or misrepresent your affiliation with any person or entity",
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
                4. Donations
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                All donations made through the Site are voluntary and
                non-refundable unless otherwise required by law. By making a
                donation, you confirm that:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "You are authorized to use the payment method provided",
                  "The information you provide is accurate and complete",
                  "You understand that donations are used to support the Foundation's programs and operations",
                  "Tax-deductible receipts will be issued in accordance with applicable regulations",
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
                Comfort & Hope Foundation reserves the right to allocate donations to
                the areas of greatest need unless the donor specifies a
                particular program and that program is actively accepting
                designated funds.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                5. Volunteer and Partnership Applications
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Submitting a volunteer or partnership application through the
                Site does not guarantee acceptance. All applications are subject
                to review and approval by Comfort & Hope Foundation. We reserve the
                right to accept or decline any application at our discretion.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Volunteers and partners are expected to conduct themselves in
                accordance with our code of conduct and safeguarding policies.
                Violation of these policies may result in termination of the
                volunteer or partnership relationship.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                6. Intellectual Property
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                All content on the Site, including text, images, graphics,
                logos, icons, videos, and software, is the property of Comfort & Hope
                Outreach Foundation or its licensors and is protected by
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                You may not reproduce, distribute, modify, display, or create
                derivative works from any content on the Site without our prior
                written consent. Limited use for personal, non-commercial
                purposes (such as sharing our content on social media with
                proper attribution) is permitted.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                7. User-Submitted Content
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                By submitting content to us through the Site (including messages,
                testimonials, photos, or documents), you grant Comfort & Hope
                Foundation a non-exclusive, royalty-free, perpetual license to
                use, reproduce, and display that content in connection with our
                mission and operations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                You represent that you have the right to submit such content and
                that it does not violate the rights of any third party.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                8. Disclaimer of Warranties
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                The Site is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, either
                express or implied. Comfort & Hope Foundation does not warrant that
                the Site will be uninterrupted, error-free, or free from viruses
                or other harmful components.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                While we strive to keep the information on the Site accurate and
                up-to-date, we make no representations or warranties about the
                completeness, accuracy, or reliability of any content.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                9. Limitation of Liability
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                To the fullest extent permitted by law, Comfort & Hope Outreach
                Foundation, its directors, officers, employees, and volunteers
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or relating to
                your use of the Site, including but not limited to loss of data,
                revenue, or goodwill.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                10. Indemnification
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                You agree to indemnify and hold harmless Comfort & Hope Outreach
                Foundation, its directors, officers, employees, and agents from
                any claims, damages, losses, or expenses (including legal fees)
                arising from your use of the Site, your violation of these
                Terms, or your violation of any rights of a third party.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                11. Third-Party Links
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                The Site may contain links to third-party websites or services
                that are not owned or controlled by Comfort & Hope Foundation. We
                have no control over the content, privacy policies, or practices
                of any third-party sites and assume no responsibility for them.
                Your use of third-party sites is at your own risk.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                12. Event Registration and Participation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                Registration for events through the Site is subject to
                availability. Comfort & Hope Foundation reserves the right to modify,
                postpone, or cancel events at any time. By registering for an
                event, you consent to the Foundation&apos;s event terms,
                including photography and media policies.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                13. Governing Law
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                These Terms are governed by and construed in accordance with the
                laws of the Federal Republic of Nigeria, without regard to its
                conflict of law provisions. Any disputes arising under these
                Terms shall be resolved in the courts of Lagos State, Nigeria.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                14. Severability
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-xl font-bold text-foreground">
                15. Contact Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-6 rounded-xl border border-border bg-surface p-6">
                <p className="text-sm font-semibold text-foreground">
                  Comfort & Hope Foundation
                </p>
                <div className="mt-3 space-y-2 text-sm text-body">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:legal@comfortandhope.org"
                      className="font-medium text-primary hover:underline"
                    >
                      legal@comfortandhope.org
                    </a>
                  </p>
                  <p>Phone: +234 (0)1 270 8888</p>
                  <p>
                    Address: 123 Hope Avenue, Suite 400, Lagos State, NG 10112
                  </p>
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
