import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SponsorFile from '../Components/Sponsors/SponsorFile'

const Sponsors = () => {
  return (
    <div>
      <Navbar />
      <div style={{marginTop : 100}}>
        <SponsorFile />
      </div>
      <Footer />
    </div>
  )
}

export default Sponsors