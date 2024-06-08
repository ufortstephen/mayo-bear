/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'
import MayoBtn from '@/components/MayoBtn'
import { CONTRACT_ADDRESS } from '@/consts'


function Hero() {
    return (
        <div className="2xl:bg-[#6700B7] relative w-full max-h-[1013px]">
            <div className="flex flex-row p-[20px] absolute top-0 w-full z-20">
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
                            document
                                .getElementById('MAYONOMICS')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`hidden md:flex text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px] border-none`}
                    >
                        Mayonomics
                    </div>

                    <div
                        onClick={() => {
                            document
                                .getElementById('ROADMAP')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`hidden md:flex text-black rounded btn px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px] border-none`}
                    >
                        Roadmap
                    </div>

                    <div
                        onClick={() => {
                            window.open(
                                'https://t.me/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`hidden md:flex text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px] border-none`}
                    >
                        Zealy
                    </div>
                    <div
                        onClick={() => {
                            window.open(
                                '/claim',
                                '_blank'
                            )
                        }}
                        className={`hidden md:flex text-black rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-white ${Montserrat.className} font-[700] text-[16px] border-none`}
                    >
                        Claim
                    </div>

                    <div
                        onClick={() => {
                            window.open(
                                'https://app.uniswap.org/swap?outputCurrency=0x3f6c91d57aa4A115346c84aa13e67f33379CD762&chain=mainnet',
                                '_blank'
                            )
                        }}
                        className={`flex max-w-[81px] text-white rounded btn  px-[24px] py-[12px] capitalize hover:bg-white hover:opacity-80 bg-black ${Montserrat.className} font-[700] text-[16px] border-none`}
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
            <div className="h-[1113px] hidden sm:flex overflow-x-hidden relative z-10">
                <Image
                    src={'/imgs/mayo-new.png'}
                    alt={''}
                    className="object-cover object-center mx-auto h-full w-full max-w-[1512px]"
                    width={4096}
                    height={2652}
                />

            </div>

            <div className="h-max  sm:hidden overflow-x-hidden relative z-10">
                <Image
                    src={'/imgs/mayobear-mobile-2.png'}
                    alt={''}
                    className="object-cover overflow-visible mx-auto w-full h-full z-10 sm:hidden"
                    width={1170}
                    height={2342}
                />

            </div>
            {/* <Image
                src={'/imgs/mayobear-mobile.png'}
                alt={''}
                className="object-cover overflow-visible mx-auto w-full h-full z-10 sm:hidden"
                width={1170}
                height={2342}
            /> */}
            <div className="absolute top-[60%] md:top-[65%] -left-24 md:left-0 w-[600px] md:w-full -z-1">
                <Image
                    src={'/imgs/ellipse.svg'}
                    alt={''}
                    className="object-cover overflow-visible mx-auto w-[100%] md:w-[800px] mx-auto h-max"
                    width={1170}
                    height={2342}
                />
            </div>

            {/* <Image
                src={'/imgs/mayobear.png'}
                alt={''}
                className="hidden sm:flex object-cover overflow-visible mx-auto w-full h-full max-w-[1512px]"
                width={4096}
                height={2652}
            /> */}

            {/* <div className="absolute w-[317px] md:w-[494px] left-1/2 transform -translate-x-[51%] bottom-[23px] md:bottom-[20px]lg:bottom-[30px] xl:bottom-[0px] 2xl:bottom-[-36px] flex flex-col gap-[8px]"> */}
            <div className="w-[317px] md:w-[494px] -mt-[226px] sm:-mt-[186px] lg:-mt-[196px]  mx-auto flex flex-col gap-[8px] relative z-50">
                <MayoBtn />
                <div className="flex gap-[24px] w-full justify-center">
                    <Image
                        onClick={() => {
                            window.open(
                                `https://dexscreener.com/ethereum/${CONTRACT_ADDRESS}`,
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
                                `https://etherscan.io/address/${CONTRACT_ADDRESS}`,
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
                                `https://www.dextools.io/app/en/ether/pair-explorer/${CONTRACT_ADDRESS}`,
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
        <><div className="flex flex-col px-[32px] lg:px-0 lg:flex-row w-full max-w-[982px] gap-[90px] mx-auto relative">
            <div
                className={`${Montserrat.className} pt-[30px] md:pt-0 text-[14px] font-[600] leading-[32px] text-[#FFFFFF] max-w-[436px]`}
            >
                Mayo Bear, the native AI-generated meme birthed by the Purple AI community, for the community to further elevate the PAIverse with a spread of MAYO, the special sauce that adds a new paradigm shift to memes, now with substance and protein. At the core of our endeavor is a love letter to the Purple AI community as a whole, along with bringing awareness to those who have not had the luxury to venture into the PAIverse.
                <br />
                <br />
                Join our movement, for the culture as we employ the MAYO to bring this vision to reality. The era of frogs and dogs is coming to an end. We know exactly what you want and we are about to give you a load of it.
                <div
                    onClick={() => {
                        window.open('https://t.me/MayoBearCoinETH', '_blank')
                    }}
                    className={`${Montserrat.className} mt-[30px] w-[200px] mx-auto md:ml-0 md:mr-0 whitespace-nowrap btn cursor-pointer shadow-xl flex flex-row gap-[10px] px-[24px] py-[12px] rounded-full bg-[#FFF8E5] text-black hover:bg-[#FFF8E5] text-[16px] font-[700] border-none capitalize hover:opacity-80`}
                >
                    <Image
                        width={22}
                        height={22}
                        src={'/icons/telegram.svg'}
                        alt={''} />
                    Join The Fam
                </div>
            </div>

            <div className="mx-auto my-auto lg:ml-auto">
                <PictureFrame
                    className="w-[100%] mx-auto md:ml-0 md:mr-0 md:w-full h-full lg:w-[433px] lg:h-[433px] rotate-6 shadow-2xl border-[23px]"
                    img={'/imgs/mayo-space.jpeg'} />
            </div>

            <div className="absolute top-[100%] md:top-[160%] left-[-30%] md:-left-[50%] w-[480px] md:w-[800px]  rounded-full">
                <Image
                    src={'/imgs/ellipses-2.svg'}
                    alt={''}
                    className="object-cover overflow-visible mx-auto w-[100%] md:w-full mx-auto  h-[750px] md:h-[1px]"
                    width={1170}
                    height={2342}
                />
            </div>
        </div>

            <div className="flex flex-col px-[32px] lg:px-0  w-full max-w-[1024px] gap-[40px] mx-auto divide-y divide-[#9A9999] pt-[30px] md:pt-[50px]">
                <div
                    className={`${Skincake.className} text-[28px] font-[400] text-[#6700B7] text-center`}
                >
                    Places You May <br className='md:hidden' /> Have Seen Us
                </div>
                <div className="flex flex-col items-center justify-between px-[32px] lg:px-0 lg:flex-row w-full max-w-[1024px] gap-10 md:gap-[60px] mx-auto pt-[40px]">
                    <Image
                        width={22}
                        height={22}
                        src={'/icons/yahoo.svg'}
                        alt={''} className='cursor-pointer w-[100px]'
                        onClick={() => {
                            window.location.href = '/'
                        }}
                    />
                    <Image
                        width={22}
                        height={22}
                        src={'/icons/tradingview.svg'}
                        alt={''} className='cursor-pointer w-[160px]'
                        onClick={() => {
                            window.location.href = '/'
                        }}
                    />
                    <Image
                        width={22}
                        height={22}
                        src={'/icons/busines-insider.svg'}
                        alt={''} className='cursor-pointer w-[100px]'
                        onClick={() => {
                            window.location.href = '/'
                        }}
                    />
                    <Image
                        width={22}
                        height={22}
                        src={'/icons/pai-telegram.svg'}
                        alt={''} className='cursor-pointer w-[160px]'
                        onClick={() => {
                            window.location.href = 'https://purplesquare.ai/'
                        }}
                    />

                </div>
            </div>

        </>

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
        <div className="gap-[0px] flex flex-col w-full md:pt-[50px] relative">
            <div className="absolute -top-[30%] md:-top-[30%] -right-[50%] md:-right-[30%] w-[400px] md:w-full -z-1">
                <Image
                    src={'/imgs/ellipse.svg'}
                    alt={''}
                    className="object-cover overflow-visible ml-auto w-[100%] md:w-[800px] h-max"
                    width={1170}
                    height={2342}
                />
            </div>
            <div className="flex flex-col gap-[0px] mx-auto">
                <div className="flex flex-col gap-[12px] mx-auto">
                    <div
                        style={{
                            textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                        }}
                        className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[42px] xl:text-[68px]`}
                    >
                        {' '}
                        Our
                        Artworks
                    </div>
                </div>
                <div
                    className={`${Montserrat.className} font-[700] text-[12px] text-center text-[#FFF8E5] relative md:-top-[14px]`}
                >
                    {' '}
                    Curated by our community prompt engineers
                </div>
            </div>

            <div className='relative lg:h-max w-full'>
                <Image
                    src={'/icons/film-strips.svg'}
                    width={1000}
                    height={10}
                    alt={''}
                    className="cursor-pointer relative  w-full h-full z-[50]"
                    onClick={() => {
                        window.location.href = '/'
                    }}
                />
                <Image
                    src={'/icons/film-strips-overlay.svg'}
                    width={1000}
                    height={10}
                    alt={''}
                    className=" absolute top-0 left-0 w-full h-full z-[20]"
                    onClick={() => {
                        window.location.href = '/'
                    }}
                />
            </div>


            <div className="lg:mx-auto carousel hidden">
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

            <section className='flex gap-5 justify-between px-5 max-w-[1200px] mx-auto'>
                <ol className="items-start sm:grid grid-cols-5">
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-10 sm:pe-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    Donate for <br /> the Culture
                                </div>

                            </div>
                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                            >
                                {' '}
                                You'll own nothing and be happy!
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-10 sm:pe-8">

                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    Token Launch
                                </div>

                            </div>

                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                            >
                                {' '}
                                Out with the old, in with the new
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-10 sm:pe-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    $10M Market Cap
                                </div>

                            </div>

                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                            >
                                {' '}
                                Jeets in disbelief and starts to DCA
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-10 sm:pe-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    $100M Market Cap
                                </div>

                            </div>


                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                            >
                                {' '}
                                Time to buy a house, we are topping out!
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-10 sm:pe-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    $500M Market Cap
                                </div>

                            </div>

                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                            >
                                {' '}
                                Just added more, wen are we gonna hit 1 billion?
                            </div>
                        </div>
                    </li>

                </ol>
            </section>
        </>
    )
}

const TimelineMobile = () => {
    return (
        <>

            <ol className="gap-5 justify-between mx-10 max-w-[786px] ms-5 mx-auto relative border-s border-white">
                <li className="mb-20 ms-16">

                    <div className="absolute -start-4" >
                        <PurpleSquare />
                    </div>
                    <div
                        style={{
                            textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                        }}
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px]`}
                    >
                        Donate for <br /> the Culture
                    </div>
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                    >
                        {' '}
                        You'll own nothing and be happy!
                    </div>

                </li>
                <li className="mb-20 ms-16">

                    <div className="absolute -start-4" >
                        <PurpleSquare />
                    </div>
                    <div
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px]`}
                    >
                        Token Launch
                    </div>
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                    >
                        {' '}
                        Out with the old, in with the new
                    </div>

                </li>
                <li className="mb-20 ms-16">

                    <div className="absolute -start-4" >
                        <PurpleSquare />
                    </div>
                    <div
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px]`}
                    >
                        $10M Market Cap
                    </div>
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                    >
                        {' '}
                        Jeets in disbelief and starts to DCA
                    </div>

                </li>
                <li className="mb-20 ms-16">

                    <div className="absolute -start-4" >
                        <PurpleSquare />
                    </div>
                    <div
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px]`}
                    >
                        $100M Market Cap
                    </div>
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                    >
                        {' '}
                        Time to buy a house, we are topping out!
                    </div>

                </li>
                <li className="mb-10 ms-16">

                    <div className="absolute -start-4" >
                        <PurpleSquare />
                    </div>
                    <div
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px]`}
                    >
                        $500M Market Cap
                    </div>
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[14px] mt-6`}
                    >
                        {' '}
                        Just added more, wen are we gonna hit 1 billion?
                    </div>

                </li>

                <div className="bg-[#101011] w-2 h-[56px] absolute -bottom-1 -left-1"></div>

            </ol>
        </>
    )
}

function Roadmap() {
    return (
        <div className="gap-[61px] flex flex-col w-full relative -top-[30px] md:-top-[80px]" id="ROADMAP">
            <div className="flex flex-col gap-[9px] mx-auto">
                <div className="flex flex-col gap-[12px] mx-auto">
                    <div
                        style={{
                            textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                        }}
                        className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[42px] xl:text-[68px]`}
                    >
                        {' '}
                        Roadmap
                    </div>
                </div>
                <div
                    className={`${Montserrat.className} font-[700] text-[12px] text-center text-[#FFF8E5] relative -top-[14px]`}
                >
                    {' '}
                    A new load of Mayo
                </div>

            </div>
            <div className="hidden lg:flex">
                <TimelineDesktop />
            </div>
            <div className="lg:hidden mx-10">
                <TimelineMobile />
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="flex flex-col gap-[40px] relative -top-[30px]">

            <div className="flex flex-col gap-[12px] mx-auto">
                <div
                    style={{
                        textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[40px] xl:text-[60px] text-center`}
                >
                    {' '}
                    <div>Join our</div> <div className="mt-[-33px]">Ecosystem</div>
                </div>
            </div>
            <Image
                onClick={() => {
                    window.location.href = 'https://purplesquare.ai/'
                }}
                className="mx-auto cursor-pointer"
                src={'/imgs/app.svg'}
                alt={''}
                width={328}
                height={652}
            />
        </div>
    )
}

function Socials() {
    return (
        <div className="flex flex-col gap-[84px]">

            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-5 w-full justify-center">
                    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80'
                        onClick={() => {
                            // telegram
                            window.open('https://t.me/MayoBearCoinETH', '_blank')
                        }}
                    >
                        <Image
                            width={22}
                            height={22}
                            src={'/icons/telegram.svg'}
                            className='w-4 h-4'
                            alt={''} />
                    </div>
                    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80'
                        onClick={() => {
                            // twitter
                            window.open('https://twitter.com/MayoBearCoinETH', '_blank')
                        }}>
                        <Image
                            width={22}
                            height={22}
                            src={'/icons/x.svg'}
                            className='w-4 h-4'
                            alt={''} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2">
                    <div
                        className={`${Skincake.className} text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px]`}
                    >
                        Contact Us
                    </div>

                    <div className="hidden md:block h-[2px] w-[300px] bg-white"></div>
                    <div
                        className={`${Montserrat.className} hidden md:block font-[700]  text-left text-[#FFF8E5] text-[14px] `}
                    >
                        {' '}
                        Connect With Mayo Bear
                    </div>
                </div>

                <a
                    href='mailto:contact@mayobearn.xyz'
                    className={`${Skincake.className} block text-[#FFFFFF] whitespace-nowrap bg-clip-text bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[24px] leading-[24px] text-center hover:opacity-80`}
                >
                    contact@mayobearn.xyz
                </a>
            </div>

            <div
                className={`${Montserrat.className}  font-[500]  text-left text-[#FFF8E5] text-[14px] text-center mb-10`}
            >
                {' '}
                ©2024 by Mayo Bear. All rights reserved.
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
                className={`${Skincake.className} text-[26px] font-[400] whitespace-nowrap bg-gradient-to-r from-[#8000E4] via-[#962DFE] to-[#962DFE] inline-block text-transparent bg-clip-text`}
            >
                {title}
            </div>
            <div
                className={`${Montserrat.className} text-[12px] font-[600] text-[#fff] whitespace-nowrap`}
            >
                {description}
            </div>
        </div>
    )
}

function Mayonomics() {
    return (
        <div
            className="flex flex-col gap-[10px] w-full max-w-[1790px] pt-[50px] md:pt-[50px]"
            id="MAYONOMICS"
        >
            <div className="flex flex-col gap-[12px] mx-auto">
                <div
                    style={{
                        textShadow: '0px 5px 15px #4446574D;',
                    }}
                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[42px] xl:text-[68px]`}
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
                <div className="lg:absolute mx-auto text-center lg:top-[150px] lg:right-[17%]">
                    <div
                        style={{
                            textShadow: '0px 5px 35px #4446574D;',
                        }}
                        className={`bg-clip-text text-transparent bg-[linear-gradient(360deg,#8000E4_0%,#962DFE_100%)]
                        drop-shadow-md  text-[20px] lg:text-[30px] ${Skincake.className}`}
                    >
                        Token Supply
                    </div>
                    <div
                        className={`bg-clip-text text-transparent bg-clip-text text-transparent bg-[linear-gradient(360deg,#8000E4_0%,#962DFE_100%)] text-[20px] lg:text-[30px] relative top-[-14px] ${Skincake.className}`}
                    >
                        1,000,000,000
                    </div>

                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 md:gap-[64px] lg:mx-auto carousel overflow-x-scroll">
                <TokenomicsItem title="Airdrop" description="Farmable on Zealy " />
                <TokenomicsItem
                    title="Liquidity Pool"
                    description="Burned to a Crisp"
                />
                <TokenomicsItem
                    title="Buy & Sell Tax"
                    description="2% to the LP"
                />
                <TokenomicsItem
                    title="Contract Safety"
                    description="Renounced"
                />
            </div>
        </div>
    )
}
function SpotifyPlaylist() {


    return (
        <section className='relative w-full'>
            <div className="w-[90%] md:w-full max-w-[568px] md:min-w-[568px]  mx-auto border border-[20px] rounded-xl border-[#33005A] bg-[#8820e0] mt-[50px] relative z-20">
                <iframe style={{ borderRadius: '20px' }} id='spotifyPlaylist' src="https://open.spotify.com/embed/playlist/7lWgJOMzCBTUFX0W8aQlW4?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div className="absolute -top-[50%] md:-top-[0%] -left-[20%] md:-left-[30%] w-[480px] md:w-[1100px]  rounded-full  z-10">
                <Image
                    src={'/imgs/ellipses-2.svg'}
                    alt={''}
                    className="object-cover overflow-visible mx-auto w-[100%] md:w-full mx-auto  h-[750px] md:h-[1px]"
                    width={1170}
                    height={2342}
                />
            </div>
        </section>

    )
}

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen w-full items-center overflow-x-hidden gap-[130px] md:gap-[136px] h-[100px] overflow-y-scroll pb-[10px] bg-[#101011]">
            <Hero />
            <div className="hidden xl:flex xl:mt-[0px]"></div>
            <Info />
            <Mayonomics />
            <Artworks />
            <Roadmap />
            <App />
            <SpotifyPlaylist />
            <Socials />
        </div>
    )
}
