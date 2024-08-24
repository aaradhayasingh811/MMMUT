import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import Dropdown from './Dropdown';
import University from '../NavLinks/University'
import Academics from '../NavLinks/Academics';
import Research from '../NavLinks/Research';
import Campus from '../NavLinks/Campus';
import Training from '../NavLinks/Training';
import Examination from '../NavLinks/Examination';
import Careers from '../NavLinks/Careers';
import Alumni from '../NavLinks/Alumni';
import Naac from '../NavLinks/Naac';

const Blacknav = () => {

  return (
    <>
    <div className='flex text-white bg-[#424646] h-min-content flex-start gap-x-4 flex-wrap nav-link text-sm navbar '>
        <div className="bg-[#f7941d] px-2 h-10 flex self-center">
            <HouseIcon className='place-self-center' />
        </div>
        <div className="flex items-center">
            <University/>
        </div>
        <div className="flex items-center">
           <Academics />
        </div>
        <div className="flex items-center">
            <Research />
        </div>
        <div className="flex items-center">
            <Campus />
        </div>
        <div className="flex items-center">
            <Training/>
        </div>
        <div className="flex items-center">
            <Examination />
        </div>
        <div className="flex items-center">
           <Careers />
        </div>
        <div className="flex items-center">
        <Alumni />
        </div>
        <div className="flex items-center">
            <Naac />
        </div>
        <div className="flex self-center">
            <LocalPhoneIcon />
        </div>
        
    </div>
      
    </>
  )
}

export default Blacknav
