import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Portfolio - Guillermo",
  description: "Mon portfolio par Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/colombia.ico"  type="image/x-icon" />
      </head>
      <body className={clsx(inter.variable, 'bg-background text-foreground font-inter')}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}