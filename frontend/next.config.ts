import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Desabilita o linting durante o processo de build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora erros de tipos durante o build
  },
};

export default nextConfig;