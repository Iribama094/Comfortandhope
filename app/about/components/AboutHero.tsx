import PageHero from "../../components/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="Our Story"
      title="Built by people who believe"
      italicWord="believe"
      description="We are a team of dedicated individuals working together to create a world where everyone has the opportunity to thrive — with dignity, education, and hope."
      crumbs={[{ label: "About" }]}
      size="lg"
      variant="split"
      image={{
        src: "https://images.unsplash.com/photo-1617056239820-8ce90ba48193?auto=format&fit=crop&w=1600&q=80",
        alt: "A young girl smiling, supported by Comfort & Hope Foundation",
      }}
    />
  );
}
