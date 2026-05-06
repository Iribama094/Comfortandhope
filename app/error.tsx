"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 text-body">
          We encountered an unexpected error. Our team has been notified — please
          try again, or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-light"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
