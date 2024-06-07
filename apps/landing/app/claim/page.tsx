/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'
import MayoBtn from '@/components/MayoBtn'
import { CONTRACT_ADDRESS } from '@/consts'
import { MayoConnectButton } from '@/components/ConnectButton'



function MigrateToken() {
    return (
        <></>
        // <section className='h-[500px] bg-[#101011] border min-w-[600px] max-w-[600px] rounded-md p-5'>
        //     {/* <h3>Hello</h3> */}
        // </section>
    )
}
function Hero() {
    return (
        <div className="relative w-full">

            <div className="flex flex-row p-[20px] absolute top-0 w-full z-20">
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


export default function Home() {
    return (
        <div className="relative flex flex-col h-screen w-full items-center overflow-hidden gap-[130px] md:gap-[136px]  overflow-y-hidden bg-[#101011] relative">
            <Hero />
            <MigrateToken />
            <div className="absolute top-[60%] left-[-300px]  w-[600px]  -z-1">
                <Image
                    src={'/imgs/ellipse.svg'}
                    alt={''}
                    className="object-cover overflow-visible mx-auto w-[100%]"
                    width={1170}
                    height={2342}
                />
            </div>
        </div>
    )
}
