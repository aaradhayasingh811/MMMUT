import React from 'react'
import Newinfo from './Newinfo'

const Events = () => {
  return (
      <div className='m-2 rounded-lg border-2 border-slate-300 bg-[#f4f4f4] '>
      <div className="flex flex-col h-30">
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        {/* <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" /> */}
        {/* <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" /> */}
      </div>
      <div className="" style={{marginLeft:"80%"}}>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-white p-1 my-2 justify-self-end ms-auto text-xs font-bold'>MORE...</button>
      </div>
    </div>
  )
}

export default Events
