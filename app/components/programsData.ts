export interface Program {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  stat: { value: string; label: string };
  highlights: string[];
  locations: string[];
  accent: string;
}

export const programs: Program[] = [
  {
    slug: "girl-child-education",
    title: "Girl Child Education",
    tagline: "Every girl. Every classroom. Every chance.",
    description:
      "Empowering young girls through quality education, scholarships, and mentorship.",
    longDescription:
      "Across Northern Nigeria, millions of girls are out of school due to economic pressure, early marriage, and cultural barriers. Our Girl Child Education program tackles the problem from three angles: full scholarships covering tuition, supplies, and uniforms; mentorship pairings with women leaders; and community engagement to shift family attitudes around girls' schooling. We measure success by retention to secondary completion — not just enrolment.",
    image: "/programs/images/Girl Child.png",
    heroImage:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2000&q=80",
    stat: { value: "1,400+", label: "girls enrolled" },
    highlights: [
      "Full scholarships through secondary school",
      "Monthly mentorship from women leaders",
      "Family stipends to offset opportunity cost",
      "Annual back-to-school supply kits",
    ],
    locations: ["Kaduna", "Kano", "Borno", "Sokoto"],
    accent: "from-rose-500/20 to-rose-600/30",
  },
  {
    slug: "healthcare-access",
    title: "Healthcare Access",
    tagline: "Care that travels to the people who need it.",
    description:
      "Delivering essential medical services, vaccinations, and maternal care to remote and underserved areas.",
    longDescription:
      "More than 60% of rural Nigerians live more than 10 km from the nearest functional clinic. Our Healthcare Access program runs mobile medical outreach, maternal-health clinics, and a community health-worker training pipeline that places trained locals back in their own villages. We focus on what catches preventable deaths early: antenatal care, malaria treatment, and child vaccination.",
    image: "/programs/images/Health Care Access.png",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80",
    stat: { value: "12,000+", label: "patients served annually" },
    highlights: [
      "Monthly mobile medical outreach in 30+ villages",
      "Maternal & child-health clinics",
      "Community health-worker training program",
      "Free vaccinations and malaria treatment",
    ],
    locations: ["Enugu", "Abuja", "Cross River", "Plateau"],
    accent: "from-rose-500/20 to-pink-500/30",
  },
  {
    slug: "clean-water-initiative",
    title: "Clean Water Initiative",
    tagline: "A well changes a village. A village changes everything.",
    description:
      "Building sustainable water wells and sanitation facilities to ensure communities have access to clean water.",
    longDescription:
      "When women and girls walk hours each day for water, schooling and economic activity collapse. Our Clean Water Initiative drills boreholes, installs solar-powered pumps, and trains village water committees on long-term maintenance — because a well that breaks in two years isn't a solution. We commission only when the maintenance plan is funded for five years.",
    image: "/programs/images/Clean Water Initiative.png",
    heroImage:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=2000&q=80",
    stat: { value: "14", label: "wells commissioned this year" },
    highlights: [
      "Solar-pumped boreholes serving 1,000+ each",
      "Sanitation facilities co-located with schools",
      "Village water-committee training",
      "5-year maintenance funding before commission",
    ],
    locations: ["Benue", "Plateau", "Niger", "Bauchi"],
    accent: "from-cyan-500/20 to-blue-500/30",
  },
  {
    slug: "emergency-relief",
    title: "Emergency Relief",
    tagline: "First on the ground. Long after the cameras leave.",
    description:
      "Providing immediate food, shelter, and medical assistance to communities in crisis.",
    longDescription:
      "When floods, displacement, or other crises hit, the first 72 hours determine survival rates. Our Emergency Relief program pre-positions food, water, and medical supplies in three regional hubs and partners with local councils for 48-hour response. We then stay 6–12 months past the crisis to support rebuilding — the work most relief organizations don't do.",
    image: "/programs/images/Emergency Relief.png",
    heroImage:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2000&q=80",
    stat: { value: "48hr", label: "response time" },
    highlights: [
      "Pre-positioned supplies in 3 regional hubs",
      "Partnership with local emergency councils",
      "6–12 month rebuilding support",
      "Mental-health & trauma counseling",
    ],
    locations: ["Delta", "Borno", "Adamawa", "Edo"],
    accent: "from-orange-500/20 to-amber-500/30",
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
