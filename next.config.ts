import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/faq",
        destination: "/#faq",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/career/ai-engineer",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/career/ai%20engineer",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/career/devops%20engineer",
        destination: "/career/devops-engineer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
