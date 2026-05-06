import { ArrowRight, Calendar, Quote } from "lucide-react";
import Link from "next/link";

const latestNews = [
  {
    title: "Comfort & Hope Completes Emergency Food Drive in Benue State",
    excerpt:
      "Over 300 families received food packages, clean water, and essential supplies during our week-long emergency response mission in flood-affected communities.",
    date: "January 28, 2026",
  },
  {
    title: "New Girl-Child Education Hub Launches in Kaduna",
    excerpt:
      "The new hub will serve over 200 girls with quality education resources, mentorship programs, and digital literacy training to empower the next generation.",
    date: "January 15, 2026",
  },
];

const articles = [
  {
    title: "The Power of Community: How Collective Action Drives Change",
    excerpt:
      "An exploration of how grassroots collaboration and shared purpose within local communities create lasting transformation beyond what any single organization can achieve.",
    date: "January 20, 2026",
  },
  {
    title: "Why Investing in Girl-Child Education Changes Everything",
    excerpt:
      "Research consistently shows that educating girls leads to stronger economies, healthier families, and more resilient communities. Here is how Comfort & Hope is contributing to that change.",
    date: "January 8, 2026",
  },
];

const testimonials = [
  {
    quote:
      "Comfort & Hope gave my daughter the chance to go back to school. Today, she is top of her class and dreams of becoming a doctor.",
    name: "Mrs. Adebayo",
    role: "Mother of a scholarship recipient",
  },
  {
    quote:
      "When the flood took everything we had, Comfort & Hope was there within days. They brought food, clothes, and most importantly, hope.",
    name: "James Okonkwo",
    role: "Community leader, Delta State",
  },
  {
    quote:
      "Volunteering with Comfort & Hope changed my perspective on life. Seeing the direct impact of our work is something I will carry forever.",
    name: "Amina Ibrahim",
    role: "Volunteer since 2024",
  },
];

const interviews = [
  {
    title: "A Conversation with Our Founder on the Future of Comfort & Hope",
    excerpt:
      "Our founder shares the vision behind Comfort & Hope, the challenges of building a faith-driven nonprofit, and what the next five years hold for the organization.",
    date: "January 12, 2026",
  },
  {
    title: "Volunteer Spotlight: Meet Amina, Our Healthcare Champion",
    excerpt:
      "Amina has dedicated over 1,000 hours to our healthcare outreach programs. She shares her journey and the lives she has touched along the way.",
    date: "December 28, 2025",
  },
];

const partners = [
  "GreenTech Solutions",
  "HealthFirst Alliance",
  "EduBridge Foundation",
  "CarePoint Global",
  "BrightPath Initiative",
  "HopeRise Collective",
];

export default function NewsList() {
  return (
    <>
      {/* Latest News */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Latest News
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            What&apos;s Happening
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {latestNews.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="h-48 bg-primary/10" />
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {post.excerpt}
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

      {/* Articles & Insights */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Articles &amp; Insights
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Perspectives on Impact
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {articles.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="h-48 bg-primary/10" />
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/updates/articles"
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

      {/* Testimonials */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Testimonials
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Voices of Hope
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-border bg-white p-8"
              >
                <Quote className="h-6 w-6 text-primary/30" />
                <p className="mt-4 text-sm leading-relaxed text-body italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews & Features */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Interviews &amp; Features
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Behind the Mission
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {interviews.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="h-48 bg-primary/10" />
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/updates"
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

      {/* Our Partners */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Our Partners
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Organizations Walking With Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">
              We are grateful for the organizations and institutions that stand
              alongside us in the mission to bring hope and transformation to
              communities in need.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/partner"
              className="inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
