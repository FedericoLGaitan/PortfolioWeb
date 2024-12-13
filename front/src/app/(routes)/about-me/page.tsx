

import AboutMeCard from '@/components/about-me-card'
import Container from '@/components/container'
import TransitionPage from '@/components/transition-page'
import React from 'react'

const AboutMePage = () => {
  return (
    <>
      <TransitionPage/>
      <Container>
        <AboutMeCard/>
      </Container>
    </>
  )
}

export default AboutMePage