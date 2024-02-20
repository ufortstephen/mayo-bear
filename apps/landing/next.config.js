/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
}

module.exports = {
    ...nextConfig,
    images: {
        domains: ['gateway.pinata.cloud', 'ipfs.io', 'ik.imagekit.io'],
    },
}
