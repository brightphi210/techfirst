import React from 'react'
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { GiGrowth } from "react-icons/gi";
import { BsFillSendFill } from "react-icons/bs";

const SectionThree = () => {
  return (
    <div className='sectionThreeMain'>
        <div className='sectionThreeDiv'>
            <h2>Tech Fest</h2>
            <h3>Reason why you should attend</h3>
        </div>


        <div className='sectionThreeFlex'>
            <div>
                <>
                <span><HiMiniUserGroup /></span>
                </>
                <h2>Collaboration For Growth</h2>
                <p>
                    The event helps to set up a 
                    practical and measurable roadmap for 
                    collaborators. The event serves as a 
                    platform that connects different levels 
                    of players and stimulates conversations 
                    and initiatives that births Collaboration.
                </p>
            </div>


            <div>
                <>
                    <span><FaQuestion /></span>
                </>
                <h2>Learn The Business of Tech</h2>
                <p>
                    Participants will have the opportunity to 
                    learn more about the business of Tech. 
                    They will learn how to build a business 
                    around their tech skills, passion, and products. 
                    Tech startups will gain basic 
                    business development knowledge to help scale and 
                    grow their product. Being a developer isn't enough. 
                    Owning a Tech-Hub is not enough. You need to know the 
                    business.                
                </p>
            </div>



            <div>
                <>
                    <span><LuSearch /></span>
                </>
                <h2>Find A Co-Founder</h2>
                <p>
                    Are you a technical or non-technical 
                    co-founder? TechUp Port Harcourt provides 
                    participants the opportunity to find a co-founder. 
                    It, therefore, provides a level playing ground for 
                    playing to find the right kind of individuals they 
                    desire to bring their ideas to life.                
                </p>
            </div>


            <div>
                <>
                    <span><IoPersonSharp /></span>
                </>
                <h2>Connect With Investors</h2>
                <p>
                    At TechUp Port Harcourt, participants 
                    will have the opportunity to learn the 
                    best way to attract investors. The event 
                    will also provide them with a platform to 
                    connect with investors, share elevator pitches 
                    with angel investors, etc.                
                </p>
            </div>


            <div>
                <>
                    <span><GiGrowth /></span>
                </>
                <h2>Grow Your Network</h2>
                <p>
                    The event helps to set up a practical 
                    and measurable roadmap for collaborators. 
                    The event serves as a platform that connects 
                    different levels of players and stimulates 
                    conversations and initiatives that births 
                    Collaboration.
                </p>
            </div>



            <div>
                <>
                <span><BsFillSendFill /></span>
                </>
                <h2>Showcase your brand/products</h2>
                <p>
                    The event helps to set up a practical 
                    and measurable roadmap for collaborators. 
                    The event serves as a platform that connects 
                    different levels of players and stimulates 
                    conversations and initiatives that births 
                    Collaboration.
                </p>
            </div>

            
        </div>
    </div>
  )
}

export default SectionThree