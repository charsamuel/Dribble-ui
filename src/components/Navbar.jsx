// src/components/Navbar.jsx

import React, { useState } from 'react';
import Input from './Input';
import logo from '../assets/logo.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Import the dropdown arrow icon

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 m-5">
      {/* Left side of the navbar with navigation links */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* Dropdown for Find Designers */}
        <div 
          className="relative text-gray-900 cursor-pointer text-sm font-bold flex items-center"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span>Find Designers</span>
          <ChevronDownIcon className="ml-1 h-3 w-3 text-black" />
          
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-4 px-6">
                <li className="px-2 text-sm text-black hover:bg-gray-100 cursor-pointer">Designer Search</li>
                <li className="px-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">Quickly find your next designer</li>
                &nbsp;

                <li className="px-2 text-sm text-black font-bold hover:bg-gray-100 cursor-pointer">Post a job</li>
                <li className="px-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">The #1 job board for design talent</li>
              </ul>
            </div>
          )}
        </div>
        <div className="text-black cursor-pointer text-sm font-bold">Inspirations</div>
        <div className="text-black cursor-pointer text-sm font-bold">Jobs</div>
        <div className="text-black cursor-pointer text-sm font-bold">GoPro</div>
      </div>

      {/* Center logo */}
      <div className="flex  lg:justify-center flex-grow">
        <img src={logo} className="h-14 w-26" alt="Logo" />
      </div>

      {/* Right side of the navbar with input and buttons */}
      <div className="hidden lg:flex items-center space-x-6">
        <Input /> {/* Use the Input component */}
        <h2 className="text-black text-sm font-bold cursor-pointer">Log In</h2>
        <button className="bg-black text-white py-3 px-5 rounded-full hover:bg-gray-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
