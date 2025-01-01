import HomeBtn from "@/components/HomeBtn";
import { NextIntlClientProvider, useTranslations } from "next-intl";

export default async function SubPagesLayout({ children, params }) {
    const locale = params.locale;
    const messages = (await import(`../../../../messages/${locale}.json`)).default;

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <main className="flex min-h-screen flex-col items-center justify-center py-20 px:8 xs:px-16 lg:px-32">
                <HomeBtn />
                {children}
                <Footer />
            </main>
        </NextIntlClientProvider>
    );
}

function Footer() {
    const t = useTranslations('footer');

    return (
        <p className="fixed bottom-0 text-custom mb-2 font-semibold text-sm lg:text-md">
            &copy; Guillermo 2025 | {t('title')}
        </p>
    );
}