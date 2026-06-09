import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto para evitar que Next infiera un root erróneo
  // cuando hay otros lockfiles en carpetas superiores.
  turbopack: {
    root: __dirname,
  },
  // Hosts externos permitidos para next/image (foto temporal de Unsplash).
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
