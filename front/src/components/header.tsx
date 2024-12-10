
import React from 'react'
import MotionTransition from './transition-component'
import Link from 'next/link'
import { Rocket } from 'lucide-react'
import { socialNetworks } from '@/helpers/data'

const Header
 = () => {
  return (
    <MotionTransition 
     position="bottom"
     className="absolute z-40 inline-block w-full top-6 md:top-10">
        <header>
            <div className="container justify-between lg:max-w-4xl md:max-w-xl max-w-[300px] mx-auto flex flex-row ">
                <Link className='flex items-center justify-center'
                 href={"/"}><Rocket size={40} color="#fefefe"/></Link>

                <div className="flex items-center justify-center gap-7">
                 {socialNetworks.map((network) => (
                    <Link key={network.id} href={network.src} target='_blank'>
                        {network.logo}
                    </Link>
                 ))}
                </div>

            </div>
        </header>
    </MotionTransition>
  )
}

export default  Header

