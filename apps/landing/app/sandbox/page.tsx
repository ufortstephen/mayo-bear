/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Image from 'next/image'
import { Montserrat, Skincake } from '@/styles/fonts'
import MayoBtn from '@/components/MayoBtn'

export default function Home() {
    return (
        <div className="w-screen h-screen bg-muted-100 p-[50px]">
            <MayoBtn />
        </div>
    )
}
