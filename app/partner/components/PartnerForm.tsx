"use client";

const partnerTypes = [
  "Corporate Partnership",
  "Faith-Based Partnership",
  "NGO Collaboration",
  "Service Partnership (skills/expertise)",
  "Philanthropic / Donor Partnership",
  "Sponsorship",
  "Logistics Support",
  "Media / Awareness Partner",
];

const supportAreas = [
  "Food & Relief Outreach",
  "Clothing & Provision Drives",
  "Mental Health Support",
  "Girl-Child Empowerment",
  "Widow Support Programs",
  "Orphanage & Shelter Development",
  "Education & School Sponsorships",
  "Medical / Health Support",
  "Advocacy & Awareness Campaigns",
];

const contributionModes = [
  "Financial Donations",
  "Materials (food, clothing, provisions, toiletries, etc.)",
  "Professional Services",
  "Staff Volunteer Program",
  "Monthly or Annual Support",
  "Project Sponsorship",
];

export default function PartnerForm() {
  return (
    <section id="become-partner" className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Get Started
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            How to Become a Partner
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Fill out the form below and our partnerships team will get in
            touch with you.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-white p-8">
          <form className="space-y-5">
            {/* Name & Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Name / Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Your name or organization"
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+234 ___ ___ ____"
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">
                  Address / Location
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="text-sm font-medium text-foreground">
                Website / Social Media (Optional)
              </label>
              <input
                type="text"
                placeholder="https://..."
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            {/* Partnership Type */}
            <div>
              <label className="text-sm font-medium text-foreground">
                Type of Partnership (Select all that apply)
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {partnerTypes.map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-body transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary"
                  >
                    <input type="checkbox" className="sr-only" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Areas of Support */}
            <div>
              <label className="text-sm font-medium text-foreground">
                Area(s) You Want to Support
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {supportAreas.map((area) => (
                  <label
                    key={area}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-body transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary"
                  >
                    <input type="checkbox" className="sr-only" />
                    {area}
                  </label>
                ))}
              </div>
            </div>

            {/* Contribution Mode */}
            <div>
              <label className="text-sm font-medium text-foreground">
                Preferred Mode of Contribution
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {contributionModes.map((mode) => (
                  <label
                    key={mode}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-body transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary"
                  >
                    <input type="checkbox" className="sr-only" />
                    {mode}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-foreground">
                Tell Us Why You Would Like to Partner With Us
              </label>
              <textarea
                rows={3}
                placeholder="Share your motivation and how you envision the partnership..."
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            {/* How did you hear */}
            <div>
              <label className="text-sm font-medium text-foreground">
                How Did You Hear About Comfort & Hope Foundation?
              </label>
              <input
                type="text"
                placeholder="Referral, social media, website, event, etc."
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              Submit Partnership Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
