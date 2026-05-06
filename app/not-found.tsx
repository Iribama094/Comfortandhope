import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-28 text-center">
        <div className="mx-auto max-w-md">
          {/* Large decorative number */}
          <p className="text-[120px] font-black leading-none text-primary/10 select-none">
            404
          </p>

          <h1 className="mt-2 text-3xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="mt-4 text-body">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. But hope is never lost — let&apos;s get you back on
            track.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-body transition-colors hover:bg-surface"
            >
              Contact Us
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-12 grid grid-cols-2 gap-3 text-left sm:grid-cols-3">
            {[
              { label: "Programs", href: "/programs" },
              { label: "Donate", href: "/donations" },
              { label: "Volunteer", href: "/volunteer" },
              { label: "Partner", href: "/partner" },
              { label: "Gallery", href: "/gallery" },
              { label: "FAQs", href: "/faqs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-border px-4 py-3 text-sm font-medium text-body transition-colors hover:border-primary/40 hover:bg-surface hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
