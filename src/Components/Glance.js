import React from 'react'

const Glance = () => {
  return (
    <div>
      <h1 className='text-2xl pt-5 pb-5 font-bold text-[#424646]'>MMMUT at a glance </h1>
      <iframe width="100%" height="215" src="https://www.youtube.com/embed/SpMVPPIl8x0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="" style={{marginLeft:"80%"}}>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-xs text-white p-1 my-2 justify-self-end font-bold ms-auto'>MORE...</button>
      </div>

    </div>
  )
}

export default Glance
