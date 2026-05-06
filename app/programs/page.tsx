import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgramsHero from "./components/ProgramsHero";
import ProgramsList from "./components/ProgramsList";
import ProgramsCTA from "./components/ProgramsCTA";

export const metadata: Metadata = {
  title: "Programs - Comfort & Hope Foundation",
  description:
    "Explore Comfort & Hope's programs in education, healthcare, emergency relief, clean water, and community development.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <ProgramsHero />
      <ProgramsList />
      <ProgramsCTA />
      <Footer />
    </>
  );
}
