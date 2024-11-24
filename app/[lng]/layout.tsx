import localFont from "next/font/local";
import "../globals.css";
import { languages } from "../i18n/settings";
import { dir } from "i18next";
import Header from "@/components/parts/Header";
import Navigation from "@/components/parts/Navigation";

const gilroyFont = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Regular.woff",
      weight: "400",
    },
    {
      path: "../fonts/Gilroy-Medium.woff",
      weight: "500",
    },
    {
      path: "../fonts/Gilroy-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-gilroy",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />

      <body
        className={`${gilroyFont.className} bg-body text-zinc-300 antialiased`}
      >
        <Header />
        {children}

        <Navigation />
      </body>
    </html>
  );
}
