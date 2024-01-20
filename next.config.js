/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the new output configuration
  output: {
  
    target: 'static',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    target: 'experimental-serverless-trace',
  },
};

module.exports = nextConfig;