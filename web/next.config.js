/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "a.lmcdn.ru", "storage.googleapis.com"],
    formats: ["image/webp"],
    minimumCacheTTL : 60 * 60 * 24,
    deviceSizes: [180, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },

  productionBrowserSourceMaps: true,
  trailingSlash : true
};

module.exports = nextConfig;
