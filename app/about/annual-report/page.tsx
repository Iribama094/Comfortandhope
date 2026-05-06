import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, Download } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Annual Reports — Comfort & Hope Foundation",
  description:
    "Download Comfort & Hope Foundation's audited annual reports — financials, program outcomes, and impact summaries.",
};

const reports = [
  {
    year: "2025",
    status: "Coming July 2026",
    available: false,
    summary: "Full-year audit and impact summary for the 2025 fiscal year.",
  },
  {
    year: "2024",
    status: "Available",
    available: true,
    summary: "Audited financials, program outcomes, and beneficiary stories.",
  },
  {
    year: "2023",
    status: "Available",
    available: true,
    summary: "Foundation year — establishment, registration, first programs.",
  },
];

export default function AnnualReportPage() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/about" className="hover:text-white">About</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Annual Reports</span>
          </nav>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
            Annual Reports
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Transparency is non-negotiable. Every year we publish audited
            financials, program outcomes, and a candid review of where we fell
            short — alongside where we made impact.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {reports.map((r) => (
              <div
                key={r.year}
                className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      {r.year} Annual Report
                    </h2>
                    <p className="mt-1 text-sm text-body">{r.summary}</p>
                  </div>
                </div>
                {r.available ? (
                  <button
                    disabled
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white opacity-90"
                    title="Download (placeholder — file to be uploaded)"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                ) : (
                  <span className="shrink-0 rounded-full bg-surface px-4 py-2 text-xs font-medium text-muted">
                    {r.status}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-surface p-6 text-sm text-body">
            <p className="font-semibold text-foreground">A note on this page</p>
            <p className="mt-2 leading-relaxed">
              We commit to publishing each year&apos;s report within 6 months of
              fiscal year-end. If you need detailed financial information for a
              specific period, please{" "}
              <Link href="/contact" className="font-medium text-primary underline">
                contact our team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
