import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin(path.resolve('./src/i18n/request.ts'));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.json$/,
            include: path.resolve(__dirname, 'src/messages'),
            type: 'json',
        });
        return config;
    },
};

export default withNextIntl(nextConfig);