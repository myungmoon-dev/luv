import withPlaiceholder from "@plaiceholder/next";

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
  // FIXME: scrollRestoration 직접 구현하기
  experimental: {
    scrollRestoration: true,
  },
};

export default withPlaiceholder(nextConfig);
