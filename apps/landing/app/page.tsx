/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'

function Hero() {
    return (
        <div className="bg-[#8205E7] relative w-full max-h-[1013px] h-fit">
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
                        Join Telegram
                    </div>
                    <div
                        onClick={() => {
                            window.open(
                                'https://twitter.com/MayoBearCoinETH',
                                '_blank'
                            )
                        }}
                        className={`text-white rounded btn px-[24px] py-[12px] capitalize hover:bg-[#00A3FF] bg-[#00A3FF] ${Montserrat.className} font-[700] text-[16px] hover:opacity-80`}
                    >
                        Follow on X
                    </div>
                </div>
            </div>
            <Image
                src={'/imgs/mayobear-mobile.png'}
                alt={''}
                className="object-cover overflow-visible mx-auto w-full h-full sm:hidden"
                width={1170}
                height={2342}
            />
            <Image
                src={'/imgs/mayobear.png'}
                alt={''}
                className="hidden sm:flex object-cover overflow-visible mx-auto w-full h-full max-w-[1920px]"
                width={4096}
                height={2652}
            />
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
                The first AI-generated meme created by the Purple AI 🟪's
                community using 🟪's engine, rapidly evolved from playful banter
                into a best AI-generated meme.
                <br />
                <br />
                Soon to be powered by the $MAYO token, this large polar bear,
                adorned for his special Mayo, embodies a blend of perseverance
                and good times.
                <br />
                <br />
                Affectionately called Mayo, he dives into a variety of
                escapades, from engaging in heroic battles against other memes
                during peaceful times to brewing his special sauce or standing
                on the front lines in the midst of all-out war. Mayo Bear is
                always there!
            </div>
            <div className="mx-auto my-auto lg:ml-auto">
                <PictureFrame
                    className="w-full h-full lg:max-w-[513px] lg:max-h-[513px] rotate-6 shadow-2xl border-[23px]"
                    img={'/imgs/art-6.jpeg'}
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

function Artworks() {
    return (
        <div className="gap-[61px] flex flex-col w-full">
            <div className="flex flex-col gap-[12px] mx-auto">
                <div
                    style={{
                        textShadow: ' 0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} text-[46px]`}
                >
                    {' '}
                    Our Artworks
                </div>
                <div
                    className={`${Montserrat.className} font-[700] text-[16px] text-[#BFBFBF]`}
                >
                    {' '}
                    You'll own nothing and be happy!
                </div>
            </div>
            <div className="lg:mx-auto carousel">
                <div className="flex flex-nowrap py-[33px] gap-[-20px]">
                    <PictureFrame
                        className="hidden lg:flex"
                        img={'/imgs/art-6.jpeg'}
                    />
                    <PictureFrame
                        className="rotate-6"
                        img={'/imgs/art-5.jpeg'}
                    />
                    <PictureFrame img={'/imgs/art-4.jpeg'} />
                    <PictureFrame
                        className="rotate-6"
                        img={'/imgs/art-3.jpeg'}
                    />
                    <PictureFrame
                        className="rotate-[353deg]"
                        img={'/imgs/art-2.png'}
                    />
                    <PictureFrame
                        className="rotate-[353deg]"
                        img={'/imgs/art-1.jpeg'}
                    />
                </div>
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
                className={`${Skincake.className} text-[46px] text-center flex flex-col`}
            >
                <div>Join our</div> <div className="mt-[-33px]">Ecosystem</div>
            </div>
            <Image
                onClick={() => {
                    window.location.href = 'https://purplesquare.ai/'
                }}
                className="cursor-pointer"
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
                src={'/imgs/avatar.png'}
                className="mx-auto"
                alt={''}
                width={112}
                height={22}
            />
            <div
                onClick={() => {
                    window.open('https://twitter.com/MayoBearCoinETH', '_blank')
                }}
                className={`${Montserrat.className} btn cursor-pointer shadow-xl flex flex-row gap-[10px] px-[24px] py-[12px] rounded-full bg-[#FFF8E5] text-black hover:bg-[#FFF8E5] text-[16px] font-[700] border-none capitalize hover:opacity-80`}
            >
                <Image width={26} height={26} src={'/icons/x.svg'} alt={''} />
                MayoBearCoinETH
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden min-h-screen w-full items-center gap-[120px] h-[100px] overflow-y-scroll pb-[183px]">
            <Hero />
            <Info />
            <Artworks />
            <App />
            <Socials />
        </div>
    )
}
