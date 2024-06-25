import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { createClient } from 'viem'

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})