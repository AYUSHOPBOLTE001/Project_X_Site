import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project X — One Platform. One University.",
  description:
    "A unified digital campus platform that consolidates 10+ fragmented university systems into one seamless, role-based experience. Built for Microsoft Innovate 2026 by Team 257.",
  keywords: [
    "Project X",
    "Microsoft Innovate 2026",
    "Bennett University",
    "Campus Platform",
    "Hackathon",
    "Team 257",
  ],
  authors: [{ name: "Team 257 — Project X" }],
  openGraph: {
    title: "Project X — One Platform. One University.",
    description:
      "A unified digital campus platform for Bennett University. Microsoft Innovate 2026 — Team 257.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
