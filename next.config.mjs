/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/camptraveler", // This should match your GitHub repo name
  assetPrefix: "/camptraveler", // Ensures assets use the correct URL
};

module.exports = nextConfig;
