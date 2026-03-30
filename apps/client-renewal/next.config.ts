import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
