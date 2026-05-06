import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Girl Child Education",
    description:
      "Empowering young girls through quality education, scholarships, and mentorship programs. We believe that educating a girl transforms an entire community. Our program provides school supplies, tuition support, and after-school mentoring to girls in underserved areas.",
    image: "/programs/images/Girl Child.png",
    stats: { beneficiaries: "500+", regions: "12" },
  },
  {
    title: "Emergency Relief",
    description:
      "Providing immediate food, shelter, and medical assistance to communities affected by natural disasters and crises. Our rapid-response teams are trained and ready to deploy within 48 hours to deliver essential aid and comfort to those in need.",
    image: "/programs/images/Emergency Relief.png",
    stats: { beneficiaries: "2,000+", regions: "8" },
  },
  {
    title: "Healthcare Access",
    description:
      "Delivering essential medical services, vaccinations, and maternal care to remote and underserved areas. We partner with local health workers to build clinics, train community health volunteers, and provide free medical outreach programs.",
    image: "/programs/images/Health Care Access.png",
    stats: { beneficiaries: "1,500+", regions: "10" },
  },
  {
    title: "Clean Water Initiative",
    description:
      "Building sustainable water wells and sanitation facilities to ensure communities have access to clean, safe drinking water. Each well serves hundreds of families and drastically reduces waterborne diseases in the area.",
    image: "/programs/images/Clean Water Initiative.png",
    stats: { beneficiaries: "3,000+", regions: "15" },
  },
  {
    title: "Skills & Empowerment Training",
    description:
      "Equipping youth and women with vocational skills, financial literacy, and entrepreneurship training to foster economic independence. Participants gain practical skills in tailoring, agriculture, digital literacy, and small business management.",
    image: "/programs/education.svg",
    stats: { beneficiaries: "800+", regions: "6" },
  },
  {
    title: "Community Development",
    description:
      "Working hand-in-hand with local leaders to develop infrastructure, improve living conditions, and create sustainable community projects. From building schools to establishing cooperative farms, we invest in lasting community transformation.",
    image: "/programs/relief.svg",
    stats: { beneficiaries: "4,000+", regions: "20" },
  },
  {
    title: "Mental Health Support",
    description:
      "Providing accessible mental health services, counseling, and psychosocial support to individuals and communities affected by trauma, displacement, and hardship. We train community health workers in mental health first aid and run awareness campaigns to reduce stigma.",
    image: "/programs/images/Mental Health.png",
    stats: { beneficiaries: "600+", regions: "7" },
  },
  {
    title: "Child Protection",
    description:
      "Safeguarding vulnerable children from abuse, exploitation, and neglect through advocacy, community education, and direct intervention. We work with local authorities and families to create safe environments, establish child welfare systems, and provide rehabilitation support for at-risk children.",
    image: "/programs/education.svg",
    stats: { beneficiaries: "1,200+", regions: "9" },
  },
];

export default function ProgramsList() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            What We Do
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Creating Impact Across Communities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Each of our programs is thoughtfully designed to address the most
            pressing needs of underserved communities, creating sustainable
            and lasting change.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group overflow-hidden rounded-xl border border-border bg-white"
            >
              <div className="relative h-52 overflow-hidden bg-primary/10">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {program.description}
                </p>
                <div className="mt-4 flex gap-6">
                  <div>
                    <p className="text-lg font-bold text-primary">
                      {program.stats.beneficiaries}
                    </p>
                    <p className="text-xs text-muted">Beneficiaries</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">
                      {program.stats.regions}
                    </p>
                    <p className="text-xs text-muted">Regions</p>
                  </div>
                </div>
                <Link
                  href="/programs"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
