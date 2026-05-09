import PageHero from "../../components/PageHero";

export default function FAQsHero() {
  return (
    <PageHero
      eyebrow="Help Center"
      title="Frequently asked questions"
      italicWord="questions"
      description="Providing clarity, building trust, spreading hope. Find answers to common questions about Comfort & Hope, our programs, donations, volunteering, and partnerships."
      crumbs={[{ label: "FAQs" }]}
      variant="image"
      image={{
        src: "https://images.unsplash.com/photo-1617056239820-8ce90ba48193?auto=format&fit=crop&w=2400&q=80",
        alt: "A young girl smiling, supported by Comfort & Hope",
      }}
    />
  );
}
