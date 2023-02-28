/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "scontent.fgig4-1.fna.fbcdn.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fgig4-1.fna.fbcdn.net",
        port: "",
        pathname: "/v/**",
      },
    ],
  },
};

module.exports = nextConfig;
