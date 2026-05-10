import { defineType, defineField } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({ name: "caption", type: "string", validation: (R) => R.required() }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, validation: (R) => R.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          "Education",
          "Healthcare",
          "Relief",
          "Clean Water",
          "Events",
          "Community",
        ],
      },
    }),
    defineField({ name: "takenAt", type: "date", title: "Date taken" }),
    defineField({ name: "order", type: "number", initialValue: 1 }),
  ],
  preview: {
    select: { title: "caption", subtitle: "category", media: "image" },
  },
});
