import Dial from "./Dial";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 border-b border-ivory/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-32">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            PivotFlow LLC
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            We build apps. Then we help you build yours.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ivory/70">
            PivotFlow ships its own portfolio of apps first, then takes on a
            select number of custom builds for clients who want that same
            craft applied to their idea.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#apps"
              className={`inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:bg-brass/90 ${FOCUS_RING}`}
            >
              See the apps
            </a>
            <a
              href="#build-with-us"
              className={`inline-flex items-center justify-center rounded-full border border-ivory/25 px-6 py-3 font-mono text-sm uppercase tracking-wider text-ivory transition-colors hover:border-brass hover:text-brass ${FOCUS_RING}`}
            >
              Have an idea?
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Dial variant="hero" className="h-auto w-full max-w-md text-ivory" />
        </div>
      </div>
    </section>
  );
}
