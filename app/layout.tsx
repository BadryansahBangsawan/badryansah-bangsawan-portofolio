import { cn } from "@/lib/utils";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import "./globals.css";
import ActiveSectionContextProvider from "@/components/provider/active-section-context";

export const metadata: Metadata = {
  title: "Badryansah Bangsawan - Portfolio",
  description:
    "Portfolio website of Badryansah Bangsawan - Full Stack Developer, showcasing projects, skills, and work experiences in React, TypeScript, and modern web technologies.",
  keywords: [
    "Badryansah Bangsawan",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Badryansah Bangsawan" }],
  creator: "Badryansah Bangsawan",
  openGraph: {
    title: "Badryansah Bangsawan - Portfolio",
    description:
      "Full Stack Developer Portfolio showcasing projects, skills, and work experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badryansah Bangsawan - Portfolio",
    description: "Full Stack Developer Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.badry.asia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn("bg-[#f6f2e5] text-[#292929] relative overflow-x-hidden")}
      >
        <ReactLenis root>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
