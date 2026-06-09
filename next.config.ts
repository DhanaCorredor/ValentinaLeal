import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto para evitar que Next infiera un root erróneo
  // cuando hay otros lockfiles en carpetas superiores.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
