import HomeBtn from "@/components/HomeBtn";
import { NextIntlClientProvider, useTranslations } from "next-intl";

export default function SubPagesLayout({ children, params }) {
    const t = useTranslations('footer');
    const locale = params.locale;
    const messages = require(`../../../../messages/${locale}.json`);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-20 px:8 xs:px-16 lg:px-32">
            <HomeBtn />
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
            <p className="fixed bottom-0 text-custom mb-2 font-semibold text-sm lg:text-md">&copy; Guillermo 2024 | {t('title')}</p>
        </main>
    );
}
