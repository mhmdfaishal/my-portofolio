/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "static/images",
  },
  basePath: "/mhmdfaishal",  
  assetPrefix: "https://mhmdfaishal.tech"
  // source: "/api/:path*", 
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //   "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  //   "Access-Control-Allow-Credentials": "true",
  // },
};

module.exports = nextConfig;
