import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const linkColumns = [
  {
    title: "Foundation",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about/story" },
      { label: "Team", href: "/about/team" },
      { label: "Board", href: "/about/board" },
      { label: "Annual Reports", href: "/about/annual-report" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "/donations" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Programs", href: "/programs" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Donor Rights", href: "/about/donor-rights" },
      { label: "Compliance", href: "/about/compliance" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white">
      {/* Decorative ambient blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary-light/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      {/* Top: huge tagline + newsletter */}
      <div className="relative border-b border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Where there is life
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium leading-[1.05] text-white md:text-6xl">
              there is{" "}
              <span className="italic text-accent">hope</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Get updates on our programs, beneficiary stories, and upcoming
              events delivered to your inbox monthly.
            </p>
          </div>

          <form className="relative">
            <label className="block text-sm font-semibold text-white/85">
              Subscribe to our newsletter
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-colors focus:border-accent focus:bg-white/10 focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-accent/50"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-3 text-xs text-white/50">
              No spam. Unsubscribe anytime. Read our{" "}
              <Link href="/privacy" className="underline hover:text-white">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Middle: brand + columns + contact */}
      <div className="relative px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-cropped.svg"
                alt="Comfort & Hope Foundation"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 brightness-0 invert"
              />
              <div className="flex flex-col justify-center">
                <span className="text-base font-bold leading-snug text-white">
                  COMFORT & HOPE
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] leading-tight text-white/65">
                  Foundation
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Empowering communities, protecting children, and building a
              sustainable future for Nigeria — one program, one life at a time.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-primary-dark"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Contact strip */}
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  123 Hope Avenue, Suite 400 · Lagos State, NG 10112
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:+23412708888"
                  className="transition-colors hover:text-white"
                >
                  +234 (0)1 270 8888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:sulcom.ahiyemi@comfortandhope.org"
                  className="transition-colors hover:text-white"
                >
                  sulcom.ahiyemi@comfortandhope.org
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-white/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} Comfort & Hope Foundation. All rights
            reserved. · Registered Nigerian nonprofit.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Live & accepting donations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
