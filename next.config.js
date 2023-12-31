/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { loader: 'custom',
   loaderFile: './myImageLoader.ts', 
  remotePatterns: [{ hostname: "d1ag7mncn2gv9p.cloudfront.net", protocol: "https", port: "", pathname: "/*" }] },
};

module.exports = nextConfig;
