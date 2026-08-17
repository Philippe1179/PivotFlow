const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function BuildWithUs() {
  return (
    <section id="build-with-us" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Custom builds
        </p>
        <h2 className="mt-4 font-display text-2xl tracking-tight text-ivory sm:text-3xl">
          Have an app you want built?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ivory/70">
          Outside of our own portfolio, we take on a limited number of custom
          builds — same team, same process, applied to your idea.
        </p>
        <a
          href="#contact"
          className={`mt-8 inline-flex items-center justify-center rounded-full border border-ivory/25 px-6 py-3 font-mono text-sm uppercase tracking-wider text-ivory transition-colors hover:border-brass hover:text-brass ${FOCUS_RING}`}
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
