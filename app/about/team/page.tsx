import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Our Team - Comfort & Hope Foundation",
  description:
    "Meet the dedicated team behind Comfort & Hope Foundation — leaders, program managers, and staff committed to community empowerment.",
};

const leadership = [
  {
    name: "Sulcom Ahiyemi",
    role: "Founder & Executive Director",
    bio: "Sulcom founded Comfort & Hope with a vision to empower underserved communities. With over 15 years of experience in nonprofit leadership, he drives the strategic direction and partnerships that fuel Comfort & Hope's growth.",
  },
  {
    name: "Adaeze Okafor",
    role: "Director of Programs",
    bio: "Adaeze oversees all of Comfort & Hope's programs, ensuring they meet the highest standards of impact and sustainability. She brings expertise in community development and program evaluation.",
  },
  {
    name: "Michael Ade",
    role: "Head of Operations",
    bio: "Michael manages Comfort & Hope's day-to-day operations, logistics, and field coordination. His background in project management ensures smooth execution across all initiatives.",
  },
];

const team = [
  {
    name: "Grace Mensah",
    role: "Community Outreach Lead",
    bio: "Grace leads community engagement efforts, building relationships with local leaders and ensuring programs are community-centered.",
  },
  {
    name: "David Nwankwo",
    role: "Finance & Administration",
    bio: "David manages financial operations, budgeting, and donor reporting. He ensures transparency and accountability in all financial matters.",
  },
  {
    name: "Amina Bello",
    role: "Volunteer Coordinator",
    bio: "Amina recruits, trains, and manages Comfort & Hope's volunteer network. She creates meaningful experiences that keep volunteers engaged and impactful.",
  },
  {
    name: "Chukwuemeka Obi",
    role: "Healthcare Programs Manager",
    bio: "Chukwuemeka oversees medical outreach, maternal care, and community health worker training programs across multiple states.",
  },
  {
    name: "Fatima Yusuf",
    role: "Education Programs Manager",
    bio: "Fatima manages the Girl Child Education program, scholarship administration, and mentorship initiatives.",
  },
  {
    name: "Tunde Adebayo",
    role: "Communications & Media",
    bio: "Tunde leads Comfort & Hope's storytelling, media relations, and digital presence, amplifying the voices of the communities we serve.",
  },
  {
    name: "Ngozi Eze",
    role: "Partnerships & Fundraising",
    bio: "Ngozi cultivates relationships with corporate partners, institutional donors, and grant-making organizations.",
  },
  {
    name: "Ibrahim Musa",
    role: "Clean Water Programs Lead",
    bio: "Ibrahim manages well construction, sanitation projects, and water quality monitoring across Comfort & Hope's Clean Water Initiative.",
  },
  {
    name: "Blessing Akinola",
    role: "Monitoring & Evaluation",
    bio: "Blessing tracks program outcomes, conducts impact assessments, and ensures data-driven decision-making across all initiatives.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="The People"
        title="Our team"
        italicWord="team"
        description="Meet the passionate individuals behind Comfort & Hope — a diverse group united by a shared commitment to empowering communities and creating lasting change."
        crumbs={[{ label: "About", href: "/about" }, { label: "Team" }]}
        variant="image"
        image={{
          src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2400&q=80",
          alt: "Children of a Nigerian community in a classroom",
        }}
      />

      {/* Leadership */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Leadership
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Executive Team
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-primary/10" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Our People
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            The Team
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-primary/10" />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Join Our Team
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            We&apos;re always looking for passionate individuals who want to
            make a difference. Explore volunteer and career opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/volunteer"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
