import { ImageResponse } from "next/og";
import { appIconMark } from "@/lib/app-icon";

const SIZE = 512;

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(appIconMark(SIZE), { width: SIZE, height: SIZE });
}
