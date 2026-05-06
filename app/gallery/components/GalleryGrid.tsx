"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const categories = [
  "All",
  "Education",
  "Healthcare",
  "Relief",
  "Clean Water",
  "Events",
  "Community",
];

const galleryItems = [
  { id: 1, category: "Education", caption: "Girl Child Education Workshop — Kaduna, 2025" },
  { id: 2, category: "Healthcare", caption: "Medical Outreach — Abuja Community Center" },
  { id: 3, category: "Relief", caption: "Emergency Relief Distribution — Delta State" },
  { id: 4, category: "Clean Water", caption: "Water Well Commissioning — Benue State" },
  { id: 5, category: "Events", caption: "Annual Charity Gala 2025" },
  { id: 6, category: "Community", caption: "Community Development Meeting — Lagos" },
  { id: 7, category: "Education", caption: "Scholarship Award Ceremony" },
  { id: 8, category: "Healthcare", caption: "Maternal Care Program — Enugu" },
  { id: 9, category: "Events", caption: "Volunteer Appreciation Day" },
  { id: 10, category: "Relief", caption: "Food Distribution Drive — Kano" },
  { id: 11, category: "Clean Water", caption: "Sanitation Facility Opening — Plateau" },
  { id: 12, category: "Community", caption: "Skills Training Graduation — Ogun State" },
  { id: 13, category: "Education", caption: "Back-to-School Campaign Launch" },
  { id: 14, category: "Healthcare", caption: "Free Eye Screening Campaign" },
  { id: 15, category: "Events", caption: "Partners Networking Dinner" },
];

const categoryColors: Record<string, string> = {
  Education: "text-blue-600 bg-blue-50",
  Healthcare: "text-rose-600 bg-rose-50",
  Relief: "text-orange-600 bg-orange-50",
  "Clean Water": "text-cyan-600 bg-cyan-50",
  Events: "text-purple-600 bg-purple-50",
  Community: "text-green-600 bg-green-50",
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const countFor = (cat: string) =>
    cat === "All"
      ? galleryItems.length
      : galleryItems.filter((i) => i.category === cat).length;

  // Close lightbox on Escape
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => i === null ? 0 : (i + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => i === null ? 0 : (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filtered.length]);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-surface text-body hover:bg-border"
                }`}
              >
                {cat}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-xs font-semibold leading-none ${
                    active ? "bg-white/25 text-white" : "bg-border text-muted"
                  }`}
                >
                  {countFor(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p className="mt-6 text-sm text-muted">
          Showing {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {/* Masonry-style Grid */}
        <div className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => {
            const heights = ["h-56", "h-72", "h-64", "h-80", "h-60"];
            const height = heights[index % heights.length];
            const colorClass = categoryColors[item.category] ?? "text-primary bg-primary/10";

            return (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Image placeholder */}
                <div className={`${height} relative overflow-hidden bg-gradient-to-br from-primary/8 to-primary/20`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-20">📷</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${colorClass}`}>
                    {item.category}
                  </span>
                  <p className="mt-2 text-sm text-body">{item.caption}</p>
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-muted">
            No photos found in this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => i === null ? 0 : (i - 1 + filtered.length) % filtered.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white transition-colors hover:bg-white/20"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => i === null ? 0 : (i + 1) % filtered.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white transition-colors hover:bg-white/20"
            aria-label="Next"
          >
            ›
          </button>

          <div
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex aspect-[4/3] w-full max-w-3xl items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/40">
              <span className="text-8xl opacity-40">📷</span>
            </div>
            <div className="mt-4 text-center">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                {filtered[lightboxIndex].category}
              </span>
              <p className="mt-2 text-lg font-medium text-white">
                {filtered[lightboxIndex].caption}
              </p>
              <p className="mt-1 text-xs text-white/50">
                {lightboxIndex + 1} of {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
