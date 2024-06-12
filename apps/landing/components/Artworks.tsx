'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel, Navigation, Pagination } from 'swiper/modules'

import { images } from '@/utils/artworks'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Skincake } from '@/styles/fonts'
import { useEffect, useRef, useState } from 'react'

function RedactedPictureFrame({ className, imgSrc }: { className?: string, imgSrc?: string }) {
    return (
        <div
            className={`${className} cursor-pointer hover:opacity-[0.8] w-[250px] md:w-[282.41px] h-[300px] md:h-[350px] 2xl:w-[450px] 2xl:h-[450px] bg- py-14 pr-6 2xl:pr-10`}
        >
            <div
                className={`w-full h-full flex text-[#FFF8E5] relative bg- ${Skincake.className} m-auto`}
            >

                <div className="absolute -top-10 left-0 w-full h-max flex items-center justify-between gap-4 z-20 px-3">
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
                <div className="absolute -bottom-10 left-0 w-full 2xl:w-full h-max flex items-center justify-between gap-4 z-20 px-3">
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
                <div className="hidden md:flex  absolute -top-10 md:-right-[101%] lg:-right-[107%] xl:-right-[102%] 2xl:-right-[104%] w-full 2xl:w-full h-max flex items-center justify-between gap-4 z-20">
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
                        <div className="w-[22px] h-[22px] rounded-full bg-white"> &nbsp;</div>
                    </div>
                </div>
                <div className="hidden md:flex absolute -bottom-10 md:-right-[101%] lg:-right-[107%] xl:-right-[102%] 2xl:-right-[104%] w-full 2xl:w-full h-max flex items-center justify-between gap-4 z-20">
                    <div className="h-[26px] w-[26px]  rounded-full bg-gradient-to-r from-[#494B54] via-[#7300FF] to-y[#7300FF] flex items-center justify-center">
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

export default function MayoArtworks() {
    const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0)
    const targetElementRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<any>(null);
    const [currentScrollLeft, setCurrentScrollLeft] = useState<number>(0)

    useEffect(() => {
        const targetElement = targetElementRef.current;        
        if (targetElement) {
            console.log(targetElement.scrollWidth);
            
            targetElement.scrollBy({
                left: targetElement.offsetWidth,
                behavior: 'auto'
            })
        }

    }, [])
    useEffect(() => {
        const targetElement = targetElementRef.current;
        if (targetElement) {
            if (swiperRef?.current) {

                if (swiperRef?.current?.previousTranslate < currentScrollLeft) {
                    // is scrolled back
                    targetElement.scrollBy({
                        left: (swiperRef?.current?.previousTranslate - currentScrollLeft) / 1.2,
                        behavior: 'auto'
                    })
                    setCurrentScrollLeft(currentScrollPosition)
                }
                else if (swiperRef?.current?.previousTranslate > currentScrollLeft) {
                    targetElement.scrollBy({
                        left: (+currentScrollPosition - swiperRef?.current?.previousTranslate) / 1.2,
                        behavior: 'auto'
                    })
                    setCurrentScrollLeft(currentScrollPosition)
                }

            }
        }


    }, [currentScrollPosition])


    return (
        <section className='py-12 h-[300px] md:h-[380px] 2xl:h-[500px]'>
            <div className='w-full '>
                <Swiper
                    ref={swiperRef}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    navigation={false}
                    pagination={false}
                    modules={[Mousewheel, FreeMode]}
                    className='h-max w-full rounded-lg h-max overflow-y-hidden rotate-[-3deg] scale-[1.1] relative z-20 mt-20 lg:mt-0 bg-black'
                    mousewheel
                    slidesPerView={1.5}
                    onProgress={(e: any) => {
                        swiperRef.current = e;
                        setCurrentScrollPosition(swiperRef.current?.translate)
                    }
                    }
                    onSliderMove={(e: any) => {
                        swiperRef.current = e;
                        setCurrentScrollPosition(swiperRef.current?.translate)
                    }
                    }
                    breakpoints={{
                        0: {

                            slidesPerView: 1.7,
                        },
                        456: {

                            slidesPerView: 1.8,
                        },
                        576: {

                            slidesPerView: 2.4,
                        },
                        768: {

                            slidesPerView: 2.7,
                        },
                        818: {

                            slidesPerView: 2.9,
                        },
                        1024: {

                            slidesPerView: 3.2,
                        },
                        1200: {

                            slidesPerView: 4.9,
                        },
                        1540: {

                            slidesPerView: 3.6,
                        },
                        1717: {

                            slidesPerView: 3.9,
                        },
                        1902: {

                            slidesPerView: 4.2,
                        },
                        2120: {

                            slidesPerView: 5,
                        },
                        2327: {

                            slidesPerView: 5.5,
                        },
                    }}
                    freeMode={{
                        enabled: true,
                        sticky: true,
                    }}
                >
                    {images.map((image: any, index: number) => (
                        <SwiperSlide key={index}>
                            <RedactedPictureFrame className='rotate-[deg]' imgSrc={image.src} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={targetElementRef} className="lg:mx-auto carousel h-max overflow-y-hidden rotate-[7deg] md:rotate-[4.5deg] lg:rotate-[1deg] 2xl:rotate-[0.1deg] scale-[1.08] md:scale-[1.1] lg:scale-[1.02] 2xl:scale-[1] relative top-[-300px] md:top-[-377px] lg:top-[-365px] 2xl:top-[-470px]  opacity-[0.2] -z-1">
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
        </section>
    )
}
