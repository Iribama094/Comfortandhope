import { defineType, defineField } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
      description: "Short editorial line shown under the title",
    }),
    defineField({ name: "shortDescription", type: "text", rows: 2 }),
    defineField({ name: "longDescription", type: "text", rows: 6 }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stat",
      type: "object",
      fields: [
        defineField({ name: "value", type: "string", title: "Stat value (e.g. '1,400+')" }),
        defineField({ name: "label", type: "string", title: "Stat label (e.g. 'girls enrolled')" }),
      ],
    }),
    defineField({
      name: "highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "What this program does (3–6 bullets)",
    }),
    defineField({
      name: "locations",
      type: "array",
      of: [{ type: "string" }],
      description: "Nigerian states or regions where this program runs",
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Display order (lower = first; the lowest is featured on homepage)",
      initialValue: 1,
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured on homepage?",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "tagline", media: "heroImage" },
  },
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
