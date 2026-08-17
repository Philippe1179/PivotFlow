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
    href: "https://studio--studio-9772986985-4b343.us-central1.hosted.app/",
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
    name: "PickleLeague",
    tagline: "Pickleball league management",
    description:
      "Add players, record scores, and track standings, with a guest demo mode to try it before you register.",
    status: "live",
    href: "https://pickleballapp-6983f.web.app/",
    stack: ["Expo", "Firebase"],
  },
];
