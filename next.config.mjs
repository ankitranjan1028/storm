// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // For static export (optional)
      // If you're deploying to a server, you can remove the line above
      // and uncomment the line below to add your domain(s)
      // domains: ['your-domain.com'],
    },
    // If you're using the app directory structure in Next.js 13+,
    // you might need this:
    experimental: {
      appDir: false,
    },
  }
  
  module.exports = nextConfig