import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  allowedDevOrigins: ["192.168.1.69", "192.168.1.191", "localhost"],
};

export default nextConfig;
