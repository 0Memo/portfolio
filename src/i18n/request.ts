import { getRequestConfig } from 'next-intl/server';

const locales = ['fr', 'es', 'en', 'pt', 'it'];

export default getRequestConfig(async (context) => {
    const requestLocale = await context?.requestLocale || 'fr';

    if (!locales.includes(requestLocale)) {
        throw new Error(`Unsupported locale: ${requestLocale}`);
    }

    return {
        locale: requestLocale,
        messages: (await import(`../../messages/${requestLocale}.json`)).default,
    };
});