import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerHero from "./components/PartnerHero";
import WhyPartner from "./components/WhyPartner";
import PartnershipTypes from "./components/PartnershipTypes";
import PartnerImpact from "./components/PartnerImpact";
import PartnerForm from "./components/PartnerForm";

export const metadata: Metadata = {
  title: "Partner - Comfort & Hope Foundation",
  description:
    "Partner with Comfort & Hope Foundation to create lasting social impact through corporate, faith-based, NGO, or service partnerships.",
};

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <PartnerHero />
      <WhyPartner />
      <PartnershipTypes />
      <PartnerImpact />
      <PartnerForm />
      <Footer />
    </>
  );
}
