// src/components/Input.jsx

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // Import the search icon

const Input = () => {
  return (
    <div className="relative flex items-center text-gray-700">
      <MagnifyingGlassIcon className="absolute left-10 h-5 w-5 text-gray-500" />
      <input
        type="text"
        className="pl-16 p-3 border-none bg-white  rounded-full text-sm focus:outline-none "
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
