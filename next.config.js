/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig;