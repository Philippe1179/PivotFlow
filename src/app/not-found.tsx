import Link from "next/link";
import Dial from "@/components/Dial";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <Dial variant="mark" className="h-10 w-10 text-ivory/40" />
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-brass">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl tracking-tight text-ivory sm:text-4xl">
        This page pivoted somewhere else.
      </h1>
      <p className="mt-4 max-w-md text-ivory/70">
        The page you’re looking for doesn’t exist, or has moved.
      </p>
      <Link
        href="/"
        className={`mt-8 inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-brass/90 active:translate-y-0 active:scale-95 ${FOCUS_RING}`}
      >
        Back to home
      </Link>
    </section>
  );
}
