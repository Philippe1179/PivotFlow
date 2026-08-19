"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Dial from "./Dial";
import { useActiveSection } from "@/lib/useActiveSection";

const NAV_LINKS = [
  { href: "/#apps", label: "Apps", id: "apps" },
  { href: "/#build-with-us", label: "Build with us", id: "build-with-us" },
  { href: "/contact", label: "Contact", id: "contact" },
];

const SECTION_IDS = ["apps", "build-with-us"];

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function Header() {
  const pathname = usePathname();
  const sectionId = useActiveSection(SECTION_IDS);
  const activeId = pathname === "/contact" ? "contact" : sectionId;
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <Link href="/" className={`flex items-center gap-2 rounded-sm sm:gap-3 ${FOCUS_RING}`}>
          <Dial variant="mark" className="h-7 w-7 shrink-0 text-ivory sm:h-8 sm:w-8" />
          <span className="font-display text-base tracking-tight text-ivory sm:text-lg">
            PivotFlow Labs
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider text-ivory/70">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-sm transition-colors ${FOCUS_RING} ${
                      isActive ? "text-brass" : "hover:text-brass"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`flex h-9 w-9 items-center justify-center rounded-sm text-ivory md:hidden ${FOCUS_RING}`}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-200 motion-reduce:transition-none ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        className={`grid overflow-hidden border-ivory/10 bg-ink transition-[grid-template-rows] duration-200 motion-reduce:transition-none md:hidden ${
          menuOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="overflow-hidden px-4 font-mono text-sm uppercase tracking-wider text-ivory/70 sm:px-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-sm py-3 transition-colors ${FOCUS_RING} ${
                    isActive ? "text-brass" : "hover:text-brass"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
