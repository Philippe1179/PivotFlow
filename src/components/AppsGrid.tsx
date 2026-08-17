import { apps, type AppStatus, type PortfolioApp } from "@/lib/apps";
import Reveal from "./Reveal";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function AppsGrid() {
  return (
    <section id="apps" className="scroll-mt-24 border-b border-ivory/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Portfolio
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ivory sm:text-4xl">
            Apps we&apos;ve shipped
          </h2>
          <p className="mt-4 text-ivory/70">
            Each one built, shipped, and maintained by PivotFlow — proof
            before pitch.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <li key={app.name}>
              <Reveal className="h-full" delayMs={index * 120}>
                <AppCard app={app} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: PortfolioApp }) {
  const cardClasses = `flex h-full flex-col rounded-2xl border p-6 transition duration-300 ${
    app.status === "tbd"
      ? "border-dashed border-ivory/15 bg-panel/50"
      : "border-ivory/10 bg-panel"
  }`;

  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-xl text-ivory">{app.name}</h3>
        <StatusBadge status={app.status} />
      </div>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ivory/50">
        {app.tagline}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ivory/70">
        {app.description}
      </p>
      {app.stack && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {app.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-ivory/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ivory/60"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
      {app.href && (
        <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-brass">
          Visit
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      )}
    </>
  );

  if (app.href) {
    return (
      <a
        href={app.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${cardClasses} hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_18px_40px_-20px_rgba(200,155,60,0.35)] active:translate-y-0 active:scale-[0.99] ${FOCUS_RING}`}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

function StatusBadge({ status }: { status: AppStatus }) {
  if (status === "live") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-live">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
        </span>
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center font-mono text-[10px] uppercase tracking-wider text-ivory/40">
      TBD
    </span>
  );
}
