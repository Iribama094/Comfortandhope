import type { StructureResolver } from "sanity/structure";

/**
 * Custom Studio structure: pin the singleton "Site Settings" at the top,
 * group everything else by purpose so editors find content fast.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Comfort & Hope")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        ),
      S.divider(),

      S.listItem()
        .title("Programs")
        .child(S.documentTypeList("program").title("Programs")),

      S.listItem()
        .title("News & Articles")
        .child(S.documentTypeList("news").title("News & Articles")),

      S.listItem()
        .title("Events")
        .child(S.documentTypeList("event").title("Events")),

      S.divider(),

      S.listItem()
        .title("Team")
        .child(S.documentTypeList("teamMember").title("Team Members")),

      S.listItem()
        .title("Board of Directors")
        .child(S.documentTypeList("boardMember").title("Board Members")),

      S.divider(),

      S.listItem()
        .title("Testimonials & Stories")
        .child(S.documentTypeList("testimonial").title("Testimonials")),

      S.listItem()
        .title("Gallery")
        .child(S.documentTypeList("galleryItem").title("Gallery Items")),

      S.divider(),

      S.listItem()
        .title("📬 Contact Submissions")
        .child(
          S.documentTypeList("contactSubmission")
            .title("Contact Submissions")
            .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
        ),
    ]);
