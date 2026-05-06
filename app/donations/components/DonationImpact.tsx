import Link from "next/link";
import { ArrowRight } from "lucide-react";

const impacts = [
  "Provide food, groceries, and water",
  "Distribute clothing, toiletries, and hygiene supplies",
  "Support mental health responders",
  "Educate and empower the girl child",
  "Assist widows and struggling families",
  "Fund outreach missions and emergency relief",
  "Build future shelters, orphanages, and schools",
];

export default function DonationImpact() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Why Your Donation Matters
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Your Giving Changes Lives
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              Every day, thousands of vulnerable people struggle to access
              basic necessities. They face hunger, homelessness, isolation,
              and emotional burdens. Your donation helps us:
            </p>

            <ul className="mt-6 space-y-3">
              {impacts.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-body"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-medium italic text-primary">
              When you give, you become a vessel of hope.
            </p>

            <Link
              href="/donations/why"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Learn More About Our Impact
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Food & Basic Needs Outreach", color: "bg-primary/10" },
              { title: "Mental Health Support", color: "bg-emerald-50" },
              { title: "Girl-Child Empowerment", color: "bg-amber-50" },
              { title: "Widows Support Program", color: "bg-purple-50" },
              { title: "Community Outreach Missions", color: "bg-sky-50" },
              { title: "Emergency Relief Efforts", color: "bg-red-50" },
            ].map((area) => (
              <div
                key={area.title}
                className={`rounded-xl ${area.color} p-5`}
              >
                <p className="text-sm font-semibold text-foreground">
                  {area.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
