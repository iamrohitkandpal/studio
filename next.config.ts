import type {NextConfig} from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

// Optimize image handling with Next.js
const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  // Add performance budgets
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  }
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
