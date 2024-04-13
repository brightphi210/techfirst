import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/Home/SectionOne'
import SectionTwo from '../Components/Home/SectionTwo'
import SectionThree from '../Components/Home/SectionThree'

const HomePage = () => {
  return (
    <div>
        <Navbar /> 
        <SectionOne/>
        <SectionTwo />
        <SectionThree />
    </div>
  )
}

export default HomePage