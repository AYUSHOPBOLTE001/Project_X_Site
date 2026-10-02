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
    images: [
      {
        url: "/images/dashboard001.png",
        width: 1200,
        height: 630,
        alt: "Project X Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project X — One Platform. One University.",
    description:
      "A unified digital campus platform for Bennett University. Microsoft Innovate 2026 — Team 257.",
    images: ["/images/dashboard001.png"],
  },
};

const preloadImages = [
  "/images/dashboard001.png",
  "/images/teacher_admin_panel_welcome.jpeg",
  "/images/Project_x_side_panel.jpeg",
  "/images/msg_section_showcase.jpeg",
  "/images/ai_showcase.jpeg",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preload slideshow images for instant transitions */}
        {preloadImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body className="font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
