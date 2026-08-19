import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://pivotflowlabs.com";
const SITE_DESCRIPTION =
  "PivotFlow Labs — a studio building a portfolio of apps, plus custom builds on request.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PivotFlow Labs",
    template: "%s — PivotFlow Labs",
  },
  description: SITE_DESCRIPTION,
  applicationName: "PivotFlow Labs",
  appleWebApp: {
    capable: true,
    title: "PivotFlow Labs",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "PivotFlow Labs",
    title: "PivotFlow Labs",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "PivotFlow Labs",
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#10161F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-ivory">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
