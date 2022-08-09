/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "static/images",
  },
  basePath: "/mhmdfaishal",  
  assetPrefix: "https://mhmdfaishal.github.io",  
};

module.exports = nextConfig;
