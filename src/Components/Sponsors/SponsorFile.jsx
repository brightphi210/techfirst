import React from 'react'
import sp1 from '../images/sp1.avif'
import sp2 from '../images/sp2.avif'
import sp3 from '../images/sp3.avif'
import sp4 from '../images/sp4.avif'
import sp5 from '../images/sp5.avif'
import sp6 from '../images/sp6.avif'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const SponsorFile = () => {
  return (
    <div className='sectionFourMain'>
    <h2 className='meetH2'>Meet Our Speakers</h2>
    <div className='sectionFourDiv'>
        <div>
            <div>
                <img src={sp1} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>Bright Philips</h2>

                <div className='socialFour'>
                    <h3>CEO @ Amazon LTD.</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>


        <div>
            <div>
                <img src={sp6} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>John Doe</h2>
                <div className='socialFour'>
                    <h3>CEO @ Disney . .</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>


        <div>
            <div>
                <img src={sp3} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>Fred Peters</h2>
                <div className='socialFour'>
                    <h3>Ambasador @ Lisk</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>


        <div>
            <div>
                <img src={sp4} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>James J. Chris</h2>
                <div className='socialFour'>
                    <h3>CEO @ Loctech NG.</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>


        <div>
            <div>
                <img src={sp5} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>Santus Sanitoral</h2>
                <div className='socialFour'>
                    <h3>Snr. Dev @ Glove Nigeria.</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>


        <div>
            <div>
                <img src={sp2} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>Chidera Praise</h2>
                <div className='socialFour'>
                    <h3>CTO Greeks</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>


        <div>
            <div>
                <img src={sp1} alt="" />
            </div>

            <div className='eachSecDiv'>
                <h2>Bright Philips</h2>

                <div className='socialFour'>
                    <h3>CEO @ Amazon LTD.</h3> 
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default SponsorFile