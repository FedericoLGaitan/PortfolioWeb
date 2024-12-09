"use client"
import React from 'react';
import  Link  from 'next/link';
import { itemsNavbar } from '@/helpers/data';
import { usePathname } from 'next/navigation';
import MotionTransition from './transition-component';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mx-auto h-max bottom-10">
           <nav>
               <div className='flex intems-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm'>
                  {itemsNavbar.map((item) => (
                    <div key={item.id}
                    className={`px-1 py-1 lg:px-3 lg:py-2 transition duration-150 rounded-full cursor-pointer
                     hover:bg-secondary ${pathname === item.link && "bg-secondary"}`}>
                        <Link href={item.link}>
                                {item.icon}
                        </Link>
                    </div>
                  ))}
               </div>
            </nav> 
        </MotionTransition>
    );
};

export default Navbar;