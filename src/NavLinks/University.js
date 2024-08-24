import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const University = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="relative inline-block text-center">
     <button onClick={toggleDropdown}  className='text-white bg-[#424646] nav'>The University
     <KeyboardArrowDownIcon />

     </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-64 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 text-left">
          <ul className="py-1">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              About Us
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Chancellor

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Vice-Chancellor

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Campus Facilities

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Administration

              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Governance
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Strategic Plan
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Acts &amp; Statute
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Court Cases
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              University Logo
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              University Audit Certificate & Report
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Photo Gallery
                            </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6931d] hover:text-white">
              Video Gallery
                            </a>
            </li>

           
          </ul>
        </div>
      )}
    </div>
  );
};

export default University;
