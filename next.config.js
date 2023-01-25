/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scontent-msp1-1.xx.fbcdn.net",
            },
        ],
    },
};

module.exports = nextConfig;
