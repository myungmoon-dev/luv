/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.myungmoon.or.kr" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "imagedelivery.net" },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui", "firebase"],
};

module.exports = nextConfig;
