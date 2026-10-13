/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep in sync with src/i18n/locales.ts. The default locale has no URL
  // prefix; browser-language detection only runs on `/` (see docs/i18n-handoff.md).
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/5JNJcmHSQ',
        permanent: false,
      },
      // The learn platform moved to its own site on 2026-10-13; it maps its old URL shapes
      // itself, so the path goes through unchanged. Next adds no locale prefix to an
      // external destination, so each rule is written per locale with `locale: false`.
      // With `locale: false` the path is matched with the default locale already prefixed:
      // `/en/learn/...` is what a request for `/learn/...` looks like (`/learn/...` matches nothing).
      {
        source: '/en/learn/:path*',
        destination: 'https://learn.diablohumastudio.com/:path*',
        permanent: true,
        locale: false,
      },
      {
        source: '/es/learn/:path*',
        destination: 'https://learn.diablohumastudio.com/es/:path*',
        permanent: true,
        locale: false,
      },
      // Class links shared before the section was called /learn.
      {
        source: '/en/incine/:path*',
        destination: 'https://learn.diablohumastudio.com/:path*',
        permanent: true,
        locale: false,
      },
      {
        source: '/es/incine/:path*',
        destination: 'https://learn.diablohumastudio.com/es/:path*',
        permanent: true,
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
