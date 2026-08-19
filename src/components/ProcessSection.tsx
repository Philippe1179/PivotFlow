import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Scope",
    body: "We talk through the idea, the users, and the constraints, then agree on what “done” looks like before any code gets written.",
  },
  {
    n: "02",
    title: "Build",
    body: "Design and development happen together, in short cycles, with working software in your hands early and often.",
  },
  {
    n: "03",
    title: "Ship",
    body: "We launch it, hand off what you need, and stay close for the fixes and follow-ups that come after.",
  },
];

export default function ProcessSection() {
  return (
    <section id="how-we-work" className="scroll-mt-24 border-b border-ivory/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            02 — How we work
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ivory sm:text-4xl">
            Same process, every build
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.n}>
              <Reveal delayMs={index * 120} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ivory/10 bg-panel p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brass/50 font-mono text-xs text-brass">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
