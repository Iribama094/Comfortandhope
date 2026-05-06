import PageHero from "../../components/PageHero";

export default function GalleryHero() {
  return (
    <PageHero
      eyebrow="Our Gallery"
      title="Moments of impact"
      italicWord="impact"
      description="A visual journey through our programs, events, and the communities we serve. Every photo tells a story of hope, resilience, and transformation."
      crumbs={[{ label: "Gallery" }]}
      variant="image"
      image={{
        src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2400&q=80",
        alt: "Children of an African community in a moment of joy",
      }}
    />
  );
}
