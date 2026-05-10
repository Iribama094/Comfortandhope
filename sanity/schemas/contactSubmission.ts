import { defineType, defineField } from "sanity";

/**
 * Created by the contact form API route. Read-only in Studio for editors —
 * lets them browse, mark as responded, and search submissions.
 */
export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submission",
  type: "document",
  fields: [
    defineField({ name: "fullName", type: "string", readOnly: true }),
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "phone", type: "string", readOnly: true }),
    defineField({ name: "subject", type: "string", readOnly: true }),
    defineField({ name: "message", type: "text", rows: 6, readOnly: true }),
    defineField({ name: "submittedAt", type: "datetime", readOnly: true }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Read", value: "read" },
          { title: "Responded", value: "responded" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
    defineField({
      name: "internalNotes",
      type: "text",
      rows: 3,
      description: "Private notes for the team",
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subject: "subject",
      submittedAt: "submittedAt",
      status: "status",
    },
    prepare: ({ title, subject, submittedAt, status }) => ({
      title: `${title}${status === "new" ? " · 🟢 New" : ""}`,
      subtitle: `${subject || "No subject"} — ${
        submittedAt ? new Date(submittedAt).toLocaleDateString() : ""
      }`,
    }),
  },
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
});
