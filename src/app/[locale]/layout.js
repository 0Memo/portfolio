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
  icons: {
    icon: "/favicon.ico",
  },
};

const VALID_LOCALES = ["en", "es", "fr", "pt", "it", "ro", "se"];
const DEFAULT_LOCALE = "en";

export default async function RootLayout({ children, params }) {
  const { locale: rawLocale } = await params;

  const locale = VALID_LOCALES.includes(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  if (rawLocale !== locale) {
    console.warn(
      `Invalid locale "${rawLocale}" requested. Using fallback: ${locale}`
    );
  }

  let messages;

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Failed to load locale:", locale, error);
    messages = (await import(`../../../messages/${DEFAULT_LOCALE}.json`)).default;
  }

  if (typeof messages !== 'object') {
    console.error("Invalid messages object for locale:", locale);
    messages = (await import(`../../../messages/${DEFAULT_LOCALE}.json`)).default;
  }

  return (
    <html lang={locale}>
      <body className={clsx(inter.variable, 'bg-background text-foreground font-inter')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <FireFliesBackground />
          <Sound />
        </NextIntlClientProvider>
        <div id="my-modal" />
      </body>
    </html>
  );
}