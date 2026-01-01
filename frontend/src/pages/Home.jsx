import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import WhatWeDo from '../components/WhatWeDo'
import PricingInfo from '../components/PricingInfo'
import Banner from '../components/Banner'
import Team from '../components/Team'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <WhatWeDo/>
    <PricingInfo/>
    <Banner/>
    <Team/>
    <NewsLetter/>
    </>
  )
}

export default Home