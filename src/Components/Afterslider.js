import React from 'react'
import mmmtu from '../Images/logo3.jpg'
import data from '../Images/logo-banner.jpg'
import g70 from '../Images/G20_India_Logo.png'
import aazadi from '../Images/Azadi-Ka-Amrit-Mahotsav-Logo.png'
import ArchiveIcon from '@mui/icons-material/Archive';
import IconButton from '@mui/material/IconButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Navdrop from './Navdrop'


const Afterslider = () => {
  return (
    <div className='flex h-max-content md:grid md:grid-cols-3 grid grid-cols-1'>
        <div className="md:mx-auto">
            <div className="but-full">
            <a href=""><img src={mmmtu} alt="logo" /></a> {/*first */}
            </div>
            
            <div className="items-center but-mob w-full justify-between">
                 <a href="" className="flex-shrink-0">
                    <img src={mmmtu} alt="logo"  /> {/* Adjust size if needed */}
                    </a>
                    <Navdrop />
             </div>

        
        </div>
        <div className="md:mx-auto" >
            <img src={data} alt="" className='h-full w-full' />
        </div>
        <div className="flex items-center md:justify-around sm:justify-around">
        <div className="">
                <img src={aazadi} alt="" className=' md:h-10 md:w-20 sm:h-20 sm:w-35' />
            </div>
            <div className="" >
                <img src={g70} alt=""  className='md:h-10 md:w-20 sm:h-20 sm:w-35 ' />
            </div>
           
            <div className="">
                <ArchiveIcon />
            </div>
            <div className="">
                <DensityMediumIcon />
            </div>
        </div>
     

    </div>
  )
}

export default Afterslider
