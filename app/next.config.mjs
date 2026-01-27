/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["placehold.co", "media.discordapp.net", "scist.org", "scist.net"],
  },
};

export default nextConfig;
