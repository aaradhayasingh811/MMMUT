import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Navdrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <IconButton aria-label="Navbar" size="large" className="ml-auto text-3xl" onClick={toggleDropdown}>
                        <DensityMediumIcon className="bg-white shadow text-[#f6931d]" />
                        </IconButton>

      {isOpen && (
        <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                The University
                <ArrowRightIcon className='text-[#f6931d]' />
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Academics
              <ArrowRightIcon className='text-[#f6931d]' />

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Research & Development
            <ArrowRightIcon className='text-[#f6931d]' />

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Campus Facilities
             <ArrowRightIcon className='text-[#f6931d]' />

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Training & Placement
              <ArrowRightIcon className='text-[#f6931d]' />

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Examination & Result
               <ArrowRightIcon className='text-[#f6931d]' />
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Careers
               <ArrowRightIcon className='text-[#f6931d]' />
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Alumni
               <ArrowRightIcon className='text-[#f6931d]' />
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              NAAC
               <ArrowRightIcon className='text-[#f6931d]' />
              </a>
            </li>

           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navdrop;
