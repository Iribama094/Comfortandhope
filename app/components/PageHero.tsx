import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

type Variant = "solid" | "image" | "split";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  italicWord?: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  /** "solid" = primary-dark slab. "image" = full-bleed background photo. "split" = side image card. */
  variant?: Variant;
  /** Required when variant is "image" or "split". */
  image?: { src: string; alt: string };
}

// Top padding accounts for the fixed ~84px navbar so it overlays the dark hero
const sizeClasses: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "pt-32 pb-16 md:pt-36 md:pb-20",
  md: "pt-32 pb-20 md:pt-40 md:pb-28",
  lg: "pt-36 pb-24 md:pt-44 md:pb-36",
};

const titleSizes: Record<NonNullable<PageHeroProps["size"]>, string> = {
  sm: "text-4xl md:text-5xl",
  md: "text-5xl md:text-6xl",
  lg: "text-5xl md:text-6xl lg:text-7xl",
};

export default function PageHero({
  eyebrow,
  title,
  italicWord,
  description,
  crumbs = [],
  children,
  align = "left",
  size = "md",
  variant = "solid",
  image,
}: PageHeroProps) {
  // Italicize trailing word in the title for editorial flair
  let renderedTitle: ReactNode = title;
  if (italicWord && typeof title === "string") {
    const idx = title.lastIndexOf(italicWord);
    if (idx >= 0) {
      const before = title.slice(0, idx);
      const after = title.slice(idx + italicWord.length);
      renderedTitle = (
        <>
          {before}
          <span className="italic text-accent">{italicWord}</span>
          {after}
        </>
      );
    }
  }

  const alignWrap = align === "center" ? "mx-auto text-center" : "";

  // ─── Split variant: text on the left, image card on the right ───
  if (variant === "split" && image) {
    return (
      <section className="relative overflow-hidden bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-primary-light/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {crumbs.length > 0 && (
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">{c.label}</Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              {eyebrow && (
                <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
                  {eyebrow}
                </span>
              )}
              <h1 className={`font-display mt-5 ${titleSizes[size]} font-medium leading-[1.05] tracking-tight text-white`}>
                {renderedTitle}
              </h1>
              {description && (
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
                  {description}
                </p>
              )}
              {children && <div className="mt-8">{children}</div>}
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/10 lg:aspect-[4/5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── Image variant: full-bleed background photo with overlay ───
  if (variant === "image" && image) {
    return (
      <section className={`relative overflow-hidden bg-primary-dark px-6 ${sizeClasses[size]}`}>
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
        </div>

        <div className={`relative mx-auto max-w-7xl ${alignWrap}`}>
          {crumbs.length > 0 && (
            <nav className={`mb-8 flex items-center gap-2 text-sm text-white/70 ${align === "center" ? "justify-center" : ""}`}>
              <Link href="/" className="hover:text-white">Home</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">{c.label}</Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
            {eyebrow && (
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md">
                {eyebrow}
              </span>
            )}
            <h1 className={`font-display mt-5 ${titleSizes[size]} font-medium leading-[1.05] tracking-tight text-white`}>
              {renderedTitle}
            </h1>
            {description && (
              <p className={`mt-6 text-lg leading-relaxed text-white/85 md:text-xl ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  // ─── Default solid variant ───
  return (
    <section className={`relative overflow-hidden bg-primary-dark px-6 ${sizeClasses[size]}`}>
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-primary-light/15 blur-3xl" />

      <div className={`relative mx-auto max-w-7xl ${alignWrap}`}>
        {crumbs.length > 0 && (
          <nav className={`mb-8 flex items-center gap-2 text-sm text-white/60 ${align === "center" ? "justify-center" : ""}`}>
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          {eyebrow && (
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
              {eyebrow}
            </span>
          )}
          <h1 className={`font-display mt-5 ${titleSizes[size]} font-medium leading-[1.05] tracking-tight text-white`}>
            {renderedTitle}
          </h1>
          {description && (
            <p className={`mt-6 text-lg leading-relaxed text-white/80 md:text-xl ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
