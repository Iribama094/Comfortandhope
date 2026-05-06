import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Quote } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Testimonials - Comfort & Hope Foundation",
  description:
    "Real stories from the people whose lives have been touched by Comfort & Hope Foundation's work.",
};

const testimonials = [
  {
    quote:
      "Comfort & Hope gave me the tools I needed to start my own tailoring business. Now I can support my three children and send them to school. I have my dignity back and a future to look forward to. This foundation changed my life.",
    name: "Amina Mohammed",
    role: "Beneficiary, Skills Training Program",
    location: "Lagos, Nigeria",
    tag: "Women Empowerment",
  },
  {
    quote:
      "Seeing the direct impact of my monthly donation is incredible. The transparency and regular updates make me feel like a true partner in this mission. I know exactly where my money goes and the lives it touches.",
    name: "Chidi Okafor",
    role: "Monthly Donor",
    location: "Abuja, Nigeria",
    tag: "Donor",
  },
  {
    quote:
      "Volunteering with the medical outreach team was life-changing. The dedication of the Comfort & Hope staff is truly inspiring. We reached communities that had never seen a doctor before. It reminded me why I became a physician.",
    name: "Dr. Ngozi Adeyemi",
    role: "Volunteer Physician",
    location: "Port Harcourt, Nigeria",
    tag: "Healthcare Volunteer",
  },
  {
    quote:
      "I never thought I would go to university. My family couldn't afford it. But Comfort & Hope believed in me when no one else did. Now I'm studying medicine and I want to give back to my community just like they gave to me.",
    name: "Blessing Eze",
    role: "Girl-Child Education Scholar",
    location: "Enugu, Nigeria",
    tag: "Education Scholarship",
  },
  {
    quote:
      "Working with Comfort & Hope has amplified our church's outreach efforts tenfold. Their professionalism, faith-driven approach, and genuine care for people make them exceptional partners. Together, we're transforming our community.",
    name: "Pastor Emmanuel Nwankwo",
    role: "Community Partner",
    location: "Owerri, Nigeria",
    tag: "Faith Partnership",
  },
  {
    quote:
      "After losing my husband, I felt hopeless and alone. Comfort & Hope didn't just give me financial support, they gave me counseling, community, and hope. They reminded me that my life still has purpose and my children still have a future.",
    name: "Grace Adebayo",
    role: "Widow Support Program",
    location: "Ibadan, Nigeria",
    tag: "Widow Support",
  },
  {
    quote:
      "Our company's partnership with Comfort & Hope has been incredibly rewarding. Their impact measurement and reporting are excellent. Our employees are proud to support an organization that creates real, measurable change.",
    name: "Tunde Bakare",
    role: "Corporate Partner",
    location: "Lagos, Nigeria",
    tag: "Corporate Partnership",
  },
  {
    quote:
      "I was struggling with depression and anxiety with nowhere to turn. Comfort & Hope's free counseling services saved my life. The counselors were professional, compassionate, and helped me find hope again. I'm forever grateful.",
    name: "Samuel Obi",
    role: "Mental Health Counseling Recipient",
    location: "Kano, Nigeria",
    tag: "Mental Health",
  },
  {
    quote:
      "Before the water well, our children walked 5 kilometers every day to fetch water. Now we have clean water in our village. Our children can go to school. Our health has improved. This is a miracle we prayed for.",
    name: "Fatima Hassan",
    role: "Clean Water Project Beneficiary",
    location: "Rural Community, Delta State",
    tag: "Clean Water",
  },
];

export default function TestimonialsPage() {
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
            <span className="text-white">Testimonials</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Testimonials
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Real stories from the people whose lives have been touched by
              Comfort & Hope Foundation&apos;s work.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Voices of Hope
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Stories of Hope and Transformation
          </h2>
          <p className="mt-4 text-body">
            These testimonials represent the heart of our work: real people,
            real change, real hope. Every story reminds us why we do what we do.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-white p-6"
              >
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-sm leading-relaxed text-body italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-primary">{t.role}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
                <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Your Story Could Be Next
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Whether you need support or want to give back, Comfort & Hope Foundation
            is here for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Get Support
            </Link>
            <Link
              href="/donations"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Support Others
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
