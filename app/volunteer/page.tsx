import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VolunteerHero from "./components/VolunteerHero";
import WhyVolunteer from "./components/WhyVolunteer";
import VolunteerForm from "./components/VolunteerForm";
import VolunteerGuidelines from "./components/VolunteerGuidelines";

export const metadata: Metadata = {
  title: "Volunteer - Comfort & Hope Foundation",
  description:
    "Join Comfort & Hope as a volunteer. Make a direct impact in communities through education, healthcare, relief, and more.",
};

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <VolunteerHero />
      <WhyVolunteer />
      <VolunteerForm />
      <VolunteerGuidelines />
      <Footer />
    </>
  );
}
