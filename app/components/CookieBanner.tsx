"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cah-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cah-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cah-cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-foreground">
                  We value your privacy
                </h3>
                <button
                  onClick={decline}
                  className="shrink-0 rounded-lg p-1 text-muted transition-colors hover:bg-surface hover:text-foreground"
                  aria-label="Close cookie banner"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                We use cookies to improve your experience, analyze site traffic,
                and support our mission. You can choose to accept or decline
                non-essential cookies.{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-primary hover:underline"
                >
                  Learn more
                </Link>
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={accept}
                  className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Decline Optional
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
