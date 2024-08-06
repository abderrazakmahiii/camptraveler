/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/camptraveler" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/camptraveler" : "",
  trailingSlash: true,
};

export default nextConfig;
