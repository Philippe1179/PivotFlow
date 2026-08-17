/**
 * Shared JSX for the generated app icons (favicon, apple-touch-icon,
 * manifest icons). Same ink/brass dial motif as the header logo mark,
 * rendered via `next/og`'s ImageResponse (Satori) instead of raw SVG,
 * since Satori has more reliable support for div/flexbox shapes than
 * arbitrary SVG paths.
 */
export function appIconMark(size: number) {
  const ringSize = size * 0.62;
  const ringBorder = Math.max(size * 0.055, 1);
  const needleWidth = Math.max(size * 0.05, 1);
  const needleHeight = size * 0.28;
  const pivot = Math.max(size * 0.09, 2);

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#10161F",
        borderRadius: size * 0.22,
      }}
    >
      <div
        style={{
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `${ringBorder}px solid #C89B3C`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            width: needleWidth,
            height: needleHeight,
            background: "#C89B3C",
            borderRadius: needleWidth,
            transform: "rotate(-58deg)",
            transformOrigin: "bottom center",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: pivot,
            height: pivot,
            borderRadius: "50%",
            background: "#C89B3C",
          }}
        />
      </div>
    </div>
  );
}
