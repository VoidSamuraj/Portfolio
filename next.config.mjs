/** @type {import('next').NextConfig} */
const isProd = true;
const basePath = isProd ? '' : '';
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: isProd ? 'https://karolrobak.com' + basePath : '',
  output: "export",
};

export default nextConfig;
