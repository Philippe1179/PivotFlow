import Link from "next/link";
import Dial from "./Dial";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "support@pivotflowlabs.com";

const NAV_LINKS = [
  { href: "/#apps", label: "Apps" },
  { href: "/#how-we-work", label: "How we work" },
  { href: "/#build-with-us", label: "Build with us" },
  { href: "/contact", label: "Contact" },
];

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10">
      <Reveal className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-[1.3fr_1fr_1fr] sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 font-display text-ivory">
              <Dial variant="mark" className="h-6 w-6 shrink-0 text-ivory" />
              <span>PivotFlow Labs</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ivory/60">
              A studio building a portfolio of apps, plus custom builds on
              request.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ivory/40">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ivory/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-sm transition-colors hover:text-brass ${FOCUS_RING}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ivory/40">
              Get in touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`mt-3 inline-block rounded-sm font-mono text-sm text-ivory/70 underline decoration-ivory/20 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass ${FOCUS_RING}`}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-6 text-center font-mono text-xs text-ivory/40 sm:text-left">
          © {year} PivotFlow Labs LLC
        </div>
      </Reveal>
    </footer>
  );
}
