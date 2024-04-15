import React from 'react'
import logo from './images/Techfest2.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={logo} alt="" />
        </div>


        <ul>
            <li><FaInstagram /></li>
            <li><FaXTwitter /></li>
            <li><FaLinkedinIn /></li>
        </ul>
    </div>
  )
}

export default Footer