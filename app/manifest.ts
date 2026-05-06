import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Comfort & Hope Foundation",
    short_name: "C&H Foundation",
    description:
      "Empowering underserved communities in Nigeria through education, healthcare, clean water, and emergency relief.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2F6B3C",
    icons: [
      {
        src: "/logo-cropped.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
