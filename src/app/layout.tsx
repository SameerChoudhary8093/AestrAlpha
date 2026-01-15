import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const orbitron = Orbitron({
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aestr Alpha",
  description: "For Real Industry, Real Skills, Real Growth",
  icons: {
    icon: "/home/Favicon.svg",
    shortcut: "/home/Favicon.svg",
    apple: "/home/Favicon.svg",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2642WFKBWL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2642WFKBWL');
          `}
        </Script>
      </head>
      <body className={`${roboto.variable} ${orbitron.variable} antialiased overflow-x-hidden w-full bg-[#181818]`}>
        {children}
      </body>
    </html>
  );
}
