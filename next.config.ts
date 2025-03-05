import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dodo.ac",
        port: "",
        pathname: "/np/images/**/*",
        search: "",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
