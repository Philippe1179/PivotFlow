"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "support@pivotflowlabs.com";

const FIELD_CLASSES =
  "w-full rounded-lg border border-ivory/15 bg-panel px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 transition-colors focus:outline-none focus:border-brass";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brass/30 bg-panel px-6 py-8 text-center"
      >
        <p className="font-display text-lg text-ivory">Message sent.</p>
        <p className="mt-2 text-sm text-ivory/70">
          Thanks for reaching out — we’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: hidden from sighted users, only bots tend to fill it in. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-ivory/60">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`mt-2 ${FIELD_CLASSES}`}
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-ivory/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`mt-2 ${FIELD_CLASSES}`}
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-ivory/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-2 resize-y ${FIELD_CLASSES}`}
          placeholder="Tell us about your idea…"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMessage} You can also reach us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline decoration-red-400/40 hover:text-brass">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`inline-flex w-full items-center justify-center rounded-full bg-brass px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-brass/90 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto ${FOCUS_RING}`}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs text-ivory/40">
        We’ll only use this to reply to you — never shared, never sold.
      </p>
    </form>
  );
}
