import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Clock } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Articles & Insights - Comfort & Hope Foundation",
  description:
    "In-depth stories, perspectives, and thought leadership on our work and the communities we serve.",
};

const articles = [
  {
    category: "Development",
    date: "Jan 10, 2025",
    author: "Maria Garcia",
    readTime: "8 min read",
    title: "The Power of Community-Led Development",
    excerpt:
      "How empowering local leaders creates sustainable change in vulnerable communities. A deep dive into our approach and the results we've seen.",
  },
  {
    category: "Healthcare",
    date: "Dec 20, 2024",
    author: "Dr. Amara Nwosu",
    readTime: "10 min read",
    title: "Mental Health in Crisis: Breaking the Silence",
    excerpt:
      "Addressing the mental health needs of vulnerable populations in our communities and why it matters now more than ever.",
  },
  {
    category: "Education",
    date: "Dec 5, 2024",
    author: "Sarah Johnson",
    readTime: "12 min read",
    title: "Education as a Pathway Out of Poverty",
    excerpt:
      "Exploring how quality education transforms lives and breaks generational cycles of poverty in underserved communities.",
  },
  {
    category: "Advocacy",
    date: "Nov 18, 2024",
    author: "Emmanuel Adebayo",
    readTime: "9 min read",
    title: "The Girl-Child Crisis: Why We Must Act Now",
    excerpt:
      "Understanding the unique challenges facing young girls in vulnerable communities and how we can create lasting change.",
  },
  {
    category: "Faith",
    date: "Nov 1, 2024",
    author: "Pastor Grace Adebayo",
    readTime: "7 min read",
    title: "Faith and Service: Our Foundation",
    excerpt:
      "How faith drives our mission and shapes our approach to serving vulnerable populations with compassion and dignity.",
  },
  {
    category: "Infrastructure",
    date: "Oct 15, 2024",
    author: "David Okonjo",
    readTime: "11 min read",
    title: "Clean Water: A Human Right, Not a Privilege",
    excerpt:
      "The impact of water scarcity on communities and how sustainable water solutions are transforming lives.",
  },
];

export default function ArticlesPage() {
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
            <span className="text-white">Articles</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Articles &amp; Insights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              In-depth stories, perspectives, and thought leadership on our work
              and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="h-48 bg-primary/10" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>{article.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {article.excerpt}
                  </p>
                  <Link
                    href="/updates/articles"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Read Full Article
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
