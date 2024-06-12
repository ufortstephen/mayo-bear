/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'
import MayoBtn from '@/components/MayoBtn'
import { CONTRACT_ADDRESS } from '@/consts'


function Hero() {
    return (
        <div className="bg-[#6700B7] relative w-full max-h-[998px] md:max-h-[1998px] lg:max-h-[998px]">
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
                <div className="flex flex-row ml-auto gap-[10px] items-center">
                    <button
                        onClick={() => {
                            document
                                .getElementById('MAYONOMICS')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`hidden sm:flex blur-button font-[700] text-[#000] text-sm rounded flex items-center justify-center  px-6 py-3 h-[2.6rem] capitalize hover:bg-white hover:opacity-80 bg-white rounded-full border-none outline-none`}

                        role="button"
                    >
                        Mayonomics
                    </button>
                    <button
                        onClick={() => {
                            document
                                .getElementById('ROADMAP')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`hidden sm:flex  font-[700] text-[#000000] rounded text-sm flex items-center justify-center  px-6 py-3 h-[2.6rem] capitalize hover:bg-white hover:opacity-80 bg-white rounded-full border-none`}

                        role="button"
                    >
                        Roadmap
                    </button>


                    <button
                        onClick={() => {
                            window.open(
                                'https://zealy.io/cw/mayobear/questboard',
                                '_blank'
                            )
                        }}
                        className={` hidden sm:flex font-[700] text-[#000] rounded text-sm flex items-center justify-center  px-6 py-3 h-[2.6rem] capitalize hover:bg-white hover:opacity-80 bg-white rounded-full border-none`}

                        role="button"
                    >
                        Zealy
                    </button>
                    <button
                        onClick={() => {
                            window.open(
                                '/claim',
                                '_blank'
                            )
                        }}
                        className={` hidden sm:flex  font-[700] text-[#000] rounded flex text-sm items-center justify-center  px-6 py-3 h-[2.6rem] capitalize hover:bg-white hover:opacity-80 bg-white rounded-full border-none`}

                        role="button"
                    >
                        Claim
                    </button>
                    <button
                        onClick={() => {
                            window.open(
                                'https://app.uniswap.org/swap?outputCurrency=0x3f6c91d57aa4A115346c84aa13e67f33379CD762&chain=mainnet',
                                '_blank'
                            )
                        }}
                        className={` font-[700] text-[#fff] rounded flex text-sm items-center justify-center  px-6 py-3 h-[2.6rem] capitalize hover:bg-[#8000E4] hover:opacity-80 bg-black rounded-full border-none`}

                        role="button"
                    >
                        Buy
                    </button>

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
            <div className="absolute -top-5 w-screen z-10  overflow-y-hidden">
                {/* <img src="/imgs/jars2.png" className="hide-events object-cover object-center md:object-cover mx-auto h-full w-[100%] scale-1 2xl:scale-[1] opacity-0"
                    alt="" onLoadCapture={(e:any) => e.classList.remove('opacity-0')} /> */}
                <Image
                    priority={true}
                    src={'/imgs/jars2.png'}
                    alt={''}
                    className="object-cover object-center md:object-cover mx-auto h-full w-[100%] scale-1 2xl:scale-[1] opacity-0"
                    width={4096}
                    height={2652}
                    onLoadingComplete={(e:any) => e.classList.remove('opacity-0')}
                />
            </div>
            {/* <div className="mayo-jars-img h-[1200px] hidden sm:flex overflow-x-hidden absolute top-0 left-0 w-screen z-20 overflow-y-">
                <Image
                    src={'/imgs/jars2.png'}
                    alt={''}
                    className="object-contain object-center md:object-contain mx-auto h-full w-[110%]"
                    width={4096}
                    height={2652}
                />

            </div> */}
            {/* <div className="h-[1113px] 2xl:h-[1900px]  hidden sm:flex overflow-x-hidden relative z-10">
                <Image
                    src={'/imgs/mayor.png'}
                    alt={''}
                    className="object-cover  2xl:object-cover mx-auto h-full w-full max-w-[1612px] 2xl:max-w-[100%]"
                    width={4096}
                    height={2652}
                />
                <Image
                    src={'/imgs/mayo-new.png'}
                    alt={''}
                    className="object-cover  2xl:object-cover mx-auto h-full w-full max-w-[1612px] 2xl:max-w-[100%]"
                    width={4096}
                    height={2652}
                />

            </div> */}
            <div className="h-[1024px] lg:h-[1313px] hidden sm:flex overflow-hidden relative z-10">
                {/* <img src="/imgs/mayo-hero.png" alt="" className="hide-events object-contain object-center md:object-contain mx-auto  w-[90%] lg:w-[1112px] max-w-[1512px] scale-[1.08] opacity-1"
                /> */}
                <Image

                    src={'/imgs/mayo-hero.png'}
                    alt={''}
                    className="object-contain object-center md:object-contain mx-auto h-full w-[90%] lg:w-[1112px] max-w-[1512px] scale-[1.08] opacity-0"
                    width={4096}
                    height={2652}
                    onLoadingComplete={(e:any) => e.classList.remove('opacity-0')}
                />

            </div>

            <div className="h-[1200px] hidden sm:flex overflow-x-hidden absolute -top-[390px] md:-top-[460px] left-0 w-screen z-10 overflow-y-hidden">
                <Image
                    priority={true}
                    src={'/imgs/mayo-glow.png'}
                    alt={''}
                    className="hide-events object-contain object-center md:object-contain mx-auto h-full w-[30%] 2xl:w-[20%] scale-[1.08] 2xl:scale-1 opacity-0"
                    width={4096}
                    height={2652}
                    onLoadingComplete={(e:any) => e.classList.remove('opacity-0')}
                />

            </div>

            <div className="h-max  sm:hidden overflow-x-hidden relative z-10">
                <Image
                    src={'/imgs/mayobear-mobile-2.png'}
                    alt={''}
                    className="hide-events object-cover overflow-visible mx-auto w-full h-full z-10 md:hidden"
                    width={1170}
                    height={2342}
                />

            </div>

            <div className="absolute top-[70%] md:top-[60%] lg:top-[48%] 2xl:top-[15%] -left-24 md:left-0 w-[600px] md:w-full -z-1">
                <Image
                    src={'/imgs/ellipse.svg'}
                    alt={''}
                    className='hide-events mx-auto w-[100%] md:w-[950px] 2xl:w-[1400px] mx-auto h-max'
                    width={1170}
                    height={2342}
                />
            </div>

            {/* <div className="absolute w-[317px] md:w-[494px] left-1/2 transform -translate-x-[51%] bottom-[23px] md:bottom-[20px]lg:bottom-[30px] xl:bottom-[0px] 2xl:bottom-[-36px] flex flex-col gap-[8px]"> */}
            <div className="w-[317px] md:w-[494px] -mt-[226px] sm:-mt-[370px] lg:-mt-[400px]  mx-auto flex flex-col gap-[8px] relative z-50 sm:scale-[0.7] xl:scale-[1] mayo-hero-cta">
                <MayoBtn />
                <div className="flex gap-[24px] w-full justify-center">
                    <div className='cursor-pointer hover:opacity-80' onClick={() => {
                        window.open(
                            `https://dexscreener.com/ethereum/${CONTRACT_ADDRESS}`,
                            '_blank'
                        )
                    }}>
                        <Image

                            className="hide-events cursor-pointer hover:opacity-80"
                            src={'/icons/dexscreener.png'}
                            alt={''}
                            width={21.88}
                            height={26}
                        />
                    </div>

                    <div className='cursor-pointer hover:opacity-80' onClick={() => {
                        window.open(
                            `https://etherscan.io/address/${CONTRACT_ADDRESS}`,
                            '_blank'
                        )
                    }}>
                        <Image
                            onClick={() => {
                                window.open(
                                    `https://etherscan.io/address/${CONTRACT_ADDRESS}`,
                                    '_blank'
                                )
                            }}
                            className="hide-events cursor-pointer hover:opacity-80"
                            src={'/icons/etherscan.png'}
                            alt={''}
                            width={26}
                            height={26}
                        />
                    </div>

                    <div className='cursor-pointer hover:opacity-80' onClick={() => {
                        window.open(
                            `https://www.dextools.io/app/en/ether/pair-explorer/${CONTRACT_ADDRESS}`,
                            '_blank'
                        )
                    }}>
                        <Image
                            onClick={() => {
                                window.open(
                                    `https://www.dextools.io/app/en/ether/pair-explorer/${CONTRACT_ADDRESS}`,
                                    '_blank'
                                )
                            }}
                            className="hide-events cursor-pointer hover:opacity-80"
                            src={'/icons/dex.png'}
                            alt={''}
                            width={22.6}
                            height={26}
                        />
                    </div>

                    <div className='cursor-pointer hover:opacity-80' onClick={() => {
                        window.open(
                            'https://twitter.com/MayoBearCoinETH',
                            '_blank'
                        )
                    }}>
                        <Image
                            onClick={() => {
                                window.open(
                                    'https://twitter.com/MayoBearCoinETH',
                                    '_blank'
                                )
                            }}
                            className="hide-events cursor-pointer hover:opacity-80"
                            src={'/icons/x.png'}
                            alt={''}
                            width={26}
                            height={26}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

function Info() {
    return (
        <section className='w-full h-max relative flex flex-col gap-[100px] 2xl:py-10 md:gap-[140px]'>
            <div className="absolute top-[40%] md:top-[40%] left-[-30%] md:left-[0%] w-[380px] md:w-[300px] 2xl:w-[400px]  rounded-full">
                <Image
                    src={'/imgs/ellipses-8.svg'}
                    alt={''}
                    className="hide-events object-cover overflow-visible mx-auto w-[100%] md:w-full mx-auto "
                    width={1170}
                    height={2342}
                />
            </div>
            <div className="flex flex-col px-[32px] lg:px-0 lg:flex-row w-full max-w-[982px] gap-[60px]  mx-auto relative">
                <div
                    className={`${Montserrat.className} pt-[30px] md:pt-0 text-[14px] font-[600] leading-[32px] text-[#FFFFFF] max-w-[720px]`}
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
                            className='hide-events'
                            src={'/icons/telegram.svg'}
                            alt={''} />
                        Join The Fam
                    </div>
                </div>

                <div className="mx-auto my-auto lg:ml-auto">
                    <PictureFrame
                        className="hide-events w-[100%] mx-auto md:ml-0 md:mr-0 md:w-full h-full lg:w-[430px] lg:h-[430px] rotate-6 shadow-2xl border-[23px]"
                        img={'/imgs/mayo-space.jpeg'} />
                </div>


            </div>

            <div className="flex flex-col px-[32px] lg:px-0  w-full max-w-[1024px] gap-[40px] mx-auto divide-y divide-[#9A9999]">
                <div
                    className={`${Skincake.className} text-[28px] font-[400] text-[#6700B7] text-center`}
                >
                    Places You May <br className='md:hidden' /> Have Seen Us
                </div>
                <div className="flex flex-col items-center justify-between px-[32px] lg:px-0 lg:flex-row w-full max-w-[1024px] gap-10 md:gap-[60px] mx-auto pt-[40px]">

                    <div className='cursor-pointer relative z-20' onClick={() => {
                        window.location.href = '/'
                    }}>
                        <Image
                            width={22}
                            height={22}
                            src={'/icons/yahoo.svg'}
                            alt={''} className='hide-events cursor-pointer w-[120px] md:w-[140px]'

                        />
                    </div>
                    <div className='cursor-pointer' onClick={() => {
                        window.location.href = '/'
                    }}>

                        <Image
                            width={22}
                            height={22}
                            src={'/icons/tradingview.svg'}
                            alt={''} className='hide-events cursor-pointer w-[140px] md:w-[200px]'

                        />
                    </div>
                    <div className='cursor-pointer' onClick={() => {
                        window.location.href = '/'
                    }}>

                        <Image
                            width={22}
                            height={22}
                            src={'/icons/busines-insider.svg'}
                            alt={''} className='hide-events cursor-pointer w-[100px] md:w-[120px]'

                        />
                    </div>



                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
                        window.open('https://t.me/PurpleAIPortal', '_blank')
                    }}>
                        <span className=''>🟪</span>
                        <Image
                            width={22}
                            height={22}
                            src={'/icons/pai-telegram.svg'}
                            alt={''} className='hide-events cursor-pointer w-[120px] md:w-[160px]'

                        />
                    </div>


                </div>
            </div>

        </section>

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
                className="hide-events object-cover w-full h-full"
            />
        </div>
    )
}

function RedactedPictureFrame({ className, imgSrc }: { className?: string, imgSrc?: string }) {
    return (
        <div
            className={`${className} cursor-pointer hover:opacity-[0.8] w-[250px] md:w-[282.41px] h-[300px] md:h-[350px] 2xl:w-[450px] 2xl:h-[450px] bg- py-12 pr-6 2xl:pr-10`}
        >
            <div
                className={`w-full h-full flex text-[#FFF8E5] relative bg- ${Skincake.className} m-auto`}
            >

                <div className="absolute -top-10 left-0 w-full h-max flex items-center justify-between gap-4 z-20">
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>

                    <div className="hidden 2xl:flex h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="hidden 2xl:flex h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>


                </div>
                <div className="absolute -bottom-10 left-0 w-full 2xl:w-full h-max flex items-center justify-between gap-4 z-20">
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>

                    <div className="hidden 2xl:flex h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                    <div className="hidden 2xl:flex h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>


                </div>
                <div className="m-auto">

                    <Image
                        src={imgSrc || '/artworks/first.svg'}
                        alt={''}
                        width={332.41}
                        height={332.41}
                        className="absolute top-0 left-0 object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

function Artworks() {

    const [scrollDirection, setScrollDirection] = useState<any>('down');
    const scrollingElementRef = useRef<HTMLDivElement>(null);
    const targetElementRef = useRef<HTMLDivElement>(null);

    let currentScrollLeft = 0
    useEffect(() => {
        const handleScroll = (e: any) => {
            if (scrollingElementRef.current && targetElementRef.current) {
                const scrollingElement = scrollingElementRef.current;
                const targetElement = targetElementRef.current;


                // if scrolled right
                if (e.target.scrollLeft > currentScrollLeft) {
                    if (scrollingElementRef.current && targetElementRef.current) {
                        targetElement.scrollBy({
                            left: currentScrollLeft - e.target.scrollLeft,
                            behavior: 'auto'
                        })

                    }
                }
                else {
                    targetElement.classList.add('opacity-0')
                    targetElement.scrollBy({
                        left: currentScrollLeft - e.target.scrollLeft,
                        behavior: 'auto'
                    })
                }

                currentScrollLeft = (e.target.scrollLeft)
            }
        };

        if (scrollingElementRef.current && targetElementRef.current) {
            const targetElement = targetElementRef.current;
            scrollingElementRef.current.addEventListener('scroll', handleScroll);
            targetElement.scrollBy({
                left: targetElement.scrollWidth,
                behavior: 'auto'
            })
        }

        return () => {
            if (scrollingElementRef.current) {
                scrollingElementRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    return (
        <div className="gap-[0px] flex flex-col w-full  relative pt-[80px] md:pt-[120px]">
            <div className="absolute -top-[30%] md:-top-[20%] -right-[10%] md:-right-[0%] w-[300px] md:w-full overflow-hidden -z-1">
                <Image
                    src={'/imgs/ellipse-6.svg'}
                    alt={''}
                    className="object-cover overflow-visible ml-auto w-[250px] md:w-[400px] 2xl:w-[900px]"
                    width={1170}
                    height={2342}
                />
            </div>
            <div className="flex flex-col gap-[0px] mx-auto relative pb-0 lg:pb-4 2xl:pb-12">

                <div
                    style={{
                        textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} relative -top-12 bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000e4_34%,#962dfe_47%)] text-[40px] xl:text-[68px] text-center`}
                >
                    {' '}
                    Our
                    Artworks

                </div>
                <div className="absolute w-full absolute top-[40px] left-0">
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-center text-[#FFF8E5]`}
                    >
                        {' '}
                        A Curated by our community prompt engineers

                    </div>
                </div>

            </div>

            <div className='relative   mt-10 h-[300px] md:h-[380px] 2xl:h-[500px]'>
                <div ref={scrollingElementRef} className="lg:mx-auto carousel h-max overflow-y-hidden rotate-[-3deg] scale-[1.1] relative z-20 mt-20 lg:mt-0">
                    <div className="flex flex-nowrap  gap-[0px] bg- h-[300px] md:h-[380px] 2xl:h-[500px]  items-center bg-black ">
                        <RedactedPictureFrame className='rotate-[deg]' imgSrc={'/artworks/first.svg'} />
                        <RedactedPictureFrame className='rotate-[deg]  relative -top-0' imgSrc={'/artworks/second.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg] relative ' imgSrc={'/artworks/third.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg] relative' imgSrc={'/artworks/forth.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg]' imgSrc={'/artworks/fifth.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg]' imgSrc={'/artworks/first.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg]  relative' imgSrc={'/artworks/second.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg] relative' imgSrc={'/artworks/third.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg] relative' imgSrc={'/artworks/forth.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg]' imgSrc={'/artworks/fifth.svg'} />
                        <RedactedPictureFrame className='rotate-[0deg]' imgSrc={'/artworks/first.svg'} />

                    </div>
                </div>
                <div ref={targetElementRef} className="lg:mx-auto carousel h-max overflow-y-hidden rotate-[7deg] md:rotate-[6deg] lg:rotate-[2deg] 2xl:rotate-[1deg] scale-[1.08] md:scale-[1.1] lg:scale-[1.07] relative top-[-300px] md:top-[-377px] lg:top-[-380px] 2xl:top-[-500px]  opacity-[0.2] -z-1">
                    <div className="flex flex-nowrap  gap-[0px] bg- h-[300px] md:h-[380px] 2xl:h-[500px] items-center bg-black ">
                        <RedactedPictureFrame className='rotate-[0deg]' />
                        <RedactedPictureFrame className='rotate-[0deg]  relative ' />
                        <RedactedPictureFrame className='rotate-[0deg] relative ' />
                        <RedactedPictureFrame className='rotate-[0deg] relative ' />
                        <RedactedPictureFrame className='rotate-[0deg]' />
                        <RedactedPictureFrame className='rotate-[0deg]' />
                        <RedactedPictureFrame className='rotate-[0deg]' />
                        <RedactedPictureFrame className='rotate-[0deg]  relative ' />
                        <RedactedPictureFrame className='rotate-[0deg] relative ' />
                        <RedactedPictureFrame className='rotate-[0deg] relative ' />
                        <RedactedPictureFrame className='rotate-[0deg]' />
                        <RedactedPictureFrame className='rotate-[0deg]' />

                    </div>
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

            <section className='flex gap-5 justify-between px-5 w-full max-w-[1200px] mx-auto'>
                <ol className="items-start sm:grid grid-cols-5 w-full">
                    <li className="relative mb-6 sm:mb-0 p">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-16 sm:pe-8 pr-8">
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
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[8px] mt-6`}
                            >
                                {' '}
                                You'll own nothing and  be <br /> happy!
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-16 sm:pe-8 pr-8">

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
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[8px] mt-6`}
                            >
                                {' '}
                                Out with the old, in with the <br /> new
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-16 sm:pe-8 pr-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    $10M Market <br /> Cap
                                </div>

                            </div>

                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[8px] mt-6`}
                            >
                                {' '}
                                Jeets in disbelief and starts  <br /> to DCA
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-16 sm:pe-8 pr-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    $100M <br /> Market Cap
                                </div>

                            </div>


                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[8px] mt-6`}
                            >
                                {' '}
                                Time to buy a house, we are <br /> topping out!
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">

                            <PurpleSquare />
                            <div className="hidden sm:flex w-full bg-white h-0.5"></div>
                        </div>
                        <div className="mt-16 sm:pe-8 pr-8">
                            <div className="flex flex-col gap-[12px] mx-auto">
                                <div
                                    style={{
                                        textShadow: '10px 5px 15px rgba(68, 70, 87, 0.30);',
                                    }}
                                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000E4_0%,#962DFE_100%)] text-[22px] leading-[20px]`}
                                >
                                    {' '}
                                    $500M <br /> Market Cap
                                </div>

                            </div>

                            <div
                                className={`${Montserrat.className} font-[700] text-[12px] text-left text-[#FFF8E5] relative -top-[8px] mt-6`}
                            >
                                {' '}
                                Just added more, wen are <br /> we gonna hit 1 billion?
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
                        $10M Market  Cap
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
        <div className="gap-[40px] flex flex-col w-full relative  pt-[180px] lg:pt-[100px]" id="ROADMAP">
            <div className="flex flex-col  mx-auto relative">
                <div
                    style={{
                        textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} relative -top-12 bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000e4_34%,#962dfe_47%)] text-[40px] xl:text-[68px] text-center`}
                >
                    {' '}
                    Roadmap

                </div>

                <div className="absolute w-full absolute top-[40px] left-0">
                    <div
                        className={`${Montserrat.className} font-[700] text-[12px] text-center text-[#FFF8E5]`}
                    >
                        {' '}
                        A new load of Mayo
                    </div>
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
        <div className="flex flex-col  relative  pt-[0px] md:pt-[60px]">

            <div className="flex flex-col  mx-auto">
                <div
                    style={{
                        textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000e4_34%,#962dfe_47%)] text-[40px] xl:text-[68px] text-center`}
                >
                    {' '}
                    Join our

                </div>
                <div
                    style={{
                        textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                    }}
                    className={`${Skincake.className} relative -top-6 xl:-top-12 bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000e4_34%,#962dfe_47%)] text-[40px] xl:text-[68px] text-center`}
                >
                    {' '}
                    Ecosystem

                </div>
            </div>
            <div className='cursor-pointer w-max mx-auto' onClick={() => {
                window.location.href = 'https://purplesquare.ai/'
            }}>
                <Image

                    className="hide-events mx-auto cursor-pointer"
                    src={'/imgs/app.svg'}
                    alt={''}
                    width={328}
                    height={652}
                />
            </div>

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
                            className='hide-events w-4 h-4'
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
                            className='hide-events w-4 h-4'
                            alt={''} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
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
        <div className="flex flex-col gap-[18px] mx-auto text-center">
            <div
                style={{
                    textShadow: '0px 5px 15px #4446574D;',
                }}
                className={`${Skincake.className} text-[26px] font-[400] bg-clip-text text-transparent whitespace-nowrap bg-[linear-gradient(0deg,#8000e4_34%,#962dfe_47%)] inline-block text-transparent bg-clip-text`}
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
            className="flex flex-col gap-[10px] w-full  max-w-[1200px] pt-[40px] md:pt-[60px]"
            id="MAYONOMICS"
        >
            <div
                style={{
                    textShadow: '0px 5px 15px rgba(68, 70, 87, 0.30);',
                }}
                className={`${Skincake.className} relative  bg-clip-text text-transparent bg-[linear-gradient(0deg,#8000e4_34%,#962dfe_57%)] text-[40px] xl:text-[68px] text-center`}
            >
                {' '}
                Mayonomics

            </div>
            <div className="lg:hidden mx-auto text-center lg:top-[110px] lg:right-[-15%]">
                <div
                    style={{
                        textShadow: '0px 5px 35px #4446574D;',
                    }}
                    className={`bg-clip-text text-transparent bg-[linear-gradient(360deg,#8000E4_0%,#962DFE_100%)]
                        drop-shadow-md  text-[20px] lg:text-[34px] ${Skincake.className}`}
                >
                    Token Supply
                </div>
                <div
                    className={`bg-clip-text text-transparent bg-clip-text text-transparent bg-[linear-gradient(360deg,#8000E4_0%,#962DFE_100%)] text-[20px] lg:text-[34px] relative top-[-14px] ${Skincake.className}`}
                >
                    1,000,000,000
                </div>

            </div>
            <div className="flex relative flex-col-reverse mx-auto w-full lg:flex-row w-full">
                <div className="mx-auto relative">
                    <Image
                        src={'/imgs/mayonomics.svg'}
                        alt={''}
                        width={747}
                        height={727}
                        className='hide-events'
                    />
                    <div className="hidden lg:block lg:absolute mx-auto text-center lg:top-[110px] lg:right-[-15%]">
                        <div
                            style={{
                                textShadow: '0px 5px 35px #4446574D;',
                            }}
                            className={`bg-clip-text text-transparent bg-[linear-gradient(360deg,#8000E4_0%,#962DFE_100%)]
                        drop-shadow-md  text-[20px] lg:text-[34px] ${Skincake.className}`}
                        >
                            Token Supply
                        </div>
                        <div
                            className={`bg-clip-text text-transparent bg-clip-text text-transparent bg-[linear-gradient(360deg,#8000E4_0%,#962DFE_100%)] text-[20px] lg:text-[34px] relative top-[-14px] ${Skincake.className}`}
                        >
                            1,000,000,000
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 w-full md:gap-[24px] lg:mx-auto carousel overflow-x-scroll pt-10">
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
        <section className='relative w-full z-10'>
            <div className="w-[85%] md:w-full max-w-[568px] md:min-w-[568px]  mx-auto border border-[20px] rounded-xl border-[#33005A] bg-[#8820e0] mt-[60px] relative z-20">
                <iframe style={{ borderRadius: '20px' }} id='spotifyPlaylist' src="https://open.spotify.com/embed/playlist/7lWgJOMzCBTUFX0W8aQlW4?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </section>

    )
}

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen w-full items-center overflow-x-hidden gap-[60px] gap-[60px] md:gap-[106px]  h-[100px] overflow-y-scroll pb-[10px] bg-[#101011]">
            <Hero />
            <div className="hidden xl:flex xl:mt-[0px]"></div>
            <Info />
            <Mayonomics />
            <Artworks />
            <Roadmap />

            <div className="relative w-full z-0 flex flex-col gap-[60px] md:gap-[106px]">
                <App />
                <SpotifyPlaylist />
                <Socials />
                <div className="absolute top-[48%] md:top-[40%] -left-[200px] xl:-left-[180px]  rounded-full h-[600px] md:h-[900px] 2xl:h-[1200px] z-[1] ">
                    <p>Hello</p>
                    <Image
                        src={'/imgs/ellipses-2.svg'}
                        alt={''}
                        className="object-cover overflow-visible mx-auto w-[90%] md:w-full mx-auto  h-full"
                        width={1170}
                        height={2342}
                    />
                </div>
            </div>
        </div >
    )
}
