 
 "use client"
 
 import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { transitionVariantsPage } from '@/utils/motion-transition'
 
 const TransitionPage = () => {
   return (
     <AnimatePresence mode="wait" >
        <div>
            <motion.div
            className="fixed top-0 bottom-0 w-screen right-full 
            z-30 bg-[#010101] bg-opacity-80"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.2 , ease: 'easeInOut'}}
            >
            </motion.div>
        </div>
     </AnimatePresence>
   )
 }
 
 export default TransitionPage