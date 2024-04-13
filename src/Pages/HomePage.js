import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/Home/SectionOne'
import SectionTwo from '../Components/Home/SectionTwo'
import SectionThree from '../Components/Home/SectionThree'
import SectionFour from '../Components/Home/SectionFour'

const HomePage = () => {
  return (
    <div>
        <Navbar /> 
        <SectionOne/>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
    </div>
  )
}

export default HomePage