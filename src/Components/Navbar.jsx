import React from 'react'
import './Navbar.scss'
import logo from './images/Techfest2.png'
import logo2 from './images/Techfest1.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <img src={logo} alt="" className='showLogo1'/>
            <img src={logo2} alt="" className='showLogo2'/>
        </div>

        <ul>
            <li>Speakers</li>
            <li>Sponsor</li>
            <li>About</li>
            <li className='register'>Register</li>
        </ul>
    </div>
  )
}

export default Navbar