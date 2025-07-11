import Footer from "@/components/parts/Footer";
import Header from "@/components/parts/Header";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The blog of Igor Zhuravkov",
  description: SITE_CONFIG.description,
  alternates: {
    types: {
      "application/rss+xml": `${SITE_CONFIG.url}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    title: "The blog of Igor Zhuravkov",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.language,
    images: [
      {
        url: `${SITE_CONFIG.url}/cover.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.description,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/cover.jpg`],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_CONFIG.language}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE_CONFIG.name} RSS Feed`}
          href={`${SITE_CONFIG.url}/rss.xml`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${rubik.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
