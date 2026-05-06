import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Latest News - Comfort & Hope Foundation",
  description:
    "Stay updated with recent announcements, milestones, and developments from Comfort & Hope Foundation.",
};

const news = [
  {
    category: "Infrastructure",
    date: "Jan 15, 2025",
    author: "David Okonjo",
    title: "New Water Well Commissioned in Rural Community",
    excerpt:
      "Over 500 families now have access to clean drinking water thanks to our latest borehole project in partnership with local leaders.",
  },
  {
    category: "Fundraising",
    date: "Dec 28, 2024",
    author: "Sarah Johnson",
    title: "Annual Charity Gala Raises Record Funds",
    excerpt:
      "Our community came together for a night of giving, surpassing our fundraising goal and demonstrating incredible generosity.",
  },
  {
    category: "Education",
    date: "Dec 15, 2024",
    author: "Maria Garcia",
    title: "Girl-Child Education Program Graduates 100 Students",
    excerpt:
      "Celebrating the success of 100 young girls who completed our scholarship program and are now pursuing higher education.",
  },
  {
    category: "Healthcare",
    date: "Nov 30, 2024",
    author: "Dr. Amara Nwosu",
    title: "Mental Health Support Center Opens in Lagos",
    excerpt:
      "Our new counseling center provides free mental health services to vulnerable populations in the community.",
  },
  {
    category: "Relief",
    date: "Nov 10, 2024",
    author: "Emmanuel Adebayo",
    title: "Emergency Relief Reaches 1,000 Families",
    excerpt:
      "Rapid response team delivers food, clothing, and essential supplies to families affected by recent flooding.",
  },
  {
    category: "Partnerships",
    date: "Oct 25, 2024",
    author: "Sarah Johnson",
    title: "New Partnership with Global Health Initiative",
    excerpt:
      "Strategic collaboration will expand our healthcare programs to reach more underserved communities.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/updates" className="hover:text-white">Updates</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">News</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Latest News
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Stay updated with recent announcements, milestones, and
              developments from Comfort & Hope Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="h-48 bg-primary/10" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                    <span>{item.author}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {item.excerpt}
                  </p>
                  <Link
                    href="/updates/news"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
