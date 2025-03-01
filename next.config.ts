import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://89.46.33.188/api/:path*",
            },
        ];

    },
};

export default nextConfig;
