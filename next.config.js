/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
};

module.exports = nextConfig;
