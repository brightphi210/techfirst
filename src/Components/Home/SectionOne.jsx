import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

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

          <Link to={'https://forms.gle/iMwwi67bN38JU9L39'} className='link'>
            <button >Free Registration</button>
          </Link>
          
          <Link to={'/sponsors'}><button className='sponsor'>Sponsor</button></Link>
        </div>

      </div>

    </div>
  )
}

export default SectionOne