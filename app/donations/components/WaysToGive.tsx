import Link from "next/link";
import {
  Banknote,
  Package,
  HandHeart,
  Lightbulb,
  Building2,
} from "lucide-react";

const ways = [
  {
    icon: Banknote,
    number: "1",
    title: "Financial Donations",
    description:
      "Your financial support helps sustain and grow all our programs. Every naira goes toward real, measurable impact.",
    items: [
      "Bank transfer (account details available)",
      "Online payment platforms",
      "Monthly or annual pledges",
      "Sponsorships (child, family, program, outreach)",
    ],
    cta: { label: "Make a Donation", href: "#donate" },
  },
  {
    icon: Package,
    number: "2",
    title: "In-Kind Donations (Items & Supplies)",
    description:
      "We accept a wide range of essential items. These physical gifts immediately relieve the burdens of those we serve.",
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

export default function WaysToGive() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            How to Give
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Ways You Can Donate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            We offer multiple easy ways to give, because kindness should
            never be complicated.
          </p>
        </div>

        <div className="mt-14 space-y-8">
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
                    <h3 className="text-lg font-semibold text-foreground">
                      {way.number}. {way.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {way.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
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
                      className="mt-5 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
                    >
                      {way.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
