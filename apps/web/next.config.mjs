/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "www.jiomart.com",
      },
      {
        protocol: "https",
        hostname: "www.bigbasket.com",
      },
      {
        protocol: "https",
        hostname: "blinkit.com",
      },
      {
        protocol: "https",
        hostname: "cdn.grofers.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.mixkit.co",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/:path*`,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/categories',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/private-dining',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/chefs',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/faq',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/terms',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/privacy',
        destination: '/coming-soon',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
