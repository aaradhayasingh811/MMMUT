import React from 'react'

const SideGuests = (props) => {
  return (
    <div className='flex h-max-content bg-[#f8f9fa] guest-box'>
      <div className="flex self-center">
        <img src={props.img} alt="" className='h-16 mx-4'/>
      </div>
      <div className="flex flex-col text-center text-xs font-bold w-full">
        <div className="text-center">{props.name}</div>
        <div className="text-[#b12024] text-center">{props.position}</div>
        <div className="text-center"><button style={{borderRadius:"15px"}} className='bg-[#f6931d] text-white p-1 px-2 my-2 message'>Message</button></div>
      </div>
    </div>
  )
}

export default SideGuests
