"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60 h-full'>
        <div className='z-20 grid md:grid-cols-2 items-center mx-auto max-w-4xl h-full p-6 py-20 md:py-0 gap-4'>
         <Image src='/astronautaHome.png' alt='Home-Pic' width={500} height={500} className='rounded-md mx-auto'/>
        <div className='flex flex-col justify-center max-w-md mx-auto md:mx-0'>
                <h1 className="text-3xl font-bold loading-tight text-center md:text-start">Hi, I&apos;m <span className="text-secondary">Fede</span></h1>
                <p className="text-xl text-white text-center md:text-start">Together we can <TypeAnimation className="text-secondary font-semibold" 
                sequence={['create', 2000, 'innovate', 2000, 'build', 2000, 'work', 2000]} repeat={Infinity} cursor={false}/></p>
        </div>
        </div>
   </div>
  )
}

export default Introduction