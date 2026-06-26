/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scist.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scist.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
