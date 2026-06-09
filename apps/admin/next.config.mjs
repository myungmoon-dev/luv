import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL || "http://localhost:8080"}/api/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.myungmoon.or.kr" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "imagedelivery.net" },
      { protocol: "https", hostname: "myungmoon-images.s3.ap-northeast-2.amazonaws.com" },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["firebase", "ui"],
};

export default withPlaiceholder(nextConfig);
