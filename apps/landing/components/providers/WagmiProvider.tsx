"use client";

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import RainbowKitProvider from './RainbowProvider';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    arbitrum,
    base,
    bsc,
    mainnet,
    optimism,
    polygon,
    sepolia,
} from 'wagmi/chains';



const queryClient = new QueryClient();

export function WagmiProviders({ children }: { children: React.ReactNode }) {


    const config = getDefaultConfig({
        appName: 'Mayo Bear',
        appUrl: 'https://www.mayobear.xyz/',
        projectId: 'd2300a43e737443584584ffb441e9ffa',
        chains: [
            mainnet
        ],
        ssr: true,
    });


    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}