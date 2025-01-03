import React from 'react'
import PortfolioBox from '@/components/portfolio-box'
import { dataPortfolio } from '@/helpers/data'
import MotionTransition from '@/components/transition-component'

const Portfolio = () => {
  return (
    <MotionTransition position='bottom'>
         <div className='flex flex-col justify-center h-full'>
            <h1 className='text-2xl loading-tight text-center md:text-4xl md:mb-5 text-slate-50 
            border border-transparent border-b-slate-100 border-b-4 p-4 font-bold'>Latest projects</h1>

            <div className='relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4'>
              {dataPortfolio.map((data) =>
                <PortfolioBox key={data.id} data={data}/>
              )}
            </div>    
         </div>
         
    </MotionTransition>
  )
}

export default Portfolio