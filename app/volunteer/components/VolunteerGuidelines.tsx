const guidelines = [
  {
    number: "1",
    title: "Commitment and Reliability",
    items: [
      "Honor your time commitments and notify us in advance if you cannot attend",
      "Complete orientation and training before starting volunteer work",
      "Maintain consistent communication with your team leader",
    ],
  },
  {
    number: "2",
    title: "Respect and Dignity",
    items: [
      "Treat all beneficiaries, staff, and fellow volunteers with respect and dignity",
      "Maintain confidentiality regarding beneficiary information",
      "Avoid discrimination based on race, religion, gender, or background",
      "Respect cultural differences and local customs",
    ],
  },
  {
    number: "3",
    title: "Professional Conduct",
    items: [
      "Dress appropriately for volunteer activities",
      "Refrain from using alcohol or drugs during volunteer hours",
      "Follow all safety protocols and guidelines",
      "Represent Comfort & Hope Foundation positively in all interactions",
    ],
  },
  {
    number: "4",
    title: "Safeguarding",
    items: [
      "Report any concerns about child safety or vulnerable adults immediately",
      "Never be alone with a child in a private setting",
      "Obtain permission before taking photos or videos",
      "Complete required background checks for certain roles",
    ],
  },
  {
    number: "5",
    title: "Communication",
    items: [
      "Keep Comfort & Hope informed of any changes to your contact information",
      "Provide feedback and suggestions to improve our programs",
      "Direct media inquiries to the communications team",
      "Use official Comfort & Hope channels for volunteer-related communication",
    ],
  },
  {
    number: "6",
    title: "Faith and Values",
    items: [
      "Respect Comfort & Hope's faith-based foundation and values",
      "Serve with compassion, integrity, and humility",
      "Support our mission to bring hope through God's love",
    ],
  },
];

export default function VolunteerGuidelines() {
  return (
    <section id="guidelines" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Policies
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Volunteer Guidelines and Policies
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            To ensure a safe, respectful, and impactful volunteer experience
            for everyone, please review our guidelines.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {guidelines.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {section.number}. {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface p-6">
          <h3 className="text-sm font-semibold text-foreground">Agreement</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            By submitting your volunteer application, you acknowledge that you
            have read and agree to follow these guidelines and policies. Failure
            to comply may result in termination of your volunteer status.
          </p>
        </div>
      </div>
    </section>
  );
}
