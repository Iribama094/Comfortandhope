"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Upload,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Heart,
  Loader2,
} from "lucide-react";
import { useToast } from "@/app/components/Toast";

const reasons = [
  "I want to donate",
  "I want to volunteer",
  "I want to partner",
  "I need support",
  "General inquiry",
  "Media / Press",
  "Other",
];

const responseMethods = ["Email", "Phone", "WhatsApp", "SMS"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  location: string;
  reasons: string[];
  message: string;
  responseMethod: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
  responseMethod?: string;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

export default function ContactContent() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    location: "",
    reasons: [],
    message: "",
    responseMethod: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleReason = (reason: string) => {
    setForm((f) => ({
      ...f,
      reasons: f.reasons.includes(reason)
        ? f.reasons.filter((r) => r !== reason)
        : [...f.reasons, reason],
    }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    if (!form.responseMethod) e.responseMethod = "Please select a preferred response method.";
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
    try {
      const subjectParts = [
        ...form.reasons,
        form.location ? `(${form.location})` : "",
      ].filter(Boolean);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          subject: subjectParts.join(" · "),
          message: `${form.message}\n\nPreferred response: ${form.responseMethod}`,
        }),
      });
      if (!res.ok) {
        const data: { error?: string } = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
      toast("success", "Message sent! We'll get back to you within 24 hours.");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast("error", msg + " Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: keyof Errors) =>
    `mt-1.5 w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-border focus:border-primary"
    }`;

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-white p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-foreground">
                  Thank you for reaching out!
                </h2>
                <p className="mt-3 max-w-sm text-sm text-body">
                  Your message has been received. Our team will respond within
                  24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", location: "", reasons: [], message: "", responseMethod: "" });
                  }}
                  className="mt-6 rounded-full border border-border px-6 py-2 text-sm font-medium text-body hover:bg-surface"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-body">
                  Fill out the form below and our team will respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass("name")}
                    />
                    <FieldError msg={errors.name} />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={inputClass("email")}
                      />
                      <FieldError msg={errors.email} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 000 000 0000"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Reason for Contact */}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Reason for Contact
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {reasons.map((reason) => (
                        <button
                          type="button"
                          key={reason}
                          onClick={() => toggleReason(reason)}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            form.reasons.includes(reason)
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border text-body hover:border-primary/50"
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className={`${inputClass("message")} resize-none`}
                    />
                    <FieldError msg={errors.message} />
                  </div>

                  {/* Preferred Response Method */}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Preferred Response Method <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {responseMethods.map((method) => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => {
                            set("responseMethod", method);
                          }}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            form.responseMethod === method
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border text-body hover:border-primary/50"
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                    <FieldError msg={errors.responseMethod} />
                  </div>

                  {/* Upload Document */}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Upload Document{" "}
                      <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <label className="mt-1.5 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-surface px-4 py-4 transition-colors hover:border-primary/50">
                      <Upload className="h-5 w-5 text-muted" />
                      <div>
                        <p className="text-sm text-body">
                          Drag and drop or{" "}
                          <span className="font-medium text-primary">browse</span>{" "}
                          to upload
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          PDF, DOC, JPG, PNG (max 5MB)
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light disabled:opacity-60"
                  >
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">Email Us</h3>
              <div className="mt-2 space-y-1">
                <a href="mailto:info@comfortandhope.org" className="block text-sm text-primary hover:underline">info@comfortandhope.org</a>
                <a href="mailto:support@comfortandhope.org" className="block text-sm text-primary hover:underline">support@comfortandhope.org</a>
                <a href="mailto:partnerships@comfortandhope.org" className="block text-sm text-primary hover:underline">partnerships@comfortandhope.org</a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">Phone / WhatsApp</h3>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-body">+234 800 C&H</p>
                <p className="text-sm text-body">+234 (0)1 270 8888</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">Office Address</h3>
              <p className="mt-2 text-sm text-body">123 Hope Avenue, Suite 400</p>
              <p className="text-sm text-body">Lagos State, NG 10112</p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-foreground">Follow Us</h3>
              <div className="mt-3 flex gap-3">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-body transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <Heart className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm leading-relaxed text-body">
                Comfort & Hope is a faith-driven organization rooted in the belief that every person
                deserves compassion, dignity, and the opportunity to thrive. We welcome everyone,
                regardless of background or belief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
