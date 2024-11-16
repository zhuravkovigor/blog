import localFont from "next/font/local";
import "../globals.css";
import { languages } from "../i18n/settings";
import { dir } from "i18next";

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
      <body className={`${gilroyFont.className} antialiased`}>{children}</body>
    </html>
  );
}
