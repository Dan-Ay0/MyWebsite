import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* REMOVED: output: "standalone" - Keep it simple for Vercel */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
