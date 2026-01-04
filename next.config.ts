import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magicul.io",
      },
    ],
  },
};

export default nextConfig;
