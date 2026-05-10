import { defineType, defineField } from "sanity";

export const boardMember = defineType({
  name: "boardMember",
  title: "Board Member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "title", type: "string", description: "e.g. 'Board Chairman'" }),
    defineField({ name: "expertise", type: "string", description: "e.g. 'Corporate Governance & Strategy'" }),
    defineField({ name: "bio", type: "text", rows: 5 }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", type: "number", initialValue: 1 }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "photo" },
  },
});
