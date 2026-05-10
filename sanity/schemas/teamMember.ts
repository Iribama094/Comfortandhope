import { defineType, defineField } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "bio", type: "text", rows: 4 }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "group",
      type: "string",
      options: {
        list: [
          { title: "Leadership", value: "leadership" },
          { title: "Team", value: "team" },
        ],
        layout: "radio",
      },
      initialValue: "team",
    }),
    defineField({ name: "order", type: "number", initialValue: 1 }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
