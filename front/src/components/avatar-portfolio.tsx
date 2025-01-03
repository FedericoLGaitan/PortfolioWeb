import React from 'react'
import MotionTransition from '@/components/transition-component'
import Image from 'next/image'

const AvatarPortfolio = () => {
  return (
     <MotionTransition position='bottom' className='bottom-0 right-0 hidden lg:inline-block md:fixed z-10'>
        <Image 
           src="/astronauta-portfolio.png" 
           width={300}
           height={300}
           className='w-full h-full'
           alt='avatar porfolio' />
     </MotionTransition>
   )
}

export default AvatarPortfolio