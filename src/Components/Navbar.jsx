import React from 'react'
import './Navbar.scss'
import logo from './images/Techfest2.png'
import logo2 from './images/Techfest1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <img src={logo} alt="" className='showLogo1'/>
            <img src={logo2} alt="" className='showLogo2'/>
        </div>

        <ul>
            <li>Speakers</li>
            <li>Partners</li>
            <Link to={'https://forms.gle/iMwwi67bN38JU9L39'} className='link'>
                <li className='register'>Register</li>
            </Link>
            
        </ul>
    </div>
  )
}

export default Navbar