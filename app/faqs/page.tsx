import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQsHero from "./components/FAQsHero";
import FAQList from "./components/FAQList";

export const metadata: Metadata = {
  title: "FAQs - Comfort & Hope Foundation",
  description:
    "Frequently asked questions about Comfort & Hope Foundation, donations, volunteering, partnerships, and programs.",
};

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <FAQsHero />
      <FAQList />
      <Footer />
    </>
  );
}
