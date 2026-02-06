import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=30; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
