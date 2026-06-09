import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const API_ORIGIN = process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL?.replace(/\/$/, "") ?? "http://localhost:8080";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_ORIGIN}/api/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.myungmoon.or.kr" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "imagedelivery.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
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
