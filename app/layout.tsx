import type { Metadata } from "next";
import "./globals.scss";
import HeaderComponent from "@/components/Header/Header.component";
import FooterComponent from "@/components/Footer/Footer.component";

export const metadata: Metadata = {
  title: "michitta space",
  description: "Пространство michitta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
