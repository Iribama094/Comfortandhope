import { defineType, defineField } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),
    defineField({ name: "startsAt", type: "datetime", validation: (R) => R.required() }),
    defineField({ name: "endsAt", type: "datetime" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "registrationUrl", type: "url", title: "Registration link" }),
  ],
  preview: {
    select: { title: "title", subtitle: "startsAt", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? new Date(subtitle).toLocaleString() : undefined,
      media,
    }),
  },
  orderings: [
    { title: "Soonest first", name: "startsAtAsc", by: [{ field: "startsAt", direction: "asc" }] },
  ],
});
