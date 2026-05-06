"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [animKey, setAnimKey] = useState(0);

  // Trigger a fade-only animation on path change without remounting subtree —
  // preserves browser scroll restoration and avoids re-running expensive effects.
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [pathname]);

  return (
    <div key={animKey} className="animate-page-fade">
      {children}
    </div>
  );
}
