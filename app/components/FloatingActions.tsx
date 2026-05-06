"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isDonationsPage = pathname.startsWith("/donations");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Sticky Donate CTA — hidden on donations page itself */}
      {!isDonationsPage && (
        <Link
          href="/donations"
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/30 transition-all hover:bg-accent-dark hover:shadow-xl animate-fade-in"
        >
          <Heart className="h-4 w-4" />
          Donate Now
        </Link>
      )}

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-body shadow-md transition-all hover:bg-surface hover:text-primary animate-fade-in"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
