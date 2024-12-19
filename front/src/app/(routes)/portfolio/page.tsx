import Container from '@/components/container'
import TransitionPage from '@/components/transition-page'
import Portfolio from '@/components/portfolio-page'
import AvatarPortfolio from '@/components/avatar-portfolio'
import React from 'react'

const PortfolioPage = () => {
  return (
    <>
    <TransitionPage/>
    <Container>
      <AvatarPortfolio/>
      <Portfolio/>
    </Container>
    </>
    
  )
}

export default PortfolioPage