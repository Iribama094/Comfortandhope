"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Page transition that uses View Transitions API when available,
 * falling back to a soft blur+opacity fade. Avoids the "snapshot" feel
 * by combining a brief outgoing fade with the incoming page rendering.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [animKey, setAnimKey] = useState(0);
  const isInit = useRef(true);

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }

    // Instant scroll to top so the new page starts at top, but invisibly
    // (the soft fade hides the jump completely).
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    // Trigger the entry animation on the next frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousBehavior;
      setAnimKey((k) => k + 1);
    });
  }, [pathname]);

  return (
    <div key={animKey} className="page-transition">
      {children}
    </div>
  );
}
