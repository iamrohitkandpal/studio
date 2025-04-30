import type {NextConfig} from 'next';

// Enable bundle analyzer plugin conditionally based on environment variable
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});


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
    // Reduce default image quality slightly for faster loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 1 day
  },
   // Experimental features for performance
   experimental: {
     // Enable optimizations - may change in future Next.js versions
     optimizePackageImports: ['lucide-react', 'framer-motion'],
     // Consider enabling other relevant experimental flags if stable enough
   },
  // Compiler options for optimization
  compiler: {
    // Remove console logs in production builds
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable react profiling (useful for debugging performance)
    // reactRemoveProperties: process.env.NODE_ENV === 'production', // Can remove test IDs etc.
  },
   // Further reduce hydration overhead - might be default in newer Next.js
   reactStrictMode: true, // Keep true for development checks
};

// Apply the bundle analyzer plugin
export default withBundleAnalyzer(nextConfig);
