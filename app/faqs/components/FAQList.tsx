"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    title: "General",
    faqs: [
      {
        question: "What is Comfort & Hope Foundation?",
        answer:
          "Comfort & Hope Foundation is a faith-driven nonprofit organization dedicated to empowering underserved communities through food outreach, education, mental health support, emergency relief, and sustainable development programs.",
      },
      {
        question: "When was Comfort & Hope founded?",
        answer:
          "Comfort & Hope was founded with the belief that every individual, regardless of their circumstances, deserves a chance at a better life. What started as a small community initiative has grown into a transformative force touching lives across multiple regions.",
      },
      {
        question: "Where does Comfort & Hope operate?",
        answer:
          "We primarily operate across Nigeria, with programs running in states including Lagos, Abuja, Kaduna, Benue, Delta, Enugu, Kano, Ogun, and Plateau. We are continuously expanding our reach to more underserved communities.",
      },
      {
        question: "Is Comfort & Hope a registered organization?",
        answer:
          "Yes. Comfort & Hope Foundation is a legally registered nonprofit organization operating in compliance with all applicable regulations. We maintain full transparency in our operations and financial reporting.",
      },
    ],
  },
  {
    title: "Donations",
    faqs: [
      {
        question: "How can I donate to Comfort & Hope?",
        answer:
          "You can donate through our website via bank transfer, card payment, or mobile money. We also accept in-kind donations of food, clothing, school supplies, and other essential items. Visit our Donations page for details.",
      },
      {
        question: "Where does my donation go?",
        answer:
          "Your donations are directed to our core programs: food and basic needs outreach, girl-child education, mental health support, emergency relief, widow and family assistance, skills training, and shelter development. We provide transparent reports on fund allocation.",
      },
      {
        question: "Can I donate to a specific program?",
        answer:
          "Yes. When making a donation, you can specify which program you would like to support. If no preference is indicated, your donation will be allocated to where it is needed most.",
      },
      {
        question: "Is my donation tax-deductible?",
        answer:
          "Comfort & Hope is a registered nonprofit organization. Donations may be tax-deductible depending on your local tax regulations. Please consult with your tax advisor for specific guidance.",
      },
    ],
  },
  {
    title: "Volunteering",
    faqs: [
      {
        question: "How do I become a volunteer?",
        answer:
          "Visit our Volunteer page and fill out the registration form. Our team will review your application and get back to you within 5 business days with next steps, including an orientation session.",
      },
      {
        question: "What are the requirements for volunteering?",
        answer:
          "All volunteers must be at least 18 years old and agree to our code of conduct. No prior experience is necessary. We provide all the training and support you need to make a meaningful contribution.",
      },
      {
        question: "Can I volunteer remotely?",
        answer:
          "Yes. We have remote volunteer opportunities in areas like content creation, social media management, data entry, grant writing, and administrative support. Indicate your preference on the registration form.",
      },
    ],
  },
  {
    title: "Getting Support",
    faqs: [
      {
        question: "How can I request help from Comfort & Hope?",
        answer:
          "If you or someone you know needs support, please contact us through our Contact page or email support@comfortandhope.org. Our team will assess your situation and connect you with the appropriate program or resources.",
      },
      {
        question: "Does Comfort & Hope provide mental health support?",
        answer:
          "Yes. We have trained mental health first responders and counselors who provide psychosocial support, crisis intervention, and community-based counseling. Reach out through our contact channels for assistance.",
      },
      {
        question: "Is there a cost for Comfort & Hope's programs?",
        answer:
          "No. All of Comfort & Hope's programs and services are provided free of charge to the communities and individuals we serve. Our work is funded entirely through donations, partnerships, and grants.",
      },
    ],
  },
  {
    title: "Partnerships",
    faqs: [
      {
        question: "How can my organization partner with Comfort & Hope?",
        answer:
          "Visit our Partner page and submit a partnership inquiry. Our team will schedule a consultation to discuss alignment, goals, and collaboration opportunities tailored to your organization.",
      },
      {
        question: "What types of partnerships does Comfort & Hope offer?",
        answer:
          "We offer corporate, institutional, academic, faith-based, and individual partnerships. Each type is designed to provide meaningful collaboration aligned with your mission and capabilities.",
      },
      {
        question: "Can I sponsor a specific program or event?",
        answer:
          "Absolutely. We welcome sponsorships for specific programs, outreach events, education initiatives, and community projects. Contact our partnerships team to discuss sponsorship opportunities and packages.",
      },
    ],
  },
  {
    title: "Contact & Communication",
    faqs: [
      {
        question: "How can I stay updated on Comfort & Hope's activities?",
        answer:
          "Follow us on social media, subscribe to our newsletter, or visit our Updates page for the latest stories, event announcements, and impact reports.",
      },
      {
        question: "How do I contact Comfort & Hope directly?",
        answer:
          "You can reach us via email at info@comfortandhope.org, by phone at +234 800 C&H, or by visiting our Contact page to send a message. We aim to respond to all inquiries within 24 hours.",
      },
      {
        question: "Can I visit Comfort & Hope's office?",
        answer:
          "Yes, we welcome visitors. Our office is located at 123 Hope Avenue, Suite 400, Lagos State. Please schedule an appointment in advance by contacting us through our website or phone.",
      },
    ],
  },
];

function FAQCategory({ title, faqs }: { title: string; faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="mb-12 last:mb-0">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <div className="mt-4">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="border-b border-border">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="pr-4 text-base font-medium text-foreground">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-body">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQList() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        {faqCategories.map((category) => (
          <FAQCategory
            key={category.title}
            title={category.title}
            faqs={category.faqs}
          />
        ))}

        {/* Privacy & Terms */}
        <div className="mt-16 rounded-xl border border-border bg-surface p-8">
          <h3 className="text-lg font-semibold text-foreground">
            Privacy Policy &amp; Terms
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-body">
            Comfort & Hope Foundation is committed to protecting your
            privacy and personal information. We do not sell, share, or
            distribute your data to third parties. All information collected
            through our website, forms, and communications is used solely to
            support our programs and stay connected with you.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-body">
            By using our website and services, you agree to our terms of use.
            For full details, please contact us at{" "}
            <a
              href="mailto:info@comfortandhope.org"
              className="font-medium text-primary hover:underline"
            >
              info@comfortandhope.org
            </a>
            .
          </p>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-8 rounded-xl border border-border bg-white p-8 text-center">
          <h3 className="text-lg font-semibold text-foreground">
            Still have questions?
          </h3>
          <p className="mt-2 text-sm text-body">
            Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
