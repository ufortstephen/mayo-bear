import ENV from '@/env'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import {
    coinbaseWallet,
    metaMaskWallet,
    rainbowWallet,
    trustWallet,
    walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'

export const { chains, publicClient } = configureChains(
    [ENV.NETWORK == 'mainnet' ? mainnet : sepolia],
    [
        alchemyProvider({ apiKey: ENV.ALCHEMY_API_KEY as string }),
        publicProvider(),
    ]
)

const projectId = ENV.WALLET_CONNECT_PID
const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            // @ts-ignore
            trustWallet({ projectId, chains }),
            // @ts-ignore
            metaMaskWallet({
                projectId,
                chains,
            }),
            // @ts-ignore
            rainbowWallet({ projectId, chains }),
            // @ts-ignore
            walletConnectWallet({ projectId, chains }),
            coinbaseWallet({ appName: '', chains }),
        ],
    },
])

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
})

export default function WagmiProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
