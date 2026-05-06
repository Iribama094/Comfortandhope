import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpdatesHero from "./components/UpdatesHero";
import NewsList from "./components/NewsList";
import UpcomingEvents from "./components/UpcomingEvents";

export const metadata: Metadata = {
  title: "Updates & News - Comfort & Hope Foundation",
  description:
    "Latest news, articles, events, testimonials, and updates from Comfort & Hope Foundation.",
};

export default function UpdatesPage() {
  return (
    <>
      <Navbar />
      <UpdatesHero />
      <NewsList />
      <UpcomingEvents />
      <Footer />
    </>
  );
}
