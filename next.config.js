/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "static/images",
  },
  basePath: "/mhmdfaishal",  
  assetPrefix: "/",  
};

module.exports = nextConfig;
