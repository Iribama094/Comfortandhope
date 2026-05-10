import { defineType, defineField } from "sanity";

export const news = defineType({
  name: "news",
  title: "News & Articles",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "Education" },
          { title: "Healthcare", value: "Healthcare" },
          { title: "Relief", value: "Relief" },
          { title: "Clean Water", value: "Clean Water" },
          { title: "Community", value: "Community" },
          { title: "Events", value: "Events" },
        ],
      },
    }),
    defineField({ name: "location", type: "string", description: "Where it happened (e.g. 'Kaduna')" }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (R) => R.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : undefined,
      media,
    }),
  },
  orderings: [
    { title: "Newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
