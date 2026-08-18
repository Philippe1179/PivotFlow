export type AppStatus = "live" | "tbd";

export type PlatformKey = "web" | "ios" | "android";

export type PlatformAvailability = Partial<Record<PlatformKey, string>>;

export interface PortfolioApp {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem?: string;
  features?: string[];
  status: AppStatus;
  href?: string;
  stack?: string[];
  platforms: PlatformAvailability;
}

export const apps: PortfolioApp[] = [
  {
    slug: "fitflow",
    name: "FitFlow",
    tagline: "Fitness tracking",
    description:
      "Log workouts, track progress, and build routines that actually stick.",
    problem:
      "Most fitness trackers either bury you in data or ask you to log everything by hand. FitFlow keeps logging fast and turns it into routines that stick.",
    features: [
      "Quick workout logging",
      "Progress charts over time",
      "Custom routine builder",
      "Synced across devices",
    ],
    status: "live",
    href: "https://studio--studio-9772986985-4b343.us-central1.hosted.app/",
    stack: ["Next.js", "TypeScript", "Firebase"],
    platforms: {
      web: "https://studio--studio-9772986985-4b343.us-central1.hosted.app/",
    },
  },
  {
    slug: "quizio",
    name: "Quizio",
    tagline: "Quiz app, multiple game modes",
    description:
      "AI-generated questions across a range of game modes, built for replayability.",
    problem:
      "Trivia apps go stale fast once you've seen the question bank twice. Quizio generates new questions on demand so every game feels fresh.",
    features: [
      "AI-generated question sets",
      "Multiple game modes",
      "Replayable — no repeat question banks",
      "Score tracking per session",
    ],
    status: "live",
    href: "https://quizio-lilac.vercel.app",
    stack: ["Next.js", "TypeScript", "Firebase"],
    platforms: {
      web: "https://quizio-lilac.vercel.app",
    },
  },
  {
    slug: "pickleleague",
    name: "PickleLeague",
    tagline: "Pickleball league management",
    description:
      "Add players, record scores, and track standings, with a guest demo mode to try it before you register.",
    problem:
      "Local pickleball leagues were being run out of spreadsheets and group texts. PickleLeague gives organizers one place to manage players and standings.",
    features: [
      "Player roster management",
      "Score recording",
      "Live standings",
      "Guest demo mode to try before registering",
    ],
    status: "live",
    href: "https://pickleballapp-6983f.web.app/",
    stack: ["Expo", "Firebase"],
    platforms: {
      web: "https://pickleballapp-6983f.web.app/",
    },
  },
];
