import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Gartenbau-Website',
  assetPrefix: '/Gartenbau-Website/',
};

export default nextConfig;
