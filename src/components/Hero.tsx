import Dial from "./Dial";
import Reveal from "./Reveal";
import { apps } from "@/lib/apps";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const LIVE_COUNT = apps.filter((app) => app.status === "live").length;
const STACK = Array.from(new Set(apps.flatMap((app) => app.stack ?? [])));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden border-b border-ivory/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle,rgba(237,231,218,0.06)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-36">
        <Reveal className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            PivotFlow Labs LLC
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
              className={`inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-brass/90 active:translate-y-0 active:scale-95 ${FOCUS_RING}`}
            >
              See the apps
            </a>
            <a
              href="#build-with-us"
              className={`inline-flex items-center justify-center rounded-full border border-ivory/25 px-6 py-3 font-mono text-sm uppercase tracking-wider text-ivory transition duration-200 hover:-translate-y-0.5 hover:border-brass hover:text-brass active:translate-y-0 active:scale-95 ${FOCUS_RING}`}
            >
              Have an idea?
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider text-ivory/50">
            <span className="inline-flex items-center gap-1.5 text-live">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
              </span>
              {LIVE_COUNT} apps live
            </span>
            <span aria-hidden className="h-3 w-px bg-ivory/15" />
            <span>{STACK.join(" · ")}</span>
          </div>
        </Reveal>
        <Reveal delayMs={150} className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(200,155,60,0.22),transparent_70%)] blur-3xl"
          />
          <Dial
            variant="hero"
            interactive
            className="h-auto w-full max-w-lg text-ivory"
          />
        </Reveal>
      </div>
    </section>
  );
}
