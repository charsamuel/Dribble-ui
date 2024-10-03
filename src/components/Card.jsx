// src/components/Card.jsx

import React from 'react';

const Card = ({ mediaSrc, mediaType, title, tags }) => {
  return (
    <div className="card-container w-64 flex-shrink-0 mr-5 bg-white rounded-xl  overflow-hidden relative mt-7">
      {/* Tags Section - Positioned on top of the media */}
      <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 z-10">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" text-white  border border-white  text-sm font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Media Section */}
      <div className="media-wrapper w-120 h-64 relative rounded-xl">
        {mediaType === 'video' ? (
          <video
            className="w-full h-96 object-cover"
            src={mediaSrc}
            controls
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            className="w-full h-96 object-cover"
            src={mediaSrc}
            alt={title}
          />
        )}
      </div>

      {/* Title Section */}
      <div className="p-4 bg-white">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        
       
      </div>
    </div>
  );
};

export default Card;
