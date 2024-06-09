import { Geom, Montserrat } from '@/styles/fonts';
import { ConnectButton } from '@rainbow-me/rainbowkit';
export const MayoConnectButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted;
                const connected =
                    ready &&
                    account &&
                    chain
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <div
                                        onClick={openConnectModal}
                                        className={`flex  ${Montserrat.className} font-[700] text-[16px] border-none shadow-lg blur-button`}
                                    >
                                        <button
                                            className={` ${Montserrat.className} font-[700] text-[#33005A] rounded btn px-6 py-3  capitalize hover:bg-white hover:opacity-80 bg-[#8000E4] rounded-full`}
                                            aria-label="Connect Wallet"
                                            role="button"
                                        >
                                            Connect Wallet
                                        </button>
                                    </div>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <div
                                        onClick={openChainModal}
                                        className={`flex text-black rounded btn px-6 py-3 capitalize hover:bg-white hover:opacity-80 bg-[#8000E4] ${Montserrat.className} font-[700] text-[16px] border-none`}
                                    >
                                        Wrong network
                                    </div>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }} className={`${Montserrat.className} rounded btn  capitalize  text-white  font-[700] text-[16px] border-none bg-transparent`}>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: '#8000E4',
                                                    width: 34,
                                                    height: 34,
                                                    borderRadius: 999,
                                                    overflow: '',
                                                    marginRight: 0,
                                                    position: 'relative'
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 20, height: 20 }}
                                                        className='absolute bottom-0 -right-1 border border-r border-white rounded-full'
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </button>
                                    <button onClick={openAccountModal} className={`${Geom.className} text-sm`} type="button">
                                        {account.displayName}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};