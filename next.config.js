/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
