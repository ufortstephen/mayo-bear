import { Montserrat } from '@/styles/fonts';
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
                                        className={`flex text-black rounded btn px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-[#8000E4] ${Montserrat.className} font-[700] text-[16px] border-none`}
                                    >
                                        Connect Wallet
                                    </div>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <div
                                        onClick={openChainModal}
                                        className={`flex text-black rounded btn px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-[#8000E4] ${Montserrat.className} font-[700] text-[16px] border-none`}
                                    >
                                        Wrong network
                                    </div>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }} className='rounded btn px-[24px] py-[12px] capitalize bg-[#8000E4] text-white ${Montserrat.className} font-[700] text-[16px] border-none'>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>
                                    <button onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
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