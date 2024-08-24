/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
    },
    reactStrictMode: true,
};

export default nextConfig;
