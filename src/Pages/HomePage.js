import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/Home/SectionOne'
import SectionTwo from '../Components/Home/SectionTwo'

const HomePage = () => {
  return (
    <div>
        <Navbar /> 
        <SectionOne/>
        <SectionTwo />
    </div>
  )
}

export default HomePage