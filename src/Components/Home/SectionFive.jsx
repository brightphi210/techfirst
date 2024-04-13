import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SectionFive = () => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)


    const handleShowOne = () =>{
        setShow1(!show1);
    }


    const handleShowTwo = () =>{
        setShow2(!show2);
    }


    const handleShowThree = () =>{
        setShow3(!show3);
    }
  return (
    <div className='sectionFiveMain'>
        <h2 className='meetH2'>Frequently Asked Questions</h2>
        <div className='sectionFive'>
            
            <div className='sectionFivArror' onClick={handleShowOne}>
                <h2>What should we be expecting</h2>
                {show1 === false ? (

                    <p><MdKeyboardArrowDown /></p>
                ):(
                    
                    <p><MdKeyboardArrowUp /></p>
                )}
            </div>


            {show1 === false ? ('') : (
                <p className='result'>
                    Canva Create is our moment to introduce 
                    exciting new products coming to Canva, 
                    connect with our community, and 
                    for you to hear from inspiring speakers 
                    and thought leaders.
                </p>
            )}


            <div className='sectionFivArror' onClick={handleShowTwo}>
                <h2>How can I become a sponsor</h2>
                {show2 === false ? (

                    <p><MdKeyboardArrowDown /></p>
                ):(
                    
                    <p><MdKeyboardArrowUp /></p>
                )}
            </div>


            {show2 === false ? ('') : (
                <p className='result'>
                    Canva Create is our moment to introduce 
                    exciting new products coming to Canva, 
                    connect with our community, and 
                    for you to hear from inspiring speakers 
                    and thought leaders.
                </p>
            )}


            <div className='sectionFivArror' onClick={handleShowThree}>
                <h2>When is the event coming up</h2>
                {show3 === false ? (

                    <p><MdKeyboardArrowDown /></p>
                ):(
                    
                    <p><MdKeyboardArrowUp /></p>
                )}
            </div>


            {show3 === false ? ('') : (
                <p className='result'>
                    Canva Create is our moment to introduce 
                    exciting new products coming to Canva, 
                    connect with our community, and 
                    for you to hear from inspiring speakers 
                    and thought leaders.
                </p>
            )}
        </div>
    </div>
  )
}

export default SectionFive