import React from 'react'
import img from '../Images/new.gif';
const Newinfo = (props) => {
  return (
    <div className='bg-[#f4f4f4]'>
      <div className="flex ml-4 border-b-2 border-[#d1d5db] bg-[#ffffff]">
        <img src={img} alt="" className='w-8 h-2 self-center flex' />
        <h1 className='text-slate-700 font-bold'>{props.heading}</h1>
      </div>
      <div className="ml-4 text-sm my-2 text-slate-500">
        <p>{props.data}</p>
      </div>
      <div className="mb-2 news-info">
        <button style={{borderRadius:"15px"}}  className=' message bg-[#0891b2] text-white px-2 py-1 flex place-self-end underline text-xs font-bold'>MORE..</button>
      </div>
    </div>
  )
}

export default Newinfo
