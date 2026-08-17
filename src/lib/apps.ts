export type AppStatus = "live" | "tbd";

export interface PortfolioApp {
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  href?: string;
  stack?: string[];
}

export const apps: PortfolioApp[] = [
  {
    name: "FitFlow",
    tagline: "Fitness tracking",
    description:
      "Log workouts, track progress, and build routines that actually stick.",
    status: "live",
    stack: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    name: "Quizio",
    tagline: "Quiz app, multiple game modes",
    description:
      "AI-generated questions across a range of game modes, built for replayability.",
    status: "live",
    href: "https://quizio-lilac.vercel.app",
    stack: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    name: "Next build",
    tagline: "Slot reserved",
    description: "The third app in the portfolio — concept still taking shape.",
    status: "tbd",
  },
];
