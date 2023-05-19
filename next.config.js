/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["antd"],
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
