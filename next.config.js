import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin(path.resolve('./src/i18n/request.ts'));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default withNextIntl(nextConfig);