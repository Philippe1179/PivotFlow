import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have an app you want built? Get in touch with PivotFlow Labs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="border-b border-ivory/10">
      <div className="mx-auto max-w-xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          04 — Contact
        </p>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-ivory sm:text-4xl">
          Let’s talk
        </h1>
        <p className="mt-4 text-ivory/70">
          Tell us about your idea, timeline, and budget — we’ll reply as soon
          as we can.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
