import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryHero from "./components/GalleryHero";
import GalleryGrid from "./components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery - Comfort & Hope Foundation",
  description:
    "Browse photos from Comfort & Hope's programs, events, and community activities across Nigeria.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </>
  );
}
