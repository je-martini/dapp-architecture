/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        STAGING_ALCHEMY_KEY:
            "https://eth-sepolia.g.alchemy.com/v2/5qZO74AONfXbZPVcfJyF5XKj5rqv5yiM"
    },
};

module.exports = nextConfig;