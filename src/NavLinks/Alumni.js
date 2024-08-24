import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Alumni = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="relative inline-block text-center">
     <button onClick={toggleDropdown} className='text-white bg-[#424646] nav'> 
     Alumni
     <KeyboardArrowDownIcon />

     </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 text-left">
          <ul className="py-1">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Malaviya Alumni Association                          </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Alumni Chapters              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Alumni Meet              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Alumni Portal              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Alumni Registration              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Endowment            </a>
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Alumni;
