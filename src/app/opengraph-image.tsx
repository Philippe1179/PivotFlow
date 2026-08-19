import { ImageResponse } from "next/og";
import { appIconMark } from "@/lib/app-icon";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PivotFlow — a studio building a portfolio of apps, plus custom builds on request.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "#10161F",
        }}
      >
        {appIconMark(120)}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            color: "#EDE7DA",
            letterSpacing: "-0.02em",
          }}
        >
          PivotFlow
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#C89B3C",
            letterSpacing: "0.02em",
          }}
        >
          We build apps. Then we help you build yours.
        </div>
      </div>
    ),
    size
  );
}
