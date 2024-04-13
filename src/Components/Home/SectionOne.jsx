import React from 'react'
import './home.scss'

const SectionOne = () => {
  return (
    <div className='background'>

      <div className='sectionTextDiv'>
        <p>Techfest 1.0</p>
        <h2>Explore,  <span>Innovate</span> <br className='brTag'/> & Connect</h2>

        <h3>
          Port Harcourt Tech Fest, is an all-inclusive event designed to help, 
          foster <br className='brTag'/> colaborations amongst tech enthusiast and experts. . .
        </h3>

        <div className='sectionOneBtn'>
          <button >Free Registration</button>
          <button className='sponsor'>Sponsor</button>
        </div>

      </div>

    </div>
  )
}

export default SectionOne