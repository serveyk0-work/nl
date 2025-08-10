import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Генерує статичний сайт
  basePath: isProd ? "/nl" : "", // назва твого репозиторію
  assetPrefix: isProd ? "/nl/" : "",
};

export default nextConfig;