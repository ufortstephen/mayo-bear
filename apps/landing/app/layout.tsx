
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import type { Metadata } from 'next'
import AppContainer from '@/components/containers/AppContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactNode } from 'react'
import ENV from '@/env'
import { Montserrat } from '@/styles/fonts'
import { WagmiProviders } from '@/components/providers/WagmiProvider'
import RainbowKitProvider from '@/components/providers/RainbowProvider'

export const metadata: Metadata = {
    title: 'Mayo Bear',
    description: '',
    manifest: '/site.webmanifest',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16' },
            { url: '/favicon-32x32.png', sizes: '32x32' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '152x152' }],
    },
    openGraph: {
        type: 'website',
        url: 'https://www.mayobear.xyz/',
        title: 'Mayo Bear',
        description: '',
        images: [`${ENV.CDN_BASE_URL}/url-preview.jpg`],
    },
    twitter: {
        title: 'Mayo Bear',
        description: '',
        images: [`${ENV.CDN_BASE_URL}/url-preview.jpg`],
    },
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${Montserrat.className} max-w-full bg-white text-black`}
            >
                <WagmiProviders>
                    <ToastContainer />
                    <AppContainer>{children}</AppContainer>
                </WagmiProviders>
            </body>
        </html>
    )
}
