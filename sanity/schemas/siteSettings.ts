import { defineType, defineField, defineArrayMember } from "sanity";

/**
 * Singleton document for global, editable text snippets across the site.
 * Editors edit ONE document; pages read from it.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Site Settings",
      readOnly: true,
      hidden: true,
    }),

    // ───────── Hero rotating quotes ─────────
    defineField({
      name: "heroSlides",
      title: "Hero Slides (rotating)",
      description: "Each slide pairs a background image with a short quote.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "slide",
          fields: [
            defineField({ name: "lead", type: "string", title: "Lead text", validation: (R) => R.required() }),
            defineField({ name: "accent", type: "string", title: "Accent (italicized)", validation: (R) => R.required() }),
            defineField({
              name: "image",
              title: "Background image",
              type: "image",
              options: { hotspot: true },
              validation: (R) => R.required(),
            }),
            defineField({ name: "alt", type: "string", title: "Image alt text" }),
          ],
          preview: {
            select: { title: "lead", subtitle: "accent", media: "image" },
            prepare: ({ title, subtitle, media }) => ({
              title: `"${title} ${subtitle}"`,
              media,
            }),
          },
        }),
      ],
    }),

    // ───────── Hero subtitle / CTA copy ─────────
    defineField({
      name: "heroDescription",
      title: "Hero description (under quote)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "trustLine",
      title: "Trust line (bottom of hero)",
      type: "string",
      description: "e.g. 'Registered Nigerian nonprofit · Trusted by 5,000+ supporters'",
    }),

    // ───────── Mission section ─────────
    defineField({
      name: "missionTitle",
      title: "Mission section title",
      type: "string",
    }),
    defineField({
      name: "missionItalicWord",
      title: "Italicized word in mission title",
      type: "string",
    }),
    defineField({
      name: "missionBody",
      title: "Mission section body",
      type: "text",
      rows: 4,
    }),

    // ───────── Stats ─────────
    defineField({
      name: "stats",
      title: "Impact stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "label", type: "string", validation: (R) => R.required() }),
            defineField({ name: "value", type: "number", validation: (R) => R.required() }),
            defineField({ name: "suffix", type: "string", initialValue: "+" }),
            defineField({ name: "trendValue", type: "string", title: "Trend label (e.g. '+1,200')" }),
            defineField({ name: "trendPeriod", type: "string", title: "Trend period (e.g. 'this year')" }),
          ],
        }),
      ],
    }),

    // ───────── Donation goal ─────────
    defineField({
      name: "donationGoal",
      title: "Donation goal (homepage totalizer)",
      type: "object",
      fields: [
        defineField({ name: "currency", type: "string", initialValue: "₦" }),
        defineField({ name: "raised", type: "number", title: "Amount raised this period" }),
        defineField({ name: "goal", type: "number", title: "Target goal" }),
        defineField({ name: "supporters", type: "number", title: "Supporter count" }),
        defineField({ name: "periodLabel", type: "string", title: "Period (e.g. 'May 2026 fundraising goal')" }),
      ],
    }),

    // ───────── Donation amounts ─────────
    defineField({
      name: "donationAmounts",
      title: "Donation amount tiers (per currency)",
      type: "object",
      fields: [
        defineField({ name: "ngn", type: "array", of: [{ type: "number" }], title: "NGN amounts" }),
        defineField({ name: "usd", type: "array", of: [{ type: "number" }], title: "USD amounts" }),
        defineField({ name: "gbp", type: "array", of: [{ type: "number" }], title: "GBP amounts" }),
      ],
    }),

    // ───────── Transparency strip ─────────
    defineField({
      name: "transparencyItems",
      title: "Transparency strip cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "transparencyItem",
          fields: [
            defineField({ name: "value", type: "string", title: "Big value", validation: (R) => R.required() }),
            defineField({ name: "label", type: "string", title: "Description", validation: (R) => R.required() }),
            defineField({ name: "href", type: "string", title: "Optional link" }),
          ],
        }),
      ],
    }),

    // ───────── CTA section ─────────
    defineField({ name: "ctaTitle", title: "Bottom CTA title", type: "string" }),
    defineField({ name: "ctaItalicWord", title: "Italicized word in CTA", type: "string" }),
    defineField({ name: "ctaBody", title: "CTA body text", type: "text", rows: 2 }),

    // ───────── Footer ─────────
    defineField({ name: "footerTagline", title: "Footer tagline (bio)", type: "text", rows: 3 }),
    defineField({
      name: "contactInfo",
      title: "Contact info",
      type: "object",
      fields: [
        defineField({ name: "address", type: "text", rows: 2 }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "email", type: "string" }),
      ],
    }),

    // ───────── Partners ─────────
    defineField({
      name: "partners",
      title: "Partner names (homepage marquee)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
