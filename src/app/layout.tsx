import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "Aina Raphaël Rakotonaivo — Développeur Fullstack React Native & Next.js";
const description =
  "Développeur Fullstack spécialisé React Native, Next.js et NestJS, basé à La Réunion. Master 2 Informatique, CDI chez plüm. Disponible en remote — Paris, Lyon, Toulouse.";
const ogImage = {
  url: "/images/og/og.png",
  width: 1729,
  height: 910,
  alt: title,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rakotonaivo-raphael.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Aina Raphaël Rakotonaivo",
    locale: "fr_FR",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
