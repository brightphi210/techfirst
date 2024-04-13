import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/Home/SectionOne'
import SectionTwo from '../Components/Home/SectionTwo'
import SectionThree from '../Components/Home/SectionThree'
import SectionFour from '../Components/Home/SectionFour'
import SectionFive from '../Components/Home/SectionFive'

const HomePage = () => {
  return (
    <div>
        <Navbar /> 
        <SectionOne/>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </div>
  )
}

export default HomePage