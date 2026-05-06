"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/app/components/Toast";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  area: string;
  availability: string;
  motivation: string;
  skills: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  area?: string;
  availability?: string;
  motivation?: string;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

export default function VolunteerForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "",
    city: "", country: "", area: "", availability: "",
    motivation: "", skills: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.area) e.area = "Please select an area of interest.";
    if (!form.availability) e.availability = "Please select your availability.";
    if (!form.motivation.trim()) e.motivation = "Please share your motivation.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
    toast("success", "Application submitted! We'll contact you within 5 business days.");
  };

  const inputClass = (field: keyof Errors) =>
    `mt-1.5 w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-border focus:border-primary"
    }`;

  const selectClass = (field: keyof Errors) =>
    `mt-1.5 w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-foreground focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-border focus:border-primary"
    }`;

  return (
    <section id="register" className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Registration
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Volunteer Registration Form
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Fill out the form below to start your journey with Comfort & Hope Foundation.
            Our team will contact you with next steps.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-white p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                🎉
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                Application Received!
              </h3>
              <p className="mt-3 max-w-sm text-sm text-body">
                Thank you for applying. Our volunteer coordinator will reach out
                within 5 business days with orientation details.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ firstName: "", lastName: "", email: "", phone: "", city: "", country: "", area: "", availability: "", motivation: "", skills: "" });
                }}
                className="mt-6 rounded-full border border-border px-6 py-2 text-sm font-medium text-body hover:bg-surface"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" placeholder="Jane" value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    className={inputClass("firstName")} />
                  <FieldError msg={errors.firstName} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" placeholder="Doe" value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    className={inputClass("lastName")} />
                  <FieldError msg={errors.lastName} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" placeholder="jane@example.com" value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputClass("email")} />
                  <FieldError msg={errors.email} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" placeholder="+234 ___ ___ ____" value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">City</label>
                  <input type="text" placeholder="Lagos" value={form.city}
                    onChange={(e) => set("city", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Country</label>
                  <input type="text" placeholder="Nigeria" value={form.country}
                    onChange={(e) => set("country", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Area of Interest <span className="text-red-500">*</span>
                  </label>
                  <select value={form.area} onChange={(e) => set("area", e.target.value)}
                    className={selectClass("area")}>
                    <option value="">Select an area...</option>
                    <option value="outreach">Outreach Volunteer</option>
                    <option value="events">Event Assistant</option>
                    <option value="mental-health">Mental Health Support Volunteer</option>
                    <option value="girl-child">Mentor for the Girl-Child Program</option>
                    <option value="teaching">Teacher or Skill Trainer</option>
                    <option value="logistics">Logistics or Donation Drive Helper</option>
                  </select>
                  <FieldError msg={errors.area} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Availability <span className="text-red-500">*</span>
                  </label>
                  <select value={form.availability} onChange={(e) => set("availability", e.target.value)}
                    className={selectClass("availability")}>
                    <option value="">Select availability...</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  <FieldError msg={errors.availability} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Why do you want to volunteer with Comfort & Hope? <span className="text-red-500">*</span>
                </label>
                <textarea rows={3} value={form.motivation}
                  onChange={(e) => set("motivation", e.target.value)}
                  placeholder="Share your motivation and what you hope to contribute..."
                  className={`${inputClass("motivation")} resize-none`} />
                <FieldError msg={errors.motivation} />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Relevant Skills or Experience{" "}
                  <span className="text-muted font-normal">(Optional)</span>
                </label>
                <textarea rows={2} value={form.skills}
                  onChange={(e) => set("skills", e.target.value)}
                  placeholder="Any skills, qualifications, or experience that might be helpful..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none" />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Submitting…" : "Submit Volunteer Application"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
