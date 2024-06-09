/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'
import MayoBtn from '@/components/MayoBtn'
import { CONTRACT_ADDRESS } from '@/consts'
import { MayoConnectButton } from '@/components/ConnectButton'
import SwapComponent from '@/components/Swap'
import { useAccount, useBalance } from 'wagmi'



function MigrateToken() {
    const { address, chain, isConnected } = useAccount();
    const { data: tokenBalance } = useBalance({
        address: address,
        token: "0x3f6c91d57aa4A115346c84aa13e67f33379CD762",
        unit: 'ether',
    })

    return (
        <section className='relative z-20 bg-[#101011] min-w-[90%] max-w-[90%] md:min-w-[400px] md:max-w-[450px] 2xl:min-w-[600px] 2xl:max-w-[450px]'>
            <SwapComponent />
        </section>

    )
}
function Header() {
    return (
        <div className="w-full fixed left-0 top-0">

            <div className="flex flex-row p-[20px] absolute top-0 w-full z-0">
                <Image
                    src={'/imgs/mayo-logo.svg'}
                    width={80}
                    height={80}
                    alt={''}
                    className="cursor-pointer hover:opacity-80"
                    onClick={() => {
                        window.location.href = '/'
                    }}
                />
                <div className="flex flex-row ml-auto gap-[10px]">
                    <MayoConnectButton />
                </div>
            </div>

        </div>
    )
}
function BgEclipse() {
    return (
        <svg className='fixed left-[-40%] bottom-[25%] md:left-[-40%] md:bottom-[-20%] lg:left-[-20%] lg:bottom-[-30%] 2xl:left-[-15%] 2xl:bottom-[-10%] w-[500px] h-[500px] md:w-[750px] md:h-[750px] 2xl:w-[1250px] 2xl:h-[1250px]' width="1293" height="1294" viewBox="0 0 1293 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_699_3908)">
                <ellipse cx="646.5" cy="647" rx="298.5" ry="299" fill="#6700B7" />
            </g>
            <defs>
                <filter id="filter0_f_699_3908" x="0.899994" y="0.899994" width="1291.2" height="1292.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="173.55" result="effect1_foregroundBlur_699_3908" />
                </filter>
            </defs>
        </svg>
    )
}


export default function Home() {

    return (
        <div className="relative flex flex-col min-h-screen w-full items-center justify-center  pt-[100px] md:pt-0 lg:pt-[150px] 2xl:pt-[0px] claim-container  xl:justify-center overflow-hidden  gap-[50px]  overflow-y-hidden bg-[#101011] relative z-50">
            <Header />
            <MigrateToken />
            <section className='min-w-[90%] max-w-[90%] md:min-w-[400px] md:max-w-[450px] 2xl:min-w-[600px] 2xl:max-w-[450px] mt-5'>

                <div
                    className={`${Skincake.className} text-[12px] font-[400] text-[#636366] text-center`}
                >
                    All MAYO token holders from the old contract can exchange their balances and migrate to the new MAYO token without any penalties or restrictions
                </div>
                <div
                    className={`${Skincake.className} text-[12px] font-[400] text-[#636366] text-center my-8`}
                >
                    The conversion ratio is always 1:1 (100%) based on the percentage supply held per holder. For any further clarification, feel free to connect with us on <span onClick={() => window.open('https://t.me/MayoBearCoinETH', '_blank')} className='cursor-pointer text-[#8000E4] underline'>Telegram</span>
                </div>
            </section>
            <BgEclipse />
        </div>
    )
}