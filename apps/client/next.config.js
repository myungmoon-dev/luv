/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.myungmoon.or.kr" }],
  },
  reactStrictMode: true,
  transpilePackages: ["ui", "firebase"],
};

module.exports = nextConfig;
