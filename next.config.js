/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]]
  },
  images: {
    domains: ['bit.ly']
  }
}

module.exports = nextConfig
