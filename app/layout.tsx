import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "michitta's space",
  description: "Сайт-портфолию",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body id="Home" className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
