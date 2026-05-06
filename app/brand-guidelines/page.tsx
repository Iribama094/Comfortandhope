import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Shield,
  Star,
  Zap,
  Compass,
  Target,
  Eye,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Quote,
  Upload,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Brand Guidelines - Comfort & Hope Foundation",
  description:
    "Official brand guidelines for Comfort & Hope Foundation. Reference for logo usage, color palette, typography, voice, and visual standards.",
};

const primaryColors = [
  { name: "Primary", hex: "#2F6B3C", css: "bg-primary", text: "text-white" },
  {
    name: "Primary Dark",
    hex: "#1F3A2B",
    css: "bg-primary-dark",
    text: "text-white",
  },
  {
    name: "Primary Light",
    hex: "#3D8A4E",
    css: "bg-primary-light",
    text: "text-white",
  },
];

const accentColors = [
  { name: "Accent", hex: "#F4B400", css: "bg-accent", text: "text-primary-dark" },
  {
    name: "Accent Dark",
    hex: "#D9A000",
    css: "bg-accent-dark",
    text: "text-primary-dark",
  },
  {
    name: "Accent Light",
    hex: "#FFD54F",
    css: "bg-accent-light",
    text: "text-primary-dark",
  },
];

const neutralColors = [
  {
    name: "Background",
    hex: "#FFFFFF",
    css: "bg-background",
    text: "text-foreground",
    border: true,
  },
  {
    name: "Foreground",
    hex: "#1F3A2B",
    css: "bg-foreground",
    text: "text-white",
  },
  { name: "Body", hex: "#4B5563", css: "bg-body", text: "text-white" },
  { name: "Muted", hex: "#6B7280", css: "bg-muted", text: "text-white" },
  {
    name: "Border",
    hex: "#E5E7EB",
    css: "bg-border",
    text: "text-foreground",
    border: true,
  },
  {
    name: "Surface",
    hex: "#F9FAFB",
    css: "bg-surface",
    text: "text-foreground",
    border: true,
  },
];

const typeScale = [
  {
    label: "Display",
    size: "text-5xl",
    weight: "font-bold",
    spec: "48px / Bold",
    sample: "Where there is life, there is hope.",
  },
  {
    label: "Heading 1",
    size: "text-4xl",
    weight: "font-bold",
    spec: "36px / Bold",
    sample: "Transforming Lives Together",
  },
  {
    label: "Heading 2",
    size: "text-3xl",
    weight: "font-bold",
    spec: "30px / Bold",
    sample: "Our Mission and Vision",
  },
  {
    label: "Heading 3",
    size: "text-xl",
    weight: "font-bold",
    spec: "20px / Bold",
    sample: "Community Impact Programs",
  },
  {
    label: "Section Label",
    size: "text-sm",
    weight: "font-semibold",
    spec: "14px / Semibold / Uppercase / Tracking Wide",
    sample: "OUR PROGRAMS",
    uppercase: true,
  },
  {
    label: "Body",
    size: "text-sm",
    weight: "font-normal",
    spec: "14px / Regular / Relaxed Leading",
    sample:
      "Comfort & Hope Foundation is a faith-driven charitable organization committed to transforming the lives of vulnerable populations through compassion, empowerment, and sustainable impact.",
  },
  {
    label: "Small / Caption",
    size: "text-xs",
    weight: "font-medium",
    spec: "12px / Medium",
    sample: "Lagos, Nigeria  •  January 15, 2025",
  },
];

const sampleIcons = [
  { Icon: Heart, name: "Heart" },
  { Icon: Shield, name: "Shield" },
  { Icon: Star, name: "Star" },
  { Icon: Zap, name: "Zap" },
  { Icon: Compass, name: "Compass" },
  { Icon: Target, name: "Target" },
  { Icon: Eye, name: "Eye" },
  { Icon: Sparkles, name: "Sparkles" },
  { Icon: MapPin, name: "MapPin" },
  { Icon: Phone, name: "Phone" },
  { Icon: Mail, name: "Mail" },
  { Icon: Calendar, name: "Calendar" },
  { Icon: Clock, name: "Clock" },
  { Icon: Users, name: "Users" },
  { Icon: ArrowRight, name: "ArrowRight" },
  { Icon: ChevronRight, name: "ChevronRight" },
  { Icon: ChevronDown, name: "ChevronDown" },
  { Icon: Menu, name: "Menu" },
  { Icon: X, name: "X" },
  { Icon: Quote, name: "Quote" },
  { Icon: Upload, name: "Upload" },
  { Icon: Check, name: "Check" },
];

export default function BrandGuidelinesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Brand Guidelines</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
              Brand Guidelines
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              A comprehensive reference for maintaining visual and verbal
              consistency across all Comfort & Hope Foundation materials.
            </p>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Identity
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Logo
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            The Comfort & Hope logo is a two-line lockup consisting of the icon mark
            and the foundation name. It should always appear as a unified unit
            with consistent spacing.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Light variant */}
            <div className="rounded-xl border border-border bg-white p-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-muted">
                On Light Backgrounds
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-cropped.svg"
                  alt="Comfort & Hope Logo"
                  width={48}
                  height={48}
                />
                <div>
                  <p
                    className="font-bold leading-snug text-primary-dark"
                    style={{ fontSize: "17px" }}
                  >
                    COMFORT & HOPE
                  </p>
                  <p
                    className="leading-tight text-primary"
                    style={{ fontSize: "11px" }}
                  >
                    Foundation
                  </p>
                </div>
              </div>
            </div>

            {/* Dark variant */}
            <div className="rounded-xl bg-primary-dark p-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-white/40">
                On Dark Backgrounds
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-cropped.svg"
                  alt="Comfort & Hope Logo"
                  width={48}
                  height={48}
                  className="brightness-0 invert"
                />
                <div>
                  <p
                    className="font-bold leading-snug text-white"
                    style={{ fontSize: "17px" }}
                  >
                    COMFORT & HOPE
                  </p>
                  <p
                    className="leading-tight text-white/60"
                    style={{ fontSize: "11px" }}
                  >
                    Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Rules */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Minimum Size
              </h3>
              <p className="mt-2 text-sm text-body">
                The logo should never be reproduced smaller than 120px wide for
                digital or 30mm for print to ensure legibility.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Clear Space
              </h3>
              <p className="mt-2 text-sm text-body">
                Maintain a minimum clear space equal to the height of the icon
                mark on all sides of the logo lockup.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Misuse
              </h3>
              <p className="mt-2 text-sm text-body">
                Do not stretch, rotate, recolor, add effects to, or separate
                elements of the logo. Always use approved files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Visual System
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Color Palette
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Our colors reflect growth, warmth, and trust. The primary green
            represents hope and life, while the golden accent conveys energy and
            optimism.
          </p>

          {/* Primary */}
          <h3 className="mt-14 text-lg font-semibold text-foreground">
            Primary
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {primaryColors.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-xl border border-border">
                <div className={`${c.css} h-24`} />
                <div className="bg-white p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Accent */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">
            Accent
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {accentColors.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-xl border border-border">
                <div className={`${c.css} h-24`} />
                <div className="bg-white p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Neutrals */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">
            Neutrals
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {neutralColors.map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div
                  className={`${c.css} h-20 ${c.border ? "border-b border-border" : ""}`}
                />
                <div className="bg-white p-3">
                  <p className="text-xs font-semibold text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-muted">
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Type System
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Typography
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            We use Inter as our sole typeface. Its clean, modern design ensures
            readability across all screen sizes and print formats.
          </p>

          <div className="mt-14 space-y-0 divide-y divide-border overflow-hidden rounded-xl border border-border bg-white">
            {typeScale.map((t) => (
              <div key={t.label} className="flex flex-col gap-4 p-6 md:flex-row md:items-baseline md:gap-10">
                <div className="shrink-0 md:w-48">
                  <p className="text-xs font-semibold text-primary">
                    {t.label}
                  </p>
                  <p className="mt-1 text-[10px] text-muted">{t.spec}</p>
                </div>
                <p
                  className={`${t.size} ${t.weight} leading-snug text-foreground ${t.uppercase ? "uppercase tracking-wide" : ""}`}
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-white p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Font Loading
            </h3>
            <p className="mt-2 text-sm text-body">
              Inter is loaded via Google Fonts with the{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-primary">
                subsets: [&quot;latin&quot;]
              </code>{" "}
              configuration. It is applied globally through a CSS variable{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-primary">
                --font-inter
              </code>{" "}
              with system-ui as the fallback stack.
            </p>
          </div>
        </div>
      </section>

      {/* Iconography */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Visual Elements
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Iconography
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            We use Lucide React for all iconography. Icons should be used at
            consistent sizes and rendered in brand colors.
          </p>

          <div className="mt-14 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11">
            {sampleIcons.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="text-[10px] text-muted">{name}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Standard Sizes
              </h3>
              <div className="mt-3 space-y-2">
                <p className="flex items-center gap-3 text-sm text-body">
                  <Heart className="h-3 w-3 text-primary" />
                  12px — Inline with small text
                </p>
                <p className="flex items-center gap-3 text-sm text-body">
                  <Heart className="h-3.5 w-3.5 text-primary" />
                  14px — Inline with body text
                </p>
                <p className="flex items-center gap-3 text-sm text-body">
                  <Heart className="h-5 w-5 text-primary" />
                  20px — Standalone or cards
                </p>
                <p className="flex items-center gap-3 text-sm text-body">
                  <Heart className="h-8 w-8 text-primary" />
                  32px — Feature highlights
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Icon Containers
              </h3>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-7 w-7 text-primary" />
                </div>
              </div>
              <p className="mt-3 text-sm text-body">
                Icons placed in circular containers use{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  bg-primary/10
                </code>{" "}
                backgrounds with{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  rounded-full
                </code>
                .
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Color Usage
              </h3>
              <p className="mt-2 text-sm text-body">
                Icons default to{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  text-primary
                </code>{" "}
                on light backgrounds and{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  text-white
                </code>{" "}
                on dark backgrounds. Muted icons use{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  text-primary/20
                </code>{" "}
                for decorative purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice & Tone */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Verbal Identity
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Voice &amp; Tone
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Our voice is consistent across all communications. It reflects who
            we are as an organization and how we connect with the people we
            serve.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                trait: "Compassionate",
                description:
                  "We speak with warmth and empathy. Every word reflects our genuine care for the people and communities we serve.",
              },
              {
                trait: "Faith-Driven",
                description:
                  "Our language is grounded in faith and hope. We speak with conviction about our mission while remaining inclusive and welcoming.",
              },
              {
                trait: "Action-Oriented",
                description:
                  "We use strong, clear language that inspires people to act. Headings are imperative. Copy drives toward engagement.",
              },
              {
                trait: "Professional",
                description:
                  "We maintain a professional tone that builds trust and credibility, balancing warmth with authority.",
              },
            ].map((v) => (
              <div
                key={v.trait}
                className="rounded-xl border border-border bg-white p-6"
              >
                <p className="text-lg font-semibold text-foreground">
                  {v.trait}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Check className="h-4 w-4" />
                Writing Do&apos;s
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Use active voice and direct language",
                  "Lead with the impact or benefit",
                  "Keep sentences concise and purposeful",
                  "Address the reader directly with \"you\" and \"your\"",
                  "Use commas and periods for natural pauses",
                  "Capitalize Comfort & Hope programs and initiatives by name",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-red-600">
                <X className="h-4 w-4" />
                Writing Don&apos;ts
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Use em dashes, they feel robotic and impersonal",
                  "Use jargon or overly technical language",
                  "Make promises the organization cannot keep",
                  "Use language that patronizes beneficiaries",
                  "Overuse exclamation marks or emojis",
                  "Write in passive voice when active is clearer",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-white p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Key Phrases
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Where there is life, there is hope.",
                "Transforming lives",
                "Faith-driven impact",
                "Sustainable change",
                "Compassion in action",
                "Empowering communities",
                "Restoring dignity",
                "Building futures",
              ].map((phrase) => (
                <span
                  key={phrase}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Components */}
      <section className="bg-surface px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Layout System
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Spacing &amp; Components
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Consistent spacing and reusable component patterns create a cohesive
            experience across all pages.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Layout */}
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Page Layout
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-sm text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Max container width:{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                    max-w-7xl
                  </code>{" "}
                  (1280px)
                </li>
                <li className="flex items-start gap-2 text-sm text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Horizontal padding:{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                    px-6
                  </code>{" "}
                  (24px)
                </li>
                <li className="flex items-start gap-2 text-sm text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Section padding:{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                    py-20 md:py-28
                  </code>{" "}
                  (80/112px)
                </li>
                <li className="flex items-start gap-2 text-sm text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Content max width:{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-primary">
                    max-w-3xl
                  </code>{" "}
                  for text-heavy sections
                </li>
              </ul>
            </div>

            {/* Section backgrounds */}
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">
                Section Backgrounds
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded border border-border bg-white" />
                  <p className="text-sm text-body">
                    White — Default content sections
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-surface border border-border" />
                  <p className="text-sm text-body">
                    Surface — Alternating sections for visual rhythm
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-primary-dark" />
                  <p className="text-sm text-body">
                    Primary Dark — Hero sections and CTAs
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-primary" />
                  <p className="text-sm text-body">
                    Primary — Accent blocks and event headers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">
            Buttons
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                Primary
              </p>
              <span className="inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark">
                Donate Now
              </span>
              <p className="mt-4 text-xs text-muted">
                Accent background, primary-dark text, rounded-full, hover
                transitions to accent-dark.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                Secondary
              </p>
              <span className="inline-block rounded-full border border-primary px-7 py-3 text-sm font-medium text-primary">
                Learn More
              </span>
              <p className="mt-4 text-xs text-muted">
                Primary border, primary text, transparent background, hover adds
                primary/5 fill.
              </p>
            </div>
            <div className="rounded-xl bg-primary-dark p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-white/40">
                On Dark
              </p>
              <span className="inline-block rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white">
                Get Involved
              </span>
              <p className="mt-4 text-xs text-white/40">
                White/30 border, white text, hover adds white/10 background.
              </p>
            </div>
          </div>

          {/* Cards */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">
            Cards
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                Standard Card
              </p>
              <div className="rounded-xl border border-border bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">
                  Card Heading
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Card body text uses relaxed line height for comfortable
                  reading.
                </p>
              </div>
              <p className="mt-4 text-xs text-muted">
                rounded-xl, border-border, bg-white, p-6 or p-8 padding.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                Tag / Badge
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Category Tag
                </span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary-dark">
                  Accent Tag
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
                  Outlined Tag
                </span>
              </div>
              <p className="mt-4 text-xs text-muted">
                Tags use rounded-full with various background and text color
                combinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            In Practice
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Brand Applications
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Examples of how the Comfort & Hope brand is applied across print, digital,
            and merchandise. All applications should follow the guidelines
            outlined above.
          </p>

          {/* Stationery */}
          <h3 className="mt-14 text-lg font-semibold text-foreground">
            Stationery
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {[
              { label: "Business Card", aspect: "aspect-[3.5/2]" },
              { label: "Letterhead", aspect: "aspect-[8.5/11]" },
              { label: "Envelope", aspect: "aspect-[9.5/4.125]" },
            ].map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <div
                  className={`${item.aspect} flex items-center justify-center bg-surface`}
                >
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-border">
                      <Image
                        src="/logo-cropped.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="opacity-30"
                      />
                    </div>
                    <p className="mt-2 text-xs text-muted">
                      {item.label} Preview
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Design placeholder
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Merchandise */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">
            Merchandise
          </h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "T-Shirt", desc: "Front logo placement, centered chest" },
              { label: "Tote Bag", desc: "Full logo lockup, center print" },
              { label: "Cap / Hat", desc: "Icon mark only, embroidered" },
              { label: "Water Bottle", desc: "Wraparound logo, single color" },
            ].map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="flex aspect-square items-center justify-center bg-surface">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white">
                      <Image
                        src="/logo-cropped.svg"
                        alt=""
                        width={28}
                        height={28}
                        className="opacity-30"
                      />
                    </div>
                    <p className="mt-3 text-xs text-muted">{item.label}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Digital & Event */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">
            Digital &amp; Event Materials
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Social Media Post",
                desc: "1080x1080px, logo in corner, brand colors",
                aspect: "aspect-square",
              },
              {
                label: "Email Newsletter",
                desc: "600px wide, logo header, accent CTA buttons",
                aspect: "aspect-[3/4]",
              },
              {
                label: "Event Banner",
                desc: "Wide format, primary-dark background, large logo",
                aspect: "aspect-[16/9]",
              },
              {
                label: "Presentation Slide",
                desc: "16:9 format, title slide with logo lockup",
                aspect: "aspect-video",
              },
              {
                label: "ID Badge / Lanyard",
                desc: "Portrait format, photo area, role label",
                aspect: "aspect-[2.125/3.375]",
              },
              {
                label: "Pull-Up Banner",
                desc: "Vertical, full bleed primary-dark, large icon mark",
                aspect: "aspect-[1/2.5]",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <div
                  className={`${item.aspect} flex max-h-64 items-center justify-center bg-primary-dark/5`}
                >
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed border-primary/20">
                      <Image
                        src="/logo-cropped.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="opacity-20"
                      />
                    </div>
                    <p className="mt-2 text-[10px] text-muted">Preview</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline CTA */}
      <section className="bg-primary-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Our Tagline
          </p>
          <p className="mt-6 text-3xl font-bold leading-snug text-white md:text-4xl">
            &ldquo;Where there is life, there is hope.&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-lg text-white/70">
            This tagline appears in our footer and represents the core belief
            that drives everything we do at Comfort & Hope Foundation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              About Comfort & Hope
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
