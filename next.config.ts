import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  allowedDevOrigins: ["192.168.1.69", "100.69.69.69"],
};

export default nextConfig;
