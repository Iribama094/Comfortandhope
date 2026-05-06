import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, MapPin, Clock, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Upcoming Events - Comfort & Hope Foundation",
  description:
    "Join us at our programs, workshops, and community activities. Be part of the change you want to see.",
};

const upcoming = [
  {
    date: "February 15, 2025",
    title: "Community Feeding Outreach - Lagos",
    time: "10:00 AM - 2:00 PM",
    location: "Lagos Community Center, Victoria Island",
    capacity: "50 volunteers needed",
    description:
      "Join us for our monthly feeding program serving 500+ families with hot meals, groceries, and essential supplies.",
  },
  {
    date: "February 22, 2025",
    title: "Girl-Child Empowerment Workshop",
    time: "9:00 AM - 4:00 PM",
    location: "Comfort & Hope Foundation HQ, Ikeja",
    capacity: "100 participants",
    description:
      "Leadership and skills training for young girls aged 12-18. Topics include self-confidence, career planning, and financial literacy.",
  },
  {
    date: "March 1, 2025",
    title: "Volunteer Orientation Session",
    time: "6:00 PM - 8:00 PM",
    location: "Online (Zoom)",
    capacity: "Unlimited (Virtual)",
    description:
      "Learn about volunteer opportunities, our programs, and how to get involved with Comfort & Hope Foundation.",
  },
  {
    date: "March 10, 2025",
    title: "Mental Health Awareness Walk",
    time: "7:00 AM - 11:00 AM",
    location: "Lekki Conservation Centre",
    capacity: "500 participants",
    description:
      "Join us for a 5km awareness walk to break the stigma around mental health and raise funds for our counseling programs.",
  },
  {
    date: "March 20, 2025",
    title: "Widow Support Program Launch",
    time: "2:00 PM - 5:00 PM",
    location: "Community Hall, Surulere",
    capacity: "200 attendees",
    description:
      "Official launch of our widow support initiative providing skills training, microloans, and emotional support.",
  },
  {
    date: "April 15, 2025",
    title: "Annual Fundraising Gala",
    time: "6:00 PM - 11:00 PM",
    location: "Eko Hotel & Suites, Victoria Island",
    capacity: "300 guests",
    description:
      "Our signature fundraising event featuring dinner, entertainment, and inspiring stories of impact. Black-tie optional.",
  },
];

const past = [
  {
    month: "January 2025",
    title: "New Year Community Outreach",
    highlight: "Served 800+ families with food and clothing",
  },
  {
    month: "December 2024",
    title: "Christmas Charity Gala",
    highlight: "Raised ₦15M for orphanage construction",
  },
  {
    month: "November 2024",
    title: "Skills Training Workshop",
    highlight: "150 women trained in vocational skills",
  },
];

export default function EventsPage() {
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
            <span className="text-white">Events</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Upcoming Events
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Join us at our programs, workshops, and community activities. Be
              part of the change you want to see.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <div
                key={event.title}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="bg-primary p-4 text-center text-white">
                  <p className="text-2xl font-bold">
                    {event.date.split(" ")[1]?.replace(",", "")}
                  </p>
                  <p className="text-sm">
                    {event.date.split(" ")[0]} {event.date.split(" ")[2]}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <div className="mt-3 space-y-2 text-xs text-muted">
                    <p className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Users className="h-3 w-3" />
                      {event.capacity}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-body">
                    {event.description}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-block w-full rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Looking Back
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              Past Events
            </h2>
            <p className="mt-4 text-body">
              Highlights from our recent programs and activities
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {past.map((event) => (
              <div
                key={event.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {event.month}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-body">{event.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
