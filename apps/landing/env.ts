const ENV = {
    UNLEASH_THE_TITAN: process.env['NEXT_PUBLIC_UNLEASH_THE_TITAN'] === 'yes',

    BUILDER_API_KEY: process.env['NEXT_PUBLIC_BUILDER_API_KEY'],
    WALLET_CONNECT_PID: process.env['NEXT_PUBLIC_WALLET_CONNECT_PID'],

    ALCHEMY_API_KEY: process.env['NEXT_PUBLIC_ALCHEMY_API_KEY'],
    NETWORK: process.env['NEXT_PUBLIC_NETWORK'],
    ETHERSCAN_BASE_URL: process.env['NEXT_PUBLIC_ETHERSCAN_BASE_URL'],

    OPENSEA_BASE_URL: process.env['NEXT_PUBLIC_OPENSEA_BASE_URL'],
    OPENSEA_COLLECTION_SLUG: process.env['NEXT_PUBLIC_OPENSEA_COLLECTION_SLUG'],

    SEED_SALE_CONTRACT_ADDRESS: process.env[
        'NEXT_PUBLIC_SEED_SALE_CONTRACT_ADDRESS'
    ] as `0x${string}`,
    USDC_CONTRACT_ADDRESS: process.env[
        'NEXT_PUBLIC_USDC_CONTRACT_ADDRESS'
    ] as `0x${string}`,
    USDT_CONTRACT_ADDRESS: process.env[
        'NEXT_PUBLIC_USDT_CONTRACT_ADDRESS'
    ] as `0x${string}`,

    CDN_BASE_URL: process.env['NEXT_PUBLIC_CDN_BASE_URL'],
}

// TODO:
// if (!config.BUILDER_API_KEY) {
//     throw new Error('NEXT_PUBLIC_BUILDER_API_KEY is not defined')
// }
// if (!config.SEED_SALE_CONTRACT_ADDRESS) {
//     throw new Error('NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS is not defined')
// }
// if (!config.ETHERSCAN_BASE_URL) {
//     throw new Error('NEXT_PUBLIC_ETHERSCAN_BASE_URL is not defined')
// }

export default ENV
