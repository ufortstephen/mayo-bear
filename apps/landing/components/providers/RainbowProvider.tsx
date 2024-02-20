/* eslint-disable @next/next/no-img-element */
import {
    AvatarComponent,
    RainbowKitProvider,
    Theme,
} from '@rainbow-me/rainbowkit'
import { chains } from './WagmiProvider'
import ENV from '@/env'

export default function RainbowProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
        return (
            <img
                src={`${ENV.CDN_BASE_URL}/favicon.png`}
                width={size}
                height={size}
                style={{ borderRadius: 999 }}
            />
        )
    }

    const myCustomTheme: Theme = {
        blurs: {
            modalOverlay: '',
        },
        colors: {
            accentColor: '#D0D5E0',
            accentColorForeground: 'black',
            actionButtonBorder: 'var(--greyscale-grey-80, #48484A)',
            actionButtonBorderMobile: 'var(--greyscale-grey-80, #48484A)',
            actionButtonSecondaryBackground: '',
            closeButton: 'var(--greyscale-grey-80, #48484A)',
            closeButtonBackground: '',
            connectButtonBackground: '',
            connectButtonBackgroundError: '',
            connectButtonInnerBackground: '#D0D5E0',
            connectButtonText: '#D0D5E0',
            connectButtonTextError: '',
            connectionIndicator: '',
            downloadBottomCardBackground: '',
            downloadTopCardBackground: '',
            error: '',
            generalBorder: 'var(--greyscale-grey-80, #48484A)',
            generalBorderDim: '',
            menuItemBackground: '',
            modalBackdrop: '',
            modalBackground: 'black',
            modalBorder: 'var(--greyscale-grey-80, #48484A)',
            modalText: '#D0D5E0',
            modalTextDim: '#636366',
            modalTextSecondary: '#636366',
            profileAction: '',
            profileActionHover: '',
            profileForeground: '',
            selectedOptionBorder: '',
            standby: '',
        },
        fonts: {
            body: '',
        },
        radii: {
            actionButton: '',
            connectButton: '',
            menuButton: '',
            modal: '',
            modalMobile: '',
        },
        shadows: {
            connectButton: '',
            dialog: '',
            profileDetailsAction: '',
            selectedOption: '',
            selectedWallet: '',
            walletLogo: `${ENV.CDN_BASE_URL}/favicon.png`,
        },
    }

    return (
        <RainbowKitProvider
            chains={chains}
            avatar={CustomAvatar}
            theme={myCustomTheme}
        >
            {children}
        </RainbowKitProvider>
    )
}
