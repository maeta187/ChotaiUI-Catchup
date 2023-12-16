/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]]
  },
  transpilePackages: ['jotai-devtools'],
  images: {
    domains: ['bit.ly']
  }
}

module.exports = nextConfig
