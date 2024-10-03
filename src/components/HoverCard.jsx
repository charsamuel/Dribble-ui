// src/components/HoverCard.jsx

import React from 'react';
import { HeartIcon, EyeIcon, BookmarkIcon } from '@heroicons/react/24/solid'; // Import icons from Heroicons
import profileImageTwo from '../assets/smilingwoman.webp';



const HoverCard = ({ imageSrc, title, profileName = "User Name", likes = 24, views = 100 }) => {
  return (
    <div className="flex flex-col items-center m-5"> {/* Margin around the card */}
      {/* Card Section */}
      <div className="relative w-72 bg-white rounded-lg shadow-lg overflow-hidden group"> {/* Increased card width */}
        {/* Image Section */}
        <div className="w-full h-56 bg-gray-100"> {/* Increased height */}
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Empty Space at Top */}
          <div className="flex-grow"></div>

          {/* Title and Icons on Hover at the Bottom */}
          <div className="flex justify-between items-center mt-auto transition-transform transform group-hover:-translate-y-2 duration-300">
            {/* Title on Hover */}
            <h3 className="text-white text-sm font-semibold">{title}</h3>

            {/* Icons on Hover */}
            <div className="flex space-x-2">
              <BookmarkIcon className="w-6 h-6 text-white cursor-pointer" />
              <HeartIcon className="w-6 h-6 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Profile and Icons Section */}
      <div className="w-72 mt-1 p-2 flex justify-between items-center rounded-lg"> {/* Matches card width */}
        {/* Profile Picture and Name */}
        <div className="flex items-center space-x-2">
          <img
            src={profileImageTwo}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm font-medium text-gray-800">{profileName}</p>
        </div>

        {/* Like and View Icons with Counts */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <HeartIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-800">{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <EyeIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-800">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
