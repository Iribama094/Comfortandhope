import { NextResponse } from "next/server";
import { Resend } from "resend";
import { writeClient } from "@/sanity/lib/client";

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  /** Honeypot field — bots fill it; humans don't. If non-empty, silently drop. */
  website?: string;
}

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields. Pretend success without doing anything.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = body.fullName?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  // Validation
  const errors: Record<string, string> = {};
  if (!fullName) errors.fullName = "Full name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RX.test(email)) errors.email = "Please enter a valid email.";
  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  if (Object.keys(errors).length > 0 || !fullName || !email || !message) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // After the guard above, these are all defined strings.
  const validated = { fullName, email, message };
  const submittedAt = new Date().toISOString();

  // 1. Save to Sanity (so editors can browse submissions in Studio)
  let sanityId: string | undefined;
  try {
    if (process.env.SANITY_API_WRITE_TOKEN) {
      const doc = await writeClient.create({
        _type: "contactSubmission",
        fullName: validated.fullName,
        email: validated.email,
        phone: phone || undefined,
        subject: subject || undefined,
        message: validated.message,
        submittedAt,
        status: "new",
      });
      sanityId = doc._id;
    }
  } catch (err) {
    console.error("Failed to save contact submission to Sanity:", err);
    // Don't block the response — the email path below is the safety net.
  }

  // 2. Send email notification via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (resendKey && toEmail) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: `Comfort & Hope Website <${fromEmail}>`,
        to: [toEmail],
        replyTo: validated.email,
        subject: subject
          ? `[Contact] ${subject} — from ${validated.fullName}`
          : `[Contact] New message from ${validated.fullName}`,
        html: renderEmailHtml({
          fullName: validated.fullName,
          email: validated.email,
          phone,
          subject,
          message: validated.message,
          submittedAt,
        }),
      });
    } catch (err) {
      console.error("Failed to send Resend email:", err);
      // If Sanity also failed we'd have nothing — return error.
      if (!sanityId) {
        return NextResponse.json(
          { ok: false, error: "We couldn't deliver your message. Please email us directly." },
          { status: 502 }
        );
      }
    }
  }

  return NextResponse.json({ ok: true });
}

function renderEmailHtml(p: {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  submittedAt: string;
}) {
  const safe = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `
<!doctype html>
<html>
  <body style="margin:0;background:#F9FAFB;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1F3A2B;">
    <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
      <div style="background:#1F3A2B;color:white;padding:24px;border-radius:12px 12px 0 0;">
        <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:0.18em;color:#F4B400;">Comfort &amp; Hope Foundation</p>
        <h1 style="margin:6px 0 0;font-size:22px;font-weight:600;">New contact submission</h1>
      </div>
      <div style="background:white;padding:24px;border-radius:0 0 12px 12px;border:1px solid #E5E7EB;border-top:none;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#6B7280;width:120px;">From</td><td><strong>${safe(p.fullName)}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;">Email</td><td><a href="mailto:${safe(p.email)}" style="color:#2F6B3C;">${safe(p.email)}</a></td></tr>
          ${p.phone ? `<tr><td style="padding:8px 0;color:#6B7280;">Phone</td><td>${safe(p.phone)}</td></tr>` : ""}
          ${p.subject ? `<tr><td style="padding:8px 0;color:#6B7280;">Subject</td><td>${safe(p.subject)}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6B7280;">Received</td><td>${new Date(p.submittedAt).toLocaleString()}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #E5E7EB;margin:20px 0;" />
        <p style="margin:0 0 8px;color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
        <div style="white-space:pre-wrap;line-height:1.6;color:#1F3A2B;">${safe(p.message)}</div>
        <p style="margin-top:24px;font-size:12px;color:#6B7280;">
          Reply directly to this email to respond. The submission is also saved in your Sanity Studio under "Contact Submissions".
        </p>
      </div>
    </div>
  </body>
</html>
`.trim();
}
