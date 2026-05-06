import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Banknote,
  Package,
  HandHeart,
  Lightbulb,
  Building2,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Ways to Donate - Comfort & Hope Foundation",
  description:
    "Explore the different ways you can donate to Comfort & Hope: financial gifts, in-kind donations, volunteering, skills, and corporate partnerships.",
};

const ways = [
  {
    icon: Banknote,
    number: "1",
    title: "Financial Donations",
    description:
      "Your financial support helps sustain and grow all our programs. Every naira goes toward real, measurable impact.",
    intro: "You can give through:",
    items: [
      "Bank transfer (account numbers)",
      "Online payment platforms (payment links)",
      "Monthly or annual pledges (contact us)",
      "Sponsorships (child, family, program, outreach)",
    ],
    cta: { label: "Make a Donation", href: "/donations" },
  },
  {
    icon: Package,
    number: "2",
    title: "In-Kind Donations (Items & Supplies)",
    description:
      "We accept a wide range of essential items. These physical gifts immediately relieve the burdens of those we serve.",
    intro: "We accept:",
    items: [
      "Food items (rice, beans, provisions, oil, snacks)",
      "Clothing (new or gently used)",
      "Toiletries (soap, sanitary pads, deodorants, toothpaste)",
      "Baby items (diapers, formula, clothes)",
      "School supplies (books, bags, pencils, uniforms)",
      "Bedding (blankets, linen, mats)",
    ],
    cta: { label: "Contact Us to Donate Items", href: "/contact" },
  },
  {
    icon: HandHeart,
    number: "3",
    title: "Volunteer Your Time",
    description:
      "Your presence matters. Volunteering is one of the most powerful forms of giving. Your time can change someone's life.",
    intro: "You can volunteer as:",
    items: [
      "Outreach volunteer",
      "Event assistant",
      "Mental health support volunteer",
      "Mentor for the girl-child program",
      "Teacher or skill trainer",
      "Logistics or donation drive helper",
    ],
    cta: { label: "Become a Volunteer", href: "/volunteer" },
  },
  {
    icon: Lightbulb,
    number: "4",
    title: "Donate Your Skills or Services",
    description:
      "If you have professional skills, you can make a huge difference. Skill-based donations strengthen our foundation and help us grow sustainably.",
    intro: "We welcome skills in:",
    items: [
      "Counseling & mental health",
      "Medical care",
      "Content creation & media",
      "Education & tutoring",
      "Project management",
      "Tech or digital skills",
      "Legal & administrative support",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    icon: Building2,
    number: "5",
    title: "Corporate & Organizational Partnerships",
    description:
      "Companies, schools, churches, and groups can partner with us. We welcome every organization ready to create real impact.",
    intro: "Partnership opportunities:",
    items: [
      "CSR initiatives",
      "Staff volunteer programs",
      "Food/clothing drives",
      "Sponsorship of events or programs",
      "Donation matching",
      "Long-term partnerships",
    ],
    cta: { label: "Partner With Us", href: "/partner" },
  },
];

export default function WaysToDonatePage() {
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
            <span className="text-white">Ways to Donate</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Ways You Can Donate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We offer multiple easy ways to give, because kindness should
              never be complicated.
            </p>
          </div>
        </div>
      </section>

      {/* Ways */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl space-y-10">
          {ways.map((way) => (
            <div
              key={way.title}
              className="overflow-hidden rounded-xl border border-border bg-white"
            >
              <div className="p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <way.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground">
                      {way.number}. {way.title}
                    </h2>
                    <p className="mt-3 text-body leading-relaxed">
                      {way.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-foreground">
                      {way.intro}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {way.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-body"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={way.cta.href}
                      className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
                    >
                      {way.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Need Help Donating?
          </h2>
          <p className="mt-4 text-body">
            If you have questions about how to donate or need assistance, our
            team is happy to help. Contact us at{" "}
            <a
              href="mailto:subomi.shoyemi@comfortandhope.org"
              className="font-medium text-primary hover:underline"
            >
              subomi.shoyemi@comfortandhope.org
            </a>{" "}
            or call{" "}
            <span className="font-medium text-foreground">
              +234 (0)1 270 8888
            </span>
            .
          </p>
          <Link
            href="/donations"
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
