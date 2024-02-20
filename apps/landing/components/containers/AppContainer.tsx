'use client'
import WagmiProvider from '@/components/providers/WagmiProvider'
import RainbowProvider from '../providers/RainbowProvider'
// import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react'
import { MusicProvider } from '../providers/MusicProvider'
import { PHProvider } from '@/hooks/PostHogProvider'
import { DarkModeProvider } from '../providers/DarkModeProvider'

export default function AppContainer({ children }: { children: ReactNode }) {
    return (
        <WagmiProvider>
            <RainbowProvider>
                <MusicProvider>
                    <DarkModeProvider>
                        <PHProvider>{children}</PHProvider>
                    </DarkModeProvider>
                </MusicProvider>
            </RainbowProvider>
        </WagmiProvider>
    )
}
