import Dial from "./Dial";

const NAV_LINKS = [
  { href: "#apps", label: "Apps" },
  { href: "#build-with-us", label: "Build with us" },
  { href: "#contact", label: "Contact" },
];

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <a href="#hero" className={`flex items-center gap-2 rounded-sm sm:gap-3 ${FOCUS_RING}`}>
          <Dial variant="mark" className="h-7 w-7 shrink-0 text-ivory sm:h-8 sm:w-8" />
          <span className="font-display text-base tracking-tight text-ivory sm:text-lg">
            PivotFlow
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wide text-ivory/70 sm:gap-8 sm:text-sm sm:tracking-wider">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-sm transition-colors hover:text-brass ${FOCUS_RING}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
