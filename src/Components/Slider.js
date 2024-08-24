import React from 'react'
import Gif from '../Images/33.gif'
const Slider = () => {
  return (
    <marquee
    id="m5"
    behavior="ALTERNATE"
    scrollamount={3}
    scrolldelay={0}
    scrollspeed={300}
    onmouseout="this.start();"
    onmouseover="this.stop();"
    style={{ borderWidth: 0, borderStyle: "none", width: "100%" }}
  >
    <div className='flex flex-row justify-center py-2 slider'>

      <div className="flex font-bold">
        <img src={Gif} alt="gif" className='h-2/3' />
        <a href='' style={{color:"red"}}>NAAC grade A University |</a>
      </div>
      &nbsp;&nbsp;
      <div className="flex font-bold text-sm ">
        <img src={Gif} alt="gif" className='h-2/3' />
        <a href='' style={{color:"red"}}>ICETIGT-2024 |</a>
      </div>
      &nbsp;&nbsp;
      <div className="flex font-bold text-sm ">
        <img src={Gif} alt="gif" className='h-2/3' />
        <a href='' style={{color:"red"}}>Vacant Seats for Spot Counselling of M.Tech and M.Sc. |</a>
      </div>
      &nbsp;&nbsp;
      <div className="flex font-bold text-sm">
        <img src={Gif} alt="gif" className='h-2/3' />
        <a href='' style={{color:"red"}}>NIRF Ranking |</a>
      </div>
      &nbsp;&nbsp;
      <div className="flex font-bold text-sm ">
        <img src={Gif} alt="gif" className='h-2/3' />
        <a href='' style={{color:"red"}}>ANTI ragging committee 2024-25</a>
      </div>
      
    </div>
      </marquee>
  )
}

export default Slider
