/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'
import MayoBtn from '@/components/MayoBtn'

function Hero() {
    return (
        <div className="bg-[#8205E7] relative w-full max-h-[1013px]">
            <div className="hidden md:flex flex-row p-[20px] absolute top-0 w-full">
                <Image
                    src={'/imgs/logo.png'}
                    width={60}
                    height={60}
                    alt={''}
                    className="cursor-pointer hover:opacity-80"
                    onClick={() => {
                        window.location.href = '/'
                    }}
                />
                <div className="flex flex-row ml-auto gap-[10px]">
                    <div
                        onClick={() => {
                            window.open(
                                'https://t.me/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px]`}
                    >
                        Mayo Swap
                    </div>
                    <div
                        onClick={() => {
                            window.open(
                                'https://t.me/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px]`}
                    >
                        Vote
                    </div>
                    <div
                        onClick={() => {
                            document
                                .getElementById('ROADMAP')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`text-black rounded btn px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px]`}
                    >
                        Roadmap
                    </div>
                    <div
                        onClick={() => {
                            document
                                .getElementById('MAYONOMICS')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px]`}
                    >
                        Mayonomics
                    </div>
                    <div
                        onClick={() => {
                            window.open(
                                'https://t.me/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`text-white rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-black ${Montserrat.className} font-[700] text-[16px]`}
                    >
                        Buy
                    </div>
                    {/* <div
                        onClick={() => {
                            window.open(
                                'https://t.me/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px]`}
                    >
                        Join Telegram
                    </div> */}
                    {/* <div
                        onClick={() => {
                            window.open(
                                'https://twitter.com/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`text-white rounded btn px-[24px] py-[12px] capitalize hover:bg-[#00A3FF] bg-[#00A3FF] ${Montserrat.className} font-[700] text-[16px] hover:opacity-80`}
                    >
                        Follow on X
                    </div> */}
                </div>
            </div>
            <div className="h-[1113px] hidden sm:flex overflow-x-hidden">
                <Image
                    src={'/imgs/mayobear.png'}
                    alt={''}
                    className="object-cover object-center mx-auto h-full max-w-[1512px]"
                    style={{ width: '100%', height: 'auto' }}
                    width={4096}
                    height={2652}
                />
            </div>
            <Image
                src={'/imgs/mayobear-mobile.png'}
                alt={''}
                className="object-cover overflow-visible mx-auto w-full h-full sm:hidden"
                width={1170}
                height={2342}
            />
            {/* <Image
                src={'/imgs/mayobear.png'}
                alt={''}
                className="hidden sm:flex object-cover overflow-visible mx-auto w-full h-full max-w-[1512px]"
                width={4096}
                height={2652}
            /> */}

            {/* <div className="absolute w-[317px] md:w-[494px] left-1/2 transform -translate-x-[51%] bottom-[23px] md:bottom-[20px]lg:bottom-[30px] xl:bottom-[0px] 2xl:bottom-[-36px] flex flex-col gap-[8px]"> */}
            <div className="w-[317px] md:w-[494px] -mt-[166px] sm:-mt-[186px] lg:-mt-[166px]  mx-auto flex flex-col gap-[8px]">
                <MayoBtn />
                <div className="flex gap-[24px] w-full justify-center">
                    <Image
                        onClick={() => {
                            window.open(
                                'https://dexscreener.com/ethereum/0xCBCbad3b2340FEd311a693dFe5B97bD187046C71',
                                '_blank'
                            )
                        }}
                        className="cursor-pointer hover:opacity-80"
                        src={'/icons/dexscreener.png'}
                        alt={''}
                        width={21.88}
                        height={26}
                    />
                    <Image
                        onClick={() => {
                            window.open(
                                'https://etherscan.io/address/0xCBCbad3b2340FEd311a693dFe5B97bD187046C71',
                                '_blank'
                            )
                        }}
                        className="cursor-pointer hover:opacity-80"
                        src={'/icons/etherscan.png'}
                        alt={''}
                        width={26}
                        height={26}
                    />
                    <Image
                        onClick={() => {
                            window.open(
                                'https://www.dextools.io/app/en/ether/pair-explorer/0xCBCbad3b2340FEd311a693dFe5B97bD187046C71',
                                '_blank'
                            )
                        }}
                        className="cursor-pointer hover:opacity-80"
                        src={'/icons/dex.png'}
                        alt={''}
                        width={22.6}
                        height={26}
                    />
                    <Image
                        onClick={() => {
                            window.open(
                                'https://twitter.com/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className="cursor-pointer hover:opacity-80"
                        src={'/icons/x.png'}
                        alt={''}
                        width={26}
                        height={26}
                    />
                </div>
            </div>
        </div>
    )
}

function Info() {
    return (
        <div className="flex flex-col px-[32px] lg:px-0 lg:flex-row w-full max-w-[1186px] gap-[60px]">
            <div
                className={`${Montserrat.className} text-[14px] font-[600] leading-[32px] text-[#100] max-w-[436px]`}
            >
                Mayo Bear <br />
                <br />
                Mayo Bear is deeply committed to empowering opensource
                development, especially projects that harness the power of the
                Purple AI engine. Our vision is to support initiatives that not
                only leverage this innovative engine but also embody values of
                equality, justice, transparency, and autonomy.
                <br />
                <br />
                If your project shares these ideals and utilizes Purple AI to
                distinguish itself in the market, we are eager to stand by you,
                promoting your efforts as part of our broader mission.
                <br />
                <br />
                Join our movement as we employ the $MAYO token to fund and
                nurture projects developed within the Purple AI system. This
                commitment goes beyond mere technological advancement; it is
                about fostering a culture of decentralization, striving for a
                future where liberation and innovation are unrestrained.
                <div
                    onClick={() => {
                        // window.open('https://twitter.com/MayoBearCoinETH', '_blank')
                    }}
                    className={`${Montserrat.className} mt-[30px] w-[237px] whitespace-nowrap btn cursor-pointer shadow-xl flex flex-row gap-[10px] px-[24px] py-[12px] rounded-full bg-[#FFF8E5] text-black hover:bg-[#FFF8E5] text-[16px] font-[700] border-none capitalize hover:opacity-80`}
                >
                    <Image
                        width={24}
                        height={24}
                        src={'/icons/telegram.svg'}
                        alt={''}
                    />
                    MayoBearCoinETH
                </div>
            </div>

            <div className="mx-auto my-auto lg:ml-auto">
                <PictureFrame
                    className="w-full h-full lg:w-[513px] lg:h-[513px] rotate-6 shadow-2xl border-[23px]"
                    img={'/imgs/mayo-space.jpeg'}
                />
            </div>
        </div>
    )
}

function PictureFrame({ img, className }: { img: string; className?: string }) {
    return (
        <div
            className={`${className} w-[332.41px] border-[13px] shadow-md border-white`}
        >
            <Image
                src={img}
                alt={''}
                width={332.41}
                height={332.41}
                className="object-cover w-full h-full"
            />
        </div>
    )
}

function RedactedPictureFrame({ className }: { className?: string }) {
    return (
        <div
            className={`${className} w-[332.41px] h-[332.41px] border-[13px] shadow-md border-white`}
        >
            <div
                className={`w-full h-full flex text-[#FFF8E5] bg-black ${Skincake.className} m-auto`}
            >
                <div className="m-auto">(REDACTED)</div>
            </div>
        </div>
    )
}

function Artworks() {
    return (
        <div className="gap-[61px] flex flex-col w-full">
            <div className="flex flex-col gap-[12px] mx-auto">
                <div
                    style={{
                        textShadow: ' 0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} xl:flex gap-[8px] text-[56px] lg:text-[90px] text-center`}
                >
                    {' '}
                    Our <div className="-mt-[36px] md:-mt-0">Artworks</div>
                </div>
                <div
                    className={`${Montserrat.className} font-[700] text-[16px] text-center text-[#BFBFBF]`}
                >
                    {' '}
                    From our community prompt engineers
                </div>
            </div>
            <div className="lg:mx-auto carousel">
                <div className="flex flex-nowrap py-[33px] gap-[-20px]">
                    <RedactedPictureFrame className="hidden lg:flex" />
                    <RedactedPictureFrame className="rotate-6" />
                    <RedactedPictureFrame />
                    <RedactedPictureFrame className="rotate-6" />
                    <RedactedPictureFrame className="rotate-[353deg]" />
                    <RedactedPictureFrame className="rotate-[353deg]" />
                </div>
            </div>
        </div>
    )
}

const PurpleSquare = () => {
    return (
        <div className="shrink-0 bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] w-[32px] h-[32px]" />
    )
}

const TimelineDesktop = () => {
    return (
        <>
            <div className="flex gap-5 justify-between px-5 max-w-[786px] mx-auto">
                <div className="flex relative flex-col flex-1 text-center max-md:text-4xl">
                    <div
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[46px] leading-[52px]`}
                    >
                        Donate for the
                    </div>
                    <div
                        className={`${Skincake.className} absolute top-[32px] left-1/2 -translate-x-1/2  text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[46px] leading-[52px]`}
                    >
                        Culture
                    </div>
                    <div className="mt-[32px] text-sm font-semibold leading-8 whitespace-nowrap text-stone-950">
                        You'll own nothing and be happy!
                    </div>
                    <div
                        className={`mt-[253px] bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[46px] ${Skincake.className}`}
                    >
                        Mayo Swap
                    </div>
                    <div className="text-sm font-semibold leading-8 whitespace-nowrap text-stone-950">
                        The special sauce
                    </div>
                    <div
                        className={`${Skincake.className} text-transparent bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] mt-[283px] text-[46px]`}
                    >
                        MAYO Grants
                    </div>
                    <div className="text-sm font-semibold leading-8 text-stone-950">
                        We'll fund projects utilizing the Purple AI engine,
                        positioning them for success
                    </div>
                </div>
                <div className="flex flex-col justify-center self-start basis-0 max-md:hidden">
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0] " />
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0]" />
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0]" />
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0]" />
                    <PurpleSquare />
                </div>
                <div className="flex flex-col flex-1 my-auto text-5xl text-center text-[46px]">
                    <div
                        className={`bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[46px] ${Skincake.className}`}
                    >
                        Token Launch
                    </div>
                    <div className="text-sm font-semibold leading-8 whitespace-nowrap text-stone-950">
                        $MAYO makes his first mark on the market
                    </div>
                    <div
                        className={`mt-[293px] text-transparent bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] max-md:mt-10 text-[46px] ${Skincake.className}`}
                    >
                        CEX Listings
                    </div>
                    <div className="text-sm font-semibold leading-8 text-stone-950">
                        Just hodl and you'll be happy You'll own nothing and be
                        happy!
                    </div>
                </div>
            </div>
        </>
    )
}
const TimelineMobile = () => {
    return (
        <>
            <div className="flex gap-5 justify-between px-5 max-w-[786px] mx-auto">
                <div className="flex flex-col justify-center self-start basis-0 max-md:hidden">
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0] " />
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0]" />
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0]" />
                    <PurpleSquare />
                    <div className="self-center w-0.5 h-40 bg-[#F0F0F0]" />
                    <PurpleSquare />
                </div>
                <div className="flex flex-col flex-1 my-auto text-5xl text-center text-[46px]">
                    <div
                        className={`${Skincake.className} whitespace-nowrap text-[32px] leading-[52px]`}
                    >
                        Donate for the
                    </div>
                    <div
                        className={`${Skincake.className} mt-[-22px] whitespace-nowrap text-[32px] leading-[52px]`}
                    >
                        Culture
                    </div>
                    <div className="text-sm font-semibold leading-8 whitespace-nowrap text-stone-950">
                        You'll own nothing and be happy!
                    </div>
                    <div
                        className={`mt-[83px] text-[32px] ${Skincake.className}`}
                    >
                        Token Launch
                    </div>
                    <div className="text-sm font-semibold leading-8 whitespace-nowrap text-stone-950">
                        $MAYO makes his first mark <br /> on the market
                    </div>
                    <div
                        className={`mt-[93px] text-[32px] ${Skincake.className}`}
                    >
                        Mayo Swap
                    </div>
                    <div className="text-sm font-semibold leading-8 whitespace-nowrap text-stone-950">
                        You'll own nothing and be happy!
                    </div>
                    <div
                        className={`mt-[133px] max-md:mt-10 text-[32px] ${Skincake.className}`}
                    >
                        CEX Listings
                    </div>
                    <div className="text-sm font-semibold leading-8 text-stone-950">
                        Just hodl and you'll be happy You'll own nothing and be
                        happy!
                    </div>
                    <div
                        className={`${Skincake.className} mt-[93px] text-[32px]`}
                    >
                        MAYO Grants
                    </div>
                    <div className="text-sm font-semibold leading-8 text-stone-950">
                        We'll fund projects utilizing the Purple AI engine,
                        positioning them for success
                    </div>
                </div>
            </div>
        </>
    )
}

function Roadmap() {
    return (
        <div className="gap-[61px] flex flex-col w-full" id="ROADMAP">
            <div className="flex flex-col gap-[9px] mx-auto">
                <div
                    style={{
                        textShadow: ' 0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} text-[56px] xl:text-[90px] mx-auto`}
                >
                    Roadmap
                </div>
                <div
                    className={`${Montserrat.className} font-[700] text-[14px] text-center`}
                >
                    You'll own nothing and be happy!
                </div>
            </div>
            <div className="hidden lg:flex">
                <TimelineDesktop />
            </div>
            <div className="lg:hidden">
                <TimelineMobile />
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="flex flex-col gap-[40px]">
            <div
                style={{
                    textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                }}
                className={`${Skincake.className} text-[56px] xl:text-[90px] text-center flex flex-col`}
            >
                <div>Join our</div> <div className="mt-[-33px]">Ecosystem</div>
            </div>
            <Image
                onClick={() => {
                    window.location.href = 'https://purplesquare.ai/'
                }}
                className="mx-auto cursor-pointer"
                src={'/imgs/app.png'}
                alt={''}
                width={328}
                height={652}
            />
        </div>
    )
}

function Socials() {
    return (
        <div className="flex flex-col gap-[24px]">
            <Image
                src={'/imgs/avatar-text.png'}
                className="mx-auto"
                alt={''}
                width={112}
                height={22}
            />
            <div
                onClick={() => {
                    // telegram
                    window.open('https://t.me/MayoBearCoinETH', '_blank')
                }}
                className={`${Montserrat.className} btn cursor-pointer shadow-xl flex flex-row gap-[10px] px-[24px] py-[12px] rounded-full bg-[#FFF8E5] text-black hover:bg-[#FFF8E5] text-[16px] font-[700] border-none capitalize hover:opacity-80`}
            >
                <Image
                    width={24}
                    height={24}
                    src={'/icons/telegram.svg'}
                    alt={''}
                />
                MayoBearCoinETH
            </div>
            <div
                onClick={() => {
                    window.open('https://twitter.com/MayoBearCoinETH', '_blank')
                }}
                className={`${Montserrat.className} btn cursor-pointer shadow-xl flex flex-row gap-[10px] px-[24px] py-[12px] rounded-full bg-[#FFF8E5] text-black hover:bg-[#FFF8E5] text-[16px] font-[700] border-none lowercase hover:opacity-80`}
            >
                mayobear.eth
            </div>
        </div>
    )
}

const TokenomicsItem = ({
    title,
    description,
}: {
    title: string
    description: any
}) => {
    return (
        <div className="flex flex-col gap-[12px] mx-auto text-center">
            <div
                className={`${Skincake.className} text-[26px] font-[400] whitespace-nowrap`}
            >
                {title}
            </div>
            <div
                className={`${Montserrat.className} text-[14px] font-[600] color-[#100] whitespace-nowrap`}
            >
                {description}
            </div>
        </div>
    )
}

function Mayonomics() {
    return (
        <div
            className="flex flex-col gap-[93px] w-full max-w-[1790px]"
            id="MAYONOMICS"
        >
            <div className="flex flex-col gap-[12px] mx-auto">
                <div
                    style={{
                        textShadow: ' 0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} text-[56px] xl:text-[90px]`}
                >
                    {' '}
                    Mayonomics
                </div>
            </div>
            <div className="flex relative flex-col-reverse mx-auto w-full lg:flex-row">
                <div className="mx-auto">
                    <Image
                        src={'/imgs/mayonomics.png'}
                        alt={''}
                        width={727}
                        height={727}
                    />
                </div>
                <div className="lg:absolute mx-auto text-center lg:top-[12px] lg:right-[20%]">
                    <div
                        className={`bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[46px] ${Skincake.className}`}
                    >
                        Token Supply
                    </div>
                    <div
                        className={`bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[46px] ${Skincake.className}`}
                    >
                        1,000,000,000
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-[64px] lg:mx-auto carousel overflow-x-scroll">
                <TokenomicsItem title="Farmable on X" description="Airdrop" />
                <TokenomicsItem
                    title="Locked & Renounced"
                    description="Liquidity Pool"
                />
                <TokenomicsItem
                    title="5% Buy and Sell Tax"
                    description="Ecosystem Stimuli"
                />
                <TokenomicsItem
                    title="from Mayo Sell Tax"
                    description="Auto $PAI Buy back and Burn"
                />
                <TokenomicsItem
                    title="from Mayo Sell tax"
                    description="Auto Buy back and Burn"
                />
                <TokenomicsItem
                    title="Locked & Renounced"
                    description="LIQUIDITY POOL"
                />
                <TokenomicsItem
                    title="TBA"
                    description={
                        <>
                            $MAYO Buy Back <br /> And Burn
                        </>
                    }
                />
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen w-full items-center overflow-x-hidden gap-[106px] h-[100px] overflow-y-scroll pb-[183px]">
            <Hero />
            <Info />
            <Mayonomics />
            <Artworks />
            <Roadmap />
            <App />
            <Socials />
        </div>
    )
}
