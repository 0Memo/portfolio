import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['fr', 'es', 'en', 'pt', 'it'];

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    if ( !locales.includes(locale)) notFound();

    return {
        locale,
        messages: (await import(`../messages/${ locale }.json`)).default
    }
})