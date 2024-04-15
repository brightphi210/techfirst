import React from 'react'
import sport5 from '../images/sponsors/loctech PNG white.png'
import { Link } from 'react-router-dom'

const SectionSix = () => {
  return (
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
          
        </div>

        <Link to={'/partners'}>
          <button>Become a partner</button>
        </Link>
    </div>
  )
}

export default SectionSix