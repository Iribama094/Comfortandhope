import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import FloatingActions from "./components/FloatingActions";
import PageTransition from "./components/PageTransition";
import { ToastProvider } from "./components/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE = "https://comfortandhope.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Comfort & Hope Foundation",
    template: "%s — Comfort & Hope Foundation",
  },
  description:
    "Empowering underserved communities in Nigeria through education, healthcare, clean water, and emergency relief.",
  keywords: [
    "Nigerian nonprofit",
    "charity",
    "donate Nigeria",
    "girl child education",
    "clean water",
    "healthcare access",
    "Comfort & Hope Foundation",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Comfort & Hope Foundation",
    description: "Where there is life, there is hope.",
    url: SITE,
    siteName: "Comfort & Hope Foundation",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort & Hope Foundation",
    description: "Where there is life, there is hope.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2F6B3C",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Comfort & Hope Foundation",
  alternateName: "C&H Foundation",
  url: SITE,
  logo: `${SITE}/logo-cropped.svg`,
  description:
    "Empowering underserved communities in Nigeria through education, healthcare, clean water, and emergency relief.",
  foundingDate: "2019",
  areaServed: { "@type": "Country", name: "Nigeria" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Hope Avenue, Suite 400",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    postalCode: "10112",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-1-270-8888",
    contactType: "customer service",
    email: "sulcom.ahiyemi@comfortandhope.org",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://facebook.com/comfortandhope",
    "https://twitter.com/comfortandhope",
    "https://instagram.com/comfortandhope",
    "https://linkedin.com/company/comfortandhope",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ToastProvider>
          <PageTransition>{children}</PageTransition>
          <FloatingActions />
          <CookieBanner />
        </ToastProvider>
      </body>
    </html>
  );
}
