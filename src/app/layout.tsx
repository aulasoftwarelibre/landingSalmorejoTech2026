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
title: "Web Salmorejo Tech 2026",
  description: "Explora la tecnología de Salmorejo Tech para el 2026. El evento tecnologico cordobes donde todos aprenden.",
  // --- Open Graph (Facebook, LinkedIn, WhatsApp, etc.) ---
  openGraph: {
    title: "Web Salmorejo Tech 2026",
    description: "Explora la tecnología de Salmorejo Tech para el 2026. El evento tecnologico cordobes donde todos aprenden.",
    url: "/2026",
    siteName: "SalmorejoTech",
    locale: "es_ES",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Web Salmorejo Tech 2026",
    description: "Explora la tecnología de Salmorejo Tech para el 2026. El evento tecnologico cordobes donde todos aprenden.",
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
