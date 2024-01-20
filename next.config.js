/** @type {import('next').NextConfig} */


const nextConfig = {
 
  output : 'export',
  distDir : 'dist',
  images: {
    loader: 'imgix',
    path: 'https://frugalcodes.github.io/Trestour-App-LandingPage/', 
    disableStaticImages: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;