/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "khuong-store-12076.eu.saleor.cloud",
      },
    ],
  },
};

module.exports = nextConfig;
