import PageHero from "../../components/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Us"
      title="Get in touch"
      italicWord="touch"
      description="Whether you want to donate, volunteer, partner, or simply learn more about our work, we would love to hear from you. Reach out and let's walk together in hope."
      crumbs={[{ label: "Contact" }]}
      variant="image"
      image={{
        src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2400&q=80",
        alt: "African community members and children",
      }}
    />
  );
}
