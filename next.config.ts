import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 module.exports = {
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
}
};

export default nextConfig;
