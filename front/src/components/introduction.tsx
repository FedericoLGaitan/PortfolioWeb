"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60 h-full'>
        <div className='z-20 flex flex-col justify-center items-center h-full p-6 py-20 md:py-0 gap-4'>
         <Image src='/astronautaHome.png' alt='Home-Pic' width={500} height={500} className='rounded-md'/>
        <div className='flex flex-col justify-center max-w-md'>
                <h1 className="text-3xl font-bold loading-tight text-center">Hi, I&apos;m <span className="text-secondary">Fede</span></h1>
                <p className="text-xl text-white text-center">Together we can <TypeAnimation className="text-secondary font-semibold" 
                sequence={['create', 2000, 'innovate', 2000, 'build', 2000, 'work', 2000]} repeat={Infinity} cursor={false}/></p>
        </div>
        </div>
   </div>
  )
}

export default Introduction