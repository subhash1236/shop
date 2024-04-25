import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'

import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import CategoryShoCase from './CategoryShowCase'



const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShoCase/>
        <Register/>
        <LocationSprade/>
        <AboutUs/>
        <AppSection/>
        <Sponsor/>
        
    </div>
  )
}

export default Home