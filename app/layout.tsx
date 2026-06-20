import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://viveksharma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vivek Sharma — Full-Stack Developer",
    template: "%s · Vivek Sharma",
  },
  description:
    "Vivek Sharma — Full-Stack Developer building AI-powered products with Next.js, React, and the modern web. B.Tech CSE (AI & ML), LNCT Bhopal.",
  keywords: [
    "Vivek Sharma",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "AI",
    "LNCT Bhopal",
    "Portfolio",
  ],
  authors: [{ name: "Vivek Sharma" }],
  creator: "Vivek Sharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Vivek Sharma — Full-Stack Developer",
    description:
      "Building AI-powered products with the modern web. Selected projects, skills, and how to reach out.",
    siteName: "Vivek Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Sharma — Full-Stack Developer",
    description: "Building AI-powered products with the modern web.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
