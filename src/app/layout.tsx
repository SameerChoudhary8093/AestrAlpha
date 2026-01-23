import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google';

const orbitron = Orbitron({
  weight: ["400", "500", "700", "800", "900"],
  display: "swap", // <--- This ensures text shows up instantly in a default font first
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aestr Alpha | Career-Focused Tech Ashram",
  description: "Aestr Alpha is India's first career-focused Tech Ashram. Join our 6-month residency led by industry experts to build real-world AI projects and launch your career.",
  keywords: ["Aestr Alpha", "Tech Ashram", "AI Residency", "Coding Bootcamp India", "Career Growth", "Software Engineering", "Shodh AI"],
  openGraph: {
    title: "Aestr Alpha | Career-Focused Tech Ashram",
    description: "Launch your tech career with Aestr Alpha's 6-month residency program. Build real AI projects, not just courses.",
    url: "https://www.aestralpha.com",
    siteName: "Aestr Alpha",
    images: [
      {
        url: "https://www.aestralpha.com/test/Hero-Main.webp",
        width: 1200,
        height: 630,
        alt: "Aestr Alpha Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "nZcfKuRij_5q_rkTUtab557y8BnR4y73PAGc2AaKC4k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <GoogleAnalytics gaId="G-2642WFKBWL" />
      </head>
      <body className={`${roboto.variable} ${orbitron.variable} antialiased overflow-x-hidden w-full bg-[#181818]`}>
        <main className="w-full relative">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}


