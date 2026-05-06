"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Heart } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/story", description: "How we began and where we're going" },
      { label: "Team", href: "/about/team", description: "The people behind the mission" },
      { label: "Board of Directors", href: "/about/board", description: "Governance and oversight" },
      { label: "Annual Reports", href: "/about/annual-report", description: "Audited financials & impact" },
      { label: "Compliance", href: "/about/compliance", description: "Registration & accountability" },
      { label: "Donor Rights", href: "/about/donor-rights", description: "How we treat your trust" },
    ],
  },
  { label: "Programs", href: "/programs" },
  {
    label: "Get Involved",
    href: "/volunteer",
    children: [
      { label: "Volunteer", href: "/volunteer", description: "Give your time and skills" },
      { label: "Volunteer Registration", href: "/volunteer/register", description: "Sign up today" },
      { label: "Become a Partner", href: "/partner", description: "For organizations & companies" },
      { label: "Partnership Types", href: "/partner/types", description: "Strategic, programmatic, or in-kind" },
      { label: "Why Partner With Us", href: "/partner/why", description: "Our value to partners" },
    ],
  },
  {
    label: "Updates",
    href: "/updates",
    children: [
      { label: "News & Articles", href: "/updates/news", description: "Latest from the field" },
      { label: "Upcoming Events", href: "/updates/events", description: "Galas, drives, and meet-ups" },
      { label: "Stories & Testimonials", href: "/updates/testimonials", description: "Voices from our communities" },
      { label: "Photo Gallery", href: "/gallery", description: "Visual moments of impact" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll on every route — transparent over the dark hero, then dark
  // frosted glass once scrolled past it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close dropdowns / mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Hover/focus open with a small close delay so users can move into the panel
  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // Visual: fully transparent over the hero on ALL pages, dark frosted glass
  // once the user has scrolled past it. No white bar anywhere.
  const transparent = !scrolled;

  const navBg = transparent
    ? "bg-transparent border-transparent"
    : "bg-primary-dark/80 backdrop-blur-xl border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.05)]";

  // All states use white text since bg is always dark or image
  const linkColor = "text-white/85 hover:text-white";
  const activeLinkColor = "text-white font-semibold";

  const logoTextPrimary = "text-white";
  const logoTextSecondary = "text-white/75";
  const logoFilter = "brightness-0 invert";

  return (
    <>
      {/* Skip-to-content for keyboard users */}
      <a
        href="#main"
        className="fixed top-2 left-2 z-[100] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${navBg}`}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5" aria-label="Comfort & Hope Foundation home">
            <Image
              src="/logo-cropped.svg"
              alt=""
              width={64}
              height={64}
              className={`h-14 w-14 shrink-0 transition-[filter] duration-300 ${logoFilter}`}
              priority
            />
            <div className="flex flex-col justify-center">
              <span className={`text-[20px] font-bold leading-snug tracking-wide transition-colors duration-300 ${logoTextPrimary}`}>
                COMFORT & HOPE
              </span>
              <span className={`text-[11px] uppercase tracking-[0.22em] leading-tight transition-colors duration-300 ${logoTextSecondary}`}>
                Outreach Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const expanded = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openWithDelay(item.label)}
                  onMouseLeave={() => item.children && closeWithDelay()}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-expanded={item.children ? expanded : undefined}
                    aria-haspopup={item.children ? "menu" : undefined}
                    onFocus={() => item.children && openWithDelay(item.label)}
                    className={`relative flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                      active ? activeLinkColor : linkColor
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Active underline */}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent" />
                  )}

                  {/* Mega-style dropdown */}
                  {item.children && expanded && (
                    <div
                      role="menu"
                      className="absolute left-1/2 top-full z-10 mt-2 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-2xl shadow-primary-dark/10 animate-fade-in"
                      onMouseEnter={() => openWithDelay(item.label)}
                      onMouseLeave={closeWithDelay}
                    >
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            role="menuitem"
                            className={`block rounded-lg px-3 py-2.5 transition-colors ${
                              childActive
                                ? "bg-primary/5"
                                : "hover:bg-surface"
                            }`}
                          >
                            <p className={`text-sm font-semibold ${childActive ? "text-primary" : "text-foreground"}`}>
                              {child.label}
                            </p>
                            {child.description && (
                              <p className="mt-0.5 text-xs leading-snug text-muted">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Link
              href="/donations"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[13px] font-semibold text-primary-dark shadow-lg shadow-accent/30 transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/50"
            >
              <Heart className="h-3.5 w-3.5 transition-transform duration-500 group-hover:scale-110" />
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-primary-dark/95 backdrop-blur-xl px-6 py-4 lg:hidden animate-fade-in max-h-[calc(100vh-84px)] overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.label} className="border-b border-white/10 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3 text-sm font-medium transition-colors ${
                        active ? "text-accent font-semibold" : "text-white/85 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() =>
                          setMobileExpanded((p) => (p === item.label ? null : item.label))
                        }
                        className="p-2 text-white/70 hover:text-white"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={mobileExpanded === item.label}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && mobileExpanded === item.label && (
                    <div className="mb-2 ml-2 border-l-2 border-accent/30 pl-4 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block py-2 text-sm transition-colors ${
                            pathname === child.href
                              ? "font-semibold text-accent"
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/donations"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-dark shadow-md"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </div>
        )}
      </nav>

      {/* Navbar is fixed-position; inner page heroes include top padding so the
          dark navbar floats over the dark hero seamlessly (no white spacer). */}
    </>
  );
}
