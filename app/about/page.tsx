import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import MissionVision from "./components/MissionVision";
import Team from "./components/Team";
import AboutCTA from "./components/AboutCTA";

export const metadata: Metadata = {
  title: "About Us - Comfort & Hope Foundation",
  description:
    "Learn about Comfort & Hope Foundation's story, mission, values, and the team dedicated to empowering communities.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Team />
      <AboutCTA />
      <Footer />
    </>
  );
}
