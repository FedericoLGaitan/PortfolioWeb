

import AboutMeCard from '@/components/about-me-card'
import Container from '@/components/container'
import TransitionPage from '@/components/transition-page'
import MyJourney from '@/components/my-journey'
import React from 'react'

const AboutMePage = () => {
  return (
    <>
      <TransitionPage/>
      <Container>
        <AboutMeCard/>
        <MyJourney />
      </Container>
    </>
  )
}

export default AboutMePage