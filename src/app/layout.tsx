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
  title: {
    default: "Landing Salmorejo Tech 2026",
    template: "%s | Salmorejo Tech", // Esto permite tener títulos dinámicos en otras páginas
  },
  description:
    "Infórmate sobre el evento tecnológico cordobés y cómo ser ponente en la edición 2026.",

  // --- 1. Palabras clave y Autor ---
  keywords: [
    "Salmorejo Tech",
    "Evento Tecnológico",
    "Córdoba",
    "Programación",
    "Networking",
    "Software Libre",
    "Aula Software Libre",
  ],
  authors: [
    {
      name: "Aula de Software Libre",
      url: "https://www.uco.es/aulasoftwarelibre/",
    },
  ],
  creator: "Aula de Software Libre",

  // --- 2. Robots y Canónica ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/2026",
  },

  // --- Open Graph (Facebook, LinkedIn, WhatsApp, etc.) ---
  openGraph: {
    title: "Landing Salmorejo Tech 2026",
    description:
      "Infórmate sobre el evento tecnológico cordobés y cómo ser ponente.",
    url: "/2026",
    siteName: "Salmorejo Tech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Salmorejo Tech 2026",
      },
    ],
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Landing Salmorejo Tech 2026",
    description:
      "Infórmate sobre el evento tecnológico cordobés y cómo ser ponente.",
    site: "@AulaSL",
    creator: "@AulaSL",
    images: ["/opengraph-image.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aula de Software Libre",
              url: "https://www.uco.es/aulasoftwarelibre/",
              logo: "https://salmorejo.tech/2026/opengraph-image.jpg",
              sameAs: [
                "https://twitter.com/AulaSL",
                "https://www.instagram.com/aulasoftwarelibre/",
                "https://www.linkedin.com/company/aulasoftwarelibre",
                "https://www.facebook.com/AulaSoftwareLibre/",
              ],
              description:
                "Delegación de estudiantes de la Universidad de Córdoba dedicada a la difusión del conocimiento libre y organizadora del Salmorejo Tech.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
