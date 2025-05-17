/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'findship.ai'
      }
    ]
  }
};

module.exports = nextConfig;
