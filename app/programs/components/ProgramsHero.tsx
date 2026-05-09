import PageHero from "../../components/PageHero";

export default function ProgramsHero() {
  return (
    <PageHero
      eyebrow="Our Work"
      title="Programs & initiatives"
      italicWord="initiatives"
      description="Comfort & Hope Foundation runs impactful programs designed to uplift communities, empower individuals, and create lasting change across education, healthcare, relief, and more."
      crumbs={[{ label: "Programs" }]}
      size="lg"
      variant="image"
      image={{
        src: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?auto=format&fit=crop&w=2400&q=80",
        alt: "Children in a Nigerian classroom",
      }}
    />
  );
}
