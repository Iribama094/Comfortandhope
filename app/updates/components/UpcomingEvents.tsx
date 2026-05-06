import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Community Feeding Outreach",
    date: "February 15, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Ajegunle Community Center, Lagos",
    description:
      "Join us as we distribute food packages, clean water, and essential supplies to over 200 families in the Ajegunle community.",
  },
  {
    title: "Girl-Child Empowerment Workshop",
    date: "March 8, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Comfort & Hope Education Hub, Kaduna",
    description:
      "A full-day workshop on leadership, digital literacy, and career guidance for girls aged 12 to 18 in underserved communities.",
  },
  {
    title: "Volunteer Orientation & Training",
    date: "March 22, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Comfort & Hope Office, Abuja",
    description:
      "New volunteer orientation session covering our mission, code of conduct, safeguarding policies, and hands-on training for upcoming outreach programs.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Upcoming
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Events &amp; Activities
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-6 rounded-xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-accent text-primary-dark">
                <span className="text-2xl font-bold">
                  {event.date.split(" ")[1]?.replace(",", "")}
                </span>
                <span className="text-xs font-medium uppercase">
                  {event.date.split(" ")[0]?.slice(0, 3)}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {event.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
              >
                Register
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
