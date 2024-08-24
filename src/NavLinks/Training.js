import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Training = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="relative inline-block text-center">
     <button onClick={toggleDropdown} className='text-white bg-[#424646] nav'> 
     Training &amp; Placement
     <KeyboardArrowDownIcon />

     </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 text-left">
          <ul className="py-1">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Overview                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Placement Brochure

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Placement Policy

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Recruiters 

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              GATE Result                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Training Activities
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Contact Us
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Resume Template 2022-23                         </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              T&P Website                       </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Training and Placement                    </a>
            </li>
            
            
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Training;
