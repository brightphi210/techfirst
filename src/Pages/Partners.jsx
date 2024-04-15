import React from 'react'
import sport5 from '../Components/images/sponsors/loctech PNG white.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Partners = () => {
  return (

    <main>
        <Navbar />
        <div className='sponsorMain'>
        <h2>Meet Our Partners</h2>
        <div className='sponsorsDiv'>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>


          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>

          <div className='eachSpors'>
            <img src={sport5} alt="" />
          </div>
          
        </div>

    </div>

    <Footer />
    </main>

  )
}

export default Partners