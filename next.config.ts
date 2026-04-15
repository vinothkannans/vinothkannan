import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "traffic.cv",
      },
      {
        protocol: "https",
        hostname: "zty.pe",
      },
    ],
  },
};

export default nextConfig;
