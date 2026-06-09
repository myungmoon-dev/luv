import type { NextConfig } from "next";

import { getBackendApiOrigin } from "./lib/api-config";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.myungmoon.or.kr" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "imagedelivery.net" },
      { protocol: "https", hostname: "myungmoon-images.s3.ap-northeast-2.amazonaws.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${getBackendApiOrigin()}/api/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/discipleship/newFamilly",
        destination: "/discipleship/new-family",
        permanent: true,
      },
      {
        source: "/discipleship/homeworship",
        destination: "/discipleship/family-worship",
        permanent: true,
      },
      {
        source: "/discipleship/bible",
        destination: "/discipleship/faith-education",
        permanent: true,
      },
      {
        source: "/discipleship/newcomer-education",
        destination: "/discipleship/faith-education",
        permanent: true,
      },
      {
        source: "/discipleship/newlyweds",
        destination: "/discipleship/community-training",
        permanent: true,
      },
      {
        source: "/discipleship/3040",
        destination: "/discipleship/community-training",
        permanent: true,
      },
      {
        source: "/discipleship/books",
        destination: "/news/books",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
