// src/components/HoverCards.jsx

import React from 'react';
import HoverCard from './HoverCard'; // Import the HoverCard component
import imageone from '../assets/mobilemockup.png';
import imagetwo from '../assets/jewellery.png';
import imagethree from '../assets/cherrycha.png';
import imagefour from '../assets/oliviareview.png';
import imagefive from '../assets/dashboard.jpg';
import imagesix from '../assets/bird.png';
import imageseven from '../assets/barchart.png';
import imageeight from '../assets/barchartusers.png';
import imagenine from '../assets/flowergirl.jpg';
import imageten from '../assets/oliviareview.png';
import imageeleven from '../assets/insideout.png';
import imagetwelve from '../assets/accessibility.png';
import imagethirteen from '../assets/globals.png';
import imagefourteen from '../assets/realestate.png';

const HoverCards = () => {
  const cardsData = [
    { imageSrc: imagetwelve, title: 'Accessibilty' },
    { imageSrc: imagethirteen, title: 'Awareness Day' },
    { imageSrc: imageone, title: 'Phone' },
    { imageSrc: imagetwo, title: 'Radiant Elegance' },
    { imageSrc: imagethree, title: 'Cherry & Cha questions' },
    { imageSrc: imagefour, title: 'Client Review' },
    { imageSrc: imagefive, title: 'ManagementSystem' },
    { imageSrc: imagesix, title: 'BirdLogo' },
    { imageSrc: imageeleven, title: 'InsideOut you are good' },
    { imageSrc: imageeight, title: 'Barcharttracking' },
    { imageSrc: imageseven, title: 'Monthly sales data' },
    { imageSrc: imagenine, title: 'Youwillalwaysbemyflowergirl' },
    { imageSrc: imagefourteen, title: 'realestateandcappuchino' },
   
  
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {cardsData.map((card, index) => (
        <HoverCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          profileName={`Cassie`}
          likes={Math.floor(Math.random() * 100)} // Random likes count for demonstration
          views={Math.floor(Math.random() * 1000)} // Random views count for demonstration
        />
      ))}
    </div>
  );
};

export default HoverCards;
