import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial / Story",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", type: "string", description: "e.g. 'Beneficiary, Skills Training Program'" }),
    defineField({ name: "quote", type: "text", rows: 5, validation: (R) => R.required() }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Show on homepage testimonials carousel?",
      initialValue: false,
    }),
    defineField({ name: "order", type: "number", initialValue: 1 }),
  ],
  preview: {
    select: { title: "name", subtitle: "quote", media: "photo" },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle?.slice(0, 60) + (subtitle && subtitle.length > 60 ? "…" : ""),
      media,
    }),
  },
});
