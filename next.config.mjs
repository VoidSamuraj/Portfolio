/** @type {import('next').NextConfig} */
const isProd = false;
const basePath = isProd ? '' : '';
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: isProd ? 'https://karolrobak.com' + basePath : '',
};

export default nextConfig;
