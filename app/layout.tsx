import type { Metadata, Viewport } from "next";
import "./globals.css";
// 1. Swapped Inter for Noto_Sans here
import { Noto_Sans, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeToggle from "@/components/theme-toggle";

// 2. Initialized Noto Sans instead of Inter
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// 3. Keep your existing Fraunces font for logo and headings
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "KWIN - Fueling Hopes. Building Futures",
  description:
    "Empowering Nigerian girls and women with education, mentorship, and business skills to build their own businesses",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Updated the className to use notoSans.variable
    <html lang="en" className={`${notoSans.variable} ${fraunces.variable}`}>
      <body className="antialiased overscroll-y-none bg-white">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}

        <ThemeToggle />
      </body>
    </html>
  );
}
