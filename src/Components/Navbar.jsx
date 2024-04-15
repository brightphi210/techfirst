import React from 'react'
import './Navbar.scss'
import logo from './images/Techfest2.png'
import logo2 from './images/Techfest1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <Link to={'/'}><img src={logo} alt="" className='showLogo1'/></Link>
            <Link to={'/'}><img src={logo2} alt="" className='showLogo2'/></Link>
        </div>

        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/sponsors'}><li>Speakers</li></Link>
            <Link to={'/partners'}><li>Be a Partner</li></Link>
            
            <Link to={'https://forms.gle/iMwwi67bN38JU9L39'} className='link'>
                <li className='register'>Register</li>
            </Link>
            
        </ul>
    </div>
  )
}

export default Navbar