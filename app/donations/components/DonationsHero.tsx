import PageHero from "../../components/PageHero";

export default function DonationsHero() {
  return (
    <PageHero
      eyebrow="Make a Difference"
      title="Where there is life, there is hope"
      italicWord="hope"
      description="Your generosity keeps hope alive. Every gift becomes a bridge between someone's pain and their possibility — feeding children, restoring dignity, sheltering families, and empowering communities."
      crumbs={[{ label: "Donate" }]}
      size="lg"
      variant="image"
      image={{
        src: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=2400&q=80",
        alt: "Children in a community supported by Comfort & Hope Foundation",
      }}
    />
  );
}
