// src/components/Footer.jsx

import React from 'react';
import dribbbleLogo from '../assets/logo.png'; // Ensure you have the Dribbble logo in your assets folder
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className=" mt-24 px-24 " > {/* Adjusted padding for compact look */}
      <div className="flex items-center justify-between">
        {/* Dribbble Logo and Footer Words */}
        <div className="flex items-center space-x-8">
          {/* Dribbble Logo */}
          <img src={dribbbleLogo} alt="Dribbble Logo" className="h-14 w-auto" /> {/* Adjusted size */}
          
          {/* Footer Words */}
          <div className="flex space-x-14">
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
              For Designers
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
             Hire Talent
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
             Inspiration
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
              Advertising
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
              Blog
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
             About
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
              Careers
            </a>
            <a href="#" className="text-sm font-bold  text-black hover:text-gray-800">
             Support
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-800">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-gray-800">
            <FaFacebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-gray-800">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-gray-800">
            <FaPinterest className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="flex justify-between space-x-10 flex-wrap text-gray-600 text-sm mt-24"> {/* Added margin-top for spacing */}
        <div className='flex space-x-4'>
          <span>© 2024 Dribbble</span>
          <a href="#" className="hover:text-gray-800">Terms</a>
          <a href="#" className="hover:text-gray-800">Privacy</a>
          <a href="#" className="hover:text-gray-800">Cookies</a>
        </div>
        <div className='flex space-x-2 m'>
          <a href="#" className="hover:text-gray-800">Jobs</a>
          <a href="#" className="hover:text-gray-800">Designers</a>
          <a href="#" className="hover:text-gray-800">Freelancers</a>
          <a href="#" className="hover:text-gray-800">Tags</a>
          <a href="#" className="hover:text-gray-800">Places</a>
          <a href="#" className="hover:text-gray-800">Resources</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
