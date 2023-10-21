/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_WIKIPEDIA_URL,
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_PINTEREST_URL,
            },
        ],
    },
};

module.exports = nextConfig;
