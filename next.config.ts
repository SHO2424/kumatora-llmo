import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828],
    imageSizes: [128, 192, 256, 384],
  },
};

export default nextConfig;
