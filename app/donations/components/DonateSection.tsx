"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle, Loader2, Lock, Shield, Receipt, Sparkles } from "lucide-react";
import { useToast } from "@/app/components/Toast";

type CurrencyCode = "NGN" | "USD" | "GBP";

interface Currency {
  code: CurrencyCode;
  symbol: string;
  locale: string;
  amounts: number[];
  impact: Record<number, string>;
  flag: string;
}

const currencies: Record<CurrencyCode, Currency> = {
  NGN: {
    code: "NGN",
    symbol: "₦",
    locale: "en-NG",
    flag: "🇳🇬",
    amounts: [5000, 25000, 75000, 150000, 750000],
    impact: {
      5000: "A month of school meals for one child",
      25000: "A girl's school supplies for a full term",
      75000: "Family emergency relief kit",
      150000: "Medical outreach for 20 women",
      750000: "Funds part of a clean-water borehole",
    },
  },
  USD: {
    code: "USD",
    symbol: "$",
    locale: "en-US",
    flag: "🇺🇸",
    amounts: [25, 100, 250, 500, 2500],
    impact: {
      25: "A month of school meals for one child",
      100: "A girl's school supplies for a full term",
      250: "Family emergency relief kit",
      500: "Medical outreach for 20 women",
      2500: "Funds part of a clean-water borehole",
    },
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    locale: "en-GB",
    flag: "🇬🇧",
    amounts: [20, 75, 200, 400, 2000],
    impact: {
      20: "A month of school meals for one child",
      75: "A girl's school supplies for a full term",
      200: "Family emergency relief kit",
      400: "Medical outreach for 20 women",
      2000: "Funds part of a clean-water borehole",
    },
  },
};

const STEPS = ["Amount", "Frequency", "Your Details", "Confirm"] as const;
type Step = 0 | 1 | 2 | 3;

interface Details {
  firstName: string;
  lastName: string;
  email: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  amount?: string;
}

function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                done
                  ? "bg-primary text-white"
                  : active
                  ? "border-2 border-primary text-primary"
                  : "border-2 border-border text-muted"
              }`}
            >
              {done ? <CheckCircle className="h-5 w-5" /> : i + 1}
            </div>
            <span
              className={`mt-1.5 hidden text-xs sm:block ${
                active ? "font-semibold text-primary" : done ? "text-primary" : "text-muted"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

function CurrencyToggle({
  value,
  onChange,
}: {
  value: CurrencyCode;
  onChange: (c: CurrencyCode) => void;
}) {
  return (
    <div className="mb-5 flex items-center justify-center gap-1 rounded-full border border-border bg-surface p-1">
      {(Object.keys(currencies) as CurrencyCode[]).map((code) => {
        const c = currencies[code];
        const active = value === code;
        return (
          <button
            key={code}
            onClick={() => onChange(code)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
              active
                ? "bg-white text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            <span aria-hidden>{c.flag}</span>
            {c.code}
          </button>
        );
      })}
    </div>
  );
}

export default function DonateSection() {
  const { toast } = useToast();
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>("NGN");
  const currency = currencies[currencyCode];

  const [step, setStep] = useState<Step>(0);
  const [selected, setSelected] = useState<number | null>(currency.amounts[1]);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [details, setDetails] = useState<Details>({ firstName: "", lastName: "", email: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const finalAmount = custom ? Number(custom) || 0 : selected ?? 0;

  const formatAmount = (n: number) =>
    `${currency.symbol}${n.toLocaleString(currency.locale)}`;

  const displayAmount = finalAmount > 0 ? formatAmount(finalAmount) : "";

  const impactFor = (amount: number): string => {
    if (currency.impact[amount]) return currency.impact[amount];
    const ratio = amount / currency.amounts[0];
    if (ratio < 1) return "Every gift multiplies impact — thank you";
    if (ratio < 5) return `Helps deliver ${Math.round(ratio)} child school-meal months`;
    if (ratio < 30) return `Funds school supplies for ${Math.round(ratio / 5)} girls for a term`;
    return `Builds a meaningful share of a clean-water borehole`;
  };

  // When currency changes, snap selection to a default tier
  const handleCurrencyChange = (code: CurrencyCode) => {
    setCurrencyCode(code);
    setSelected(currencies[code].amounts[1]);
    setCustom("");
    setErrors({});
  };

  const setDetail = (field: keyof Details, value: string) => {
    setDetails((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validateStep = (): boolean => {
    if (step === 0) {
      if (finalAmount <= 0) {
        setErrors({ amount: "Please select or enter a donation amount." });
        return false;
      }
    }
    if (step === 2) {
      const e: Errors = {};
      if (!details.firstName.trim()) e.firstName = "First name is required.";
      if (!details.lastName.trim()) e.lastName = "Last name is required.";
      if (!details.email.trim()) {
        e.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
        e.email = "Please enter a valid email address.";
      }
      if (Object.keys(e).length) {
        setErrors(e);
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, 3) as Step);
  };

  const back = () => setStep((s) => Math.max(s - 1, 0) as Step);

  const submit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setDone(true);
    toast("success", `Thank you! Your ${displayAmount} donation is being processed.`);
  };

  const inputClass = (field: keyof Errors) =>
    `mt-1.5 w-full rounded-lg border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-border focus:border-primary"
    }`;

  if (done) {
    return (
      <section id="donate" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          <div className="rounded-xl border border-border bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Thank You!</h2>
            <p className="mt-3 text-body">
              Your generous donation of{" "}
              <span className="font-semibold text-primary">{displayAmount}</span>{" "}
              {frequency === "monthly" ? "per month" : ""} has been received. A
              confirmation will be sent to{" "}
              <span className="font-semibold">{details.email}</span>.
            </p>
            <p className="mt-3 text-sm text-muted">
              Together, we are building hope — one life at a time.
            </p>
            <button
              onClick={() => {
                setDone(false);
                setStep(0);
                setSelected(currency.amounts[1]);
                setCustom("");
                setFrequency("monthly");
                setDetails({ firstName: "", lastName: "", email: "" });
              }}
              className="mt-8 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-body hover:bg-surface"
            >
              Make another donation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="donate" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-xl">
        <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Make a Donation
          </h2>

          <StepIndicator current={step} />

          {/* Step 0: Amount */}
          {step === 0 && (
            <div>
              <CurrencyToggle value={currencyCode} onChange={handleCurrencyChange} />

              <p className="text-sm font-medium text-foreground">Select an Amount</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {currency.amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelected(amount); setCustom(""); setErrors({}); }}
                    className={`rounded-lg border px-3 py-3 text-sm font-semibold transition-all ${
                      selected === amount && !custom
                        ? "border-primary bg-primary text-white shadow-sm"
                        : "border-border bg-surface text-foreground hover:border-primary hover:-translate-y-0.5"
                    }`}
                  >
                    {formatAmount(amount)}
                  </button>
                ))}
                <button
                  onClick={() => { setSelected(null); setErrors({}); }}
                  className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-all ${
                    selected === null
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-border bg-surface text-foreground hover:border-primary hover:-translate-y-0.5"
                  }`}
                >
                  Custom
                </button>
              </div>

              {selected === null && (
                <div className="relative mt-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">
                    {currency.symbol}
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setErrors({}); }}
                    className="w-full rounded-lg border border-border bg-surface pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                </div>
              )}
              <FieldError msg={errors.amount} />

              {displayAmount && finalAmount > 0 && (
                <div className="mt-4 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/5 p-4 animate-fade-in">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">
                      Your {displayAmount}
                    </p>
                    <p className="mt-0.5 text-body">{impactFor(finalAmount)}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 1: Frequency */}
          {step === 1 && (
            <div>
              <p className="mb-6 text-sm font-medium text-foreground">
                How often would you like to give?
              </p>
              <div className="grid gap-4">
                {(["monthly", "one-time"] as const).map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`relative flex items-center gap-4 rounded-xl border p-5 text-left transition-all ${
                      frequency === freq
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-primary/50 hover:-translate-y-0.5"
                    }`}
                  >
                    {freq === "monthly" && (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-dark shadow">
                        Most supporters choose this
                      </span>
                    )}
                    <div
                      className={`h-5 w-5 shrink-0 rounded-full border-2 ${
                        frequency === freq ? "border-primary bg-primary" : "border-border"
                      } flex items-center justify-center`}
                    >
                      {frequency === freq && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground capitalize">
                        {freq === "one-time" ? "One-Time Gift" : "Monthly Gift"}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">
                        {freq === "one-time"
                          ? "Make a single donation today."
                          : "Give automatically every month and create lasting change."}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-surface p-4 text-center text-sm text-body">
                Your{" "}
                <span className="font-semibold text-primary">{displayAmount}</span>{" "}
                {frequency === "monthly" ? "monthly gift" : "one-time donation"} helps us
                reach more communities in need.
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Your Information</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={details.firstName}
                    onChange={(e) => setDetail("firstName", e.target.value)}
                    className={inputClass("firstName")}
                  />
                  <FieldError msg={errors.firstName} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={details.lastName}
                    onChange={(e) => setDetail("lastName", e.target.value)}
                    className={inputClass("lastName")}
                  />
                  <FieldError msg={errors.lastName} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={details.email}
                  onChange={(e) => setDetail("email", e.target.value)}
                  className={inputClass("email")}
                />
                <FieldError msg={errors.email} />
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div>
              <p className="mb-4 text-sm font-medium text-foreground">
                Review your donation
              </p>
              <div className="space-y-3 rounded-xl border border-border bg-surface p-5">
                <Row label="Amount" value={displayAmount} />
                <Row
                  label="Frequency"
                  value={frequency === "monthly" ? "Monthly" : "One-Time"}
                />
                <Row label="Currency" value={`${currency.flag} ${currency.code}`} />
                <Row label="Name" value={`${details.firstName} ${details.lastName}`} />
                <Row label="Email" value={details.email} />
              </div>
              <div className="mt-5 grid gap-2 rounded-lg border border-border bg-surface p-4 text-xs text-body sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-primary" />
                  <span>256-bit SSL secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Receipt className="h-3.5 w-3.5 text-primary" />
                  <span>Tax-deductible receipt</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  <span>PCI-compliant processor</span>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-muted">
                By proceeding, you agree to Comfort & Hope&apos;s{" "}
                <a href="/terms" className="text-primary underline">Terms of Service</a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className={`mt-8 flex ${step > 0 ? "justify-between" : "justify-end"}`}>
            {step > 0 && (
              <button
                onClick={back}
                className="flex items-center gap-1 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-body hover:bg-surface"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={next}
                className="flex items-center gap-1 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={submitting}
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-dark disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Processing…" : `Donate ${displayAmount}${frequency === "monthly" ? "/mo" : ""}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
