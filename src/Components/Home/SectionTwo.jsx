import React from 'react'
import bigImage from '../images/mg.jpg'
import { FaLocationArrow } from "react-icons/fa6";

const SectionTwo = () => {
  return (
    <div className='sectionTwoMain'>
        <div className='sectionDiv'>
          <div className='sectionTwoText'>
            <h2>The biggest Port Harcourt <br /> Tech event yet</h2>

            <p>
              Experience Canva Create in person with 50+ speakers, 15+ sessions and workshops led by the Canva team. Can’t make it to L.A.? Tune in to the keynote online to get a first look at the new launches.
            </p>

            <div className='dateTime'>
              <h3 className='myH3'>Date: 23rd May 2024</h3>
              <h3>Time: 9am</h3>
            </div>

            <button>Get free ticktet <FaLocationArrow /></button>
          </div>

          <div className='sectionTwoImgDiv'>
              <img src={bigImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default SectionTwo