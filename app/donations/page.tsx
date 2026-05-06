import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationsHero from "./components/DonationsHero";
import DonateSection from "./components/DonateSection";
import DonationImpact from "./components/DonationImpact";
import WaysToGive from "./components/WaysToGive";
import WhereItGoes from "./components/WhereItGoes";
import DonationsCTA from "./components/DonationsCTA";

export const metadata: Metadata = {
  title: "Donate - Comfort & Hope Foundation",
  description:
    "Donate to Comfort & Hope Foundation and help empower communities through education, healthcare, clean water, and emergency relief.",
};

export default function DonationsPage() {
  return (
    <>
      <Navbar />
      <DonationsHero />
      <DonateSection />
      <DonationImpact />
      <WaysToGive />
      <WhereItGoes />
      <DonationsCTA />
      <Footer />
    </>
  );
}
