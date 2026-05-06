import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransparencyStrip from "./components/TransparencyStrip";
import StakeholderPaths from "./components/StakeholderPaths";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
import BeneficiaryStory from "./components/BeneficiaryStory";
import LatestUpdate from "./components/LatestUpdate";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import DonationGoal from "./components/DonationGoal";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Comfort & Hope Foundation — Where There Is Life, There Is Hope",
  description:
    "Comfort & Hope Foundation empowers underserved communities in Nigeria through education, healthcare, emergency relief, clean water, and sustainable development programs.",
  openGraph: {
    title: "Comfort & Hope Foundation",
    description: "Empowering communities through hope and action.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TransparencyStrip />
        <StakeholderPaths />
        <Mission />
        <Programs />
        <Stats />
        <BeneficiaryStory />
        <LatestUpdate />
        <Testimonials />
        <DonationGoal />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
