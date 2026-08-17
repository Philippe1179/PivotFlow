"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks which of the given section ids currently occupies the band just
 * below the sticky header, for scroll-spy nav highlighting.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const atBottomRef = useRef(false);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Once the bottom-of-page override is active, ignore any (possibly
        // late-firing) observer updates so a short trailing section doesn't
        // get overridden back to whatever last overlapped the band above.
        if (atBottomRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-72px 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));

    // A short trailing section (e.g. the footer) can never reach the band
    // above once the page is scrolled to its max, since it stays pinned to
    // the bottom of the viewport. Treat "scrolled to the bottom" as that
    // last section being active, overriding the band check.
    const lastId = sectionIds[sectionIds.length - 1];
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      atBottomRef.current = atBottom;
      if (atBottom) setActiveId(lastId);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}
