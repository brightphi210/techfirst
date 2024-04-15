import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/Home/SectionOne'
import SectionTwo from '../Components/Home/SectionTwo'
import SectionThree from '../Components/Home/SectionThree'
import SectionFour from '../Components/Home/SectionFour'
import SectionFive from '../Components/Home/SectionFive'
import SectionSix from '../Components/Home/SectionSix'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar /> 
        <SectionOne/>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
    </div>
  )
}

export default HomePage