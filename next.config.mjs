/** @type {import('next').NextConfig} */
const isProd = true;
const basePath = isProd ? '/Portfolio' : '';
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: isProd ? `https://voidsamuraj.github.io/Portfolio` : '',,
  output: "export",
};

export default nextConfig;
