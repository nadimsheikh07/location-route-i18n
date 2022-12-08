/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ar'],
    localeDetection: true,
  }
}

module.exports = nextConfig
