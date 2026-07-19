import type { NextConfig } from "next";
import { withEve } from "eve/next"

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

export default withEve(nextConfig);
