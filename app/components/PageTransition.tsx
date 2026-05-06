"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [animKey, setAnimKey] = useState(0);
  const isInit = useRef(true);

  useEffect(() => {
    // Skip on initial render — no transition needed
    if (isInit.current) {
      isInit.current = false;
      return;
    }

    // 1. Force an instant (non-animated) scroll to the top of the new page.
    //    We temporarily override scroll-behavior so even if the browser or
    //    any CSS rule has smooth scrolling set, this jump is invisible.
    const html = document.documentElement;
    html.style.setProperty("scroll-behavior", "auto");
    window.scrollTo(0, 0);

    // 2. Restore auto scroll-behavior after the frame then trigger the fade-in
    //    so the new page content appears at the top, not mid-scroll.
    requestAnimationFrame(() => {
      html.style.removeProperty("scroll-behavior");
      setAnimKey((k) => k + 1);
    });
  }, [pathname]);

  return (
    <div key={animKey} className="animate-page-enter">
      {children}
    </div>
  );
}
