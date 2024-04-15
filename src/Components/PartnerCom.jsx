import React from 'react'
import './PartnerCompo.scss'

const PartnerCom = () => {
  return (
    <div className='formMain'>
        <form action="" className=''>
            <h2>Send us a message</h2>
            <input type="text" placeholder='Name: ' required/>
            <input type="text" placeholder='Number' required/>
            <input type="text" placeholder='Email' required/>
            <input type="text" placeholder='Message' required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default PartnerCom