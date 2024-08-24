import React from 'react'
import Newinfo from './Newinfo'

const News = () => {
  return (
      <div className='m-2 rounded-lg border-2 border-slate-300 bg-[#f4f4f4] '>
      <div className="flex flex-col h-30 p-4">
        <Newinfo heading="Office order for Ombudsperson (लोकपाल)" data="-MMMUT" />
        <Newinfo heading="Office Order-Dean of Post Graduate Studies" data="-MMMUT" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        {/* <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" />
        <Newinfo heading="Admission-2024" data="Guildelines to Fee Policy" /> */}
      </div>
      <div className="" style={{marginLeft:"80%"}}>
      <button style={{borderRadius:"15px"}} className='message bg-[#f6931d] text-white p-1 my-2 text-xs font-bold'>MORE...</button>
      </div>
    </div>
  )
}

export default News
