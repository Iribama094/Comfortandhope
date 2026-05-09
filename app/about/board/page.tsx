import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Board of Directors - Comfort & Hope Foundation",
  description:
    "Meet the Board of Directors guiding Comfort & Hope Foundation's strategic direction, governance, and long-term vision.",
};

const boardMembers = [
  {
    name: "Chief Adekunle Williams",
    title: "Board Chairman",
    bio: "A seasoned business leader and philanthropist with over 30 years of experience in corporate governance. Chief Williams provides strategic oversight and ensures Comfort & Hope's mission stays at the forefront of every decision.",
    expertise: "Corporate Governance & Strategy",
  },
  {
    name: "Dr. Amara Osei",
    title: "Vice Chairperson",
    bio: "A distinguished public health specialist and former WHO advisor. Dr. Osei brings deep expertise in healthcare systems and community health, guiding Comfort & Hope's health programs to international standards.",
    expertise: "Public Health & Policy",
  },
  {
    name: "Barr. Chinedu Onyema",
    title: "Board Secretary",
    bio: "A practicing attorney specializing in nonprofit law and regulatory compliance. Barr. Onyema ensures Comfort & Hope meets all legal and regulatory obligations and maintains the highest governance standards.",
    expertise: "Nonprofit Law & Compliance",
  },
  {
    name: "Prof. Halima Danfodio",
    title: "Board Member",
    bio: "Professor of Education at a leading Nigerian university and advocate for girl-child education. Prof. Danfodio advises on education program design and impact measurement methodologies.",
    expertise: "Education & Research",
  },
  {
    name: "Mr. Emeka Nnamdi",
    title: "Board Member & Treasurer",
    bio: "A chartered accountant and financial consultant with extensive experience in nonprofit financial management. Mr. Nnamdi oversees financial audits, budgeting, and fiscal accountability.",
    expertise: "Finance & Audit",
  },
  {
    name: "Mrs. Folake Adeyemo",
    title: "Board Member",
    bio: "A veteran development practitioner with 20+ years in international development and community empowerment programs across West Africa.",
    expertise: "International Development",
  },
  {
    name: "Alhaji Bello Garba",
    title: "Board Member",
    bio: "An influential community leader and businessman who bridges Comfort & Hope's work with grassroots networks in Northern Nigeria, ensuring culturally sensitive program delivery.",
    expertise: "Community Relations",
  },
];

export default function BoardPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Governance"
        title="Board of Directors"
        italicWord="Directors"
        description="Our Board provides strategic direction, governance oversight, and accountability — ensuring Comfort & Hope fulfills its mission with integrity and impact."
        crumbs={[{ label: "About", href: "/about" }, { label: "Board" }]}
        variant="image"
        image={{
          src: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=2400&q=80",
          alt: "African community members",
        }}
      />

      {/* Board Members */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Governance
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Meet Our Board
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">
              Distinguished leaders from diverse backgrounds who volunteer
              their time and expertise to guide Comfort & Hope&apos;s strategic
              direction.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-primary/10" />
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {member.bio}
                  </p>
                  <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {member.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Note */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Committed to Good Governance
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Our Board meets quarterly to review program performance, financial
            reports, and strategic plans. Board members serve voluntarily and
            receive no compensation, ensuring that all resources go directly
            to our mission.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about/compliance"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              Regulatory Compliance
            </Link>
            <Link
              href="/about/donor-rights"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white"
            >
              Donor Rights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
