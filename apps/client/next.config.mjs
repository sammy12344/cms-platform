/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    externalDir: true,
  },

  future: {
    strictPostcssConfiguration: true,
  },
};

export default nextConfig;
