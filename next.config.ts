import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@tabler/icons-react',
      '@icons-pack/react-simple-icons',
    ],
  },
};

export default nextConfig;
