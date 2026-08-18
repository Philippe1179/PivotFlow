import type { ReactElement } from "react";
import type { PlatformAvailability, PlatformKey } from "@/lib/apps";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const PLATFORM_ORDER: PlatformKey[] = ["web", "ios", "android"];

const PLATFORM_META: Record<PlatformKey, { label: string; Icon: (props: { className?: string }) => ReactElement }> = {
  web: { label: "Web", Icon: WebIcon },
  ios: { label: "App Store", Icon: AppleIcon },
  android: { label: "Google Play", Icon: PlayIcon },
};

interface PlatformBadgesProps {
  platforms: PlatformAvailability;
  size?: "sm" | "md";
}

export default function PlatformBadges({ platforms, size = "md" }: PlatformBadgesProps) {
  return (
    <ul className={`flex flex-wrap ${size === "sm" ? "gap-2" : "gap-3"}`}>
      {PLATFORM_ORDER.map((key) => {
        const { label, Icon } = PLATFORM_META[key];
        const url = platforms[key];
        const available = Boolean(url);

        const pill = (
          <span
            className={`inline-flex items-center rounded-full border transition ${
              size === "sm" ? "gap-1.5 px-2.5 py-1" : "gap-2 px-3 py-1.5"
            } ${
              available
                ? "border-brass/40 bg-panel text-ivory group-hover:border-brass group-hover:bg-brass/10"
                : "border-ivory/10 text-ivory/30"
            }`}
          >
            <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
            <span className={`font-mono uppercase tracking-wider ${size === "sm" ? "text-[9px]" : "text-[10px]"}`}>
              {label}
            </span>
            {available ? (
              <CheckIcon className={`text-live ${size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"}`} />
            ) : (
              <span className="font-mono text-[9px] uppercase tracking-wider text-ivory/25">
                Soon
              </span>
            )}
          </span>
        );

        return (
          <li key={key}>
            {available ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-full ${FOCUS_RING}`}
              >
                {pill}
              </a>
            ) : (
              pill
            )}
          </li>
        );
      })}
    </ul>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M6 10.2l2.4 2.4L14 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WebIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.365 1.43c0 1.14-.415 2.06-1.245 2.79-.83.73-1.79 1.14-2.88 1.05-.09-1.1.34-2.09 1.16-2.85.82-.76 1.85-1.16 3.1-1.19.02.07.03.13.03.2ZM20.1 17.05c-.5 1.15-1.1 2.27-1.85 3.36-.83 1.2-1.5 2.03-2.02 2.5-.79.75-1.63 1.14-2.53 1.16-.65.02-1.43-.18-2.36-.6-.93-.42-1.78-.62-2.55-.6-.8.02-1.68.22-2.63.6-.95.42-1.72.63-2.32.65-.86.03-1.72-.37-2.6-1.2-.56-.5-1.27-1.36-2.13-2.6-.92-1.32-1.68-2.85-2.28-4.6C0.06 13.05-.14 11.32.06 9.86c.24-1.63.87-2.99 1.9-4.08.85-.9 1.9-1.44 3.15-1.62.63-.09 1.5.13 2.6.66.9.44 1.5.66 1.8.66.2 0 .84-.22 1.9-.75 1.1-.55 1.98-.75 2.65-.62 1.6.13 2.8.78 3.6 1.97-1.44.87-2.15 2.1-2.14 3.68.01 1.24.46 2.27 1.35 3.09.4.38.85.68 1.35.9-.11.32-.22.63-.35.93Z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4.5 3.7c0-.4.2-.7.5-.9.3-.2.7-.2 1 0l12.3 8.3c.3.2.5.5.5.9s-.2.7-.5.9L6 21.2c-.3.2-.7.2-1 0-.3-.2-.5-.5-.5-.9V3.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
