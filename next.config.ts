import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Une seule adresse indexable : le domaine nu redirige vers www (le canonical).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "demarches-civiques.fr" }],
        destination: "https://www.demarches-civiques.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
