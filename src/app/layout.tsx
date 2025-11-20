import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
metadataBase: new URL("https://salmorejo.tech"),
title: "Landing Salmorejo Tech 2026",
  description: "Informate sobre el evento tecnologico cordobés y como ser ponente",
  // --- Open Graph (Facebook, LinkedIn, WhatsApp, etc.) ---
  openGraph: {
    title: "Landing Salmorejo Tech 2026",
    description: "Informate sobre el evento tecnologico cordobés y como ser ponente",
    url: "/2026",
    siteName: "SalmorejoTech",
    locale: "es_ES",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Landing Salmorejo Tech 2026",
    description: "Informate sobre el evento tecnologico cordobés y como ser ponente",
    site: "@AulaSL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
