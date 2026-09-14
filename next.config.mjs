/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ THIS IS MISSING

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/221105245",
      },
    ],
  },
}

export default nextConfig