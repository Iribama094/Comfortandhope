import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "./components/ContactHero";
import ContactContent from "./components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Comfort & Hope Foundation",
  description:
    "Get in touch with Comfort & Hope Foundation. Reach out for program inquiries, volunteering, partnerships, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Footer />
    </>
  );
}
