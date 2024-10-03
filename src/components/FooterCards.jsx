// src/components/Card.jsx

import React from 'react';

const Card = ({ mediaSrc, mediaType, title, tags }) => {
  return (
    <div className="card-container w-32 flex-shrink-0 mr-1 bg-white rounded-md overflow-hidden relative mt-12"> {/* Significantly reduced width and margin */}
      {/* Tags Section - Positioned on top of the media */}
      <div className="absolute bottom-1 left-1 flex flex-wrap gap-0.5 z-10"> {/* Smaller gap between tags */}
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-white border border-white text-[10px] font-medium px-1 py-0.5 rounded-full" // Smaller text and padding
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Media Section */}
      <div className="media-wrapper w-full h-20 relative rounded-md"> {/* Further reduced height */}
        {mediaType === 'video' ? (
          <video
            className="w-full h-full object-cover"
            src={mediaSrc}
            controls
            loop
            muted
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src={mediaSrc}
            alt={title}
          />
        )}
      </div>

      {/* Title Section */}
      <div className="p-1 bg-white"> {/* Minimal padding */}
        <h2 className="text-[10px] font-bold text-gray-800">{title}</h2> {/* Smaller text */}
      </div>
    </div>
  );
};

export default Card;
