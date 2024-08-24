import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Research = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-center">
     <button onClick={toggleDropdown} className='text-white bg-[#424646] nav'>Research & Development 
     <KeyboardArrowDownIcon />

     </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 text-left">
          <ul className="py-1">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Research Projects
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Consultancy

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Publications

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Patents 

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Ph.D. Awarded
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              IQAC
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Entrepreneurship
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Policies and Guidelines                            </a>
            </li>
            
            
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Research;
