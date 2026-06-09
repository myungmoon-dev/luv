import type { NextConfig } from "next";

import { getBackendApiOrigin } from "./lib/api-config";

const API_ORIGIN = getBackendApiOrigin();

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_ORIGIN}/api/:path*`,
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
