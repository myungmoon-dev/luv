/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.myungmoon.or.kr" }],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
