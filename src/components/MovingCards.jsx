// src/components/MovingCards.jsx

import React from 'react';
import Card from './Card';
import womantwo from '../assets/womantwo.mp4';
import womanthree from '../assets/womanthree.mp4';
import firstguy from '../assets/firstguy.mp4';
import imageone from '../assets/guyred.jpg';
import imagetwo from '../assets/flowergirl.jpg';
import imagethree from '../assets/guyglasses.jpg';
import imagefour from "../assets/girlglasses.jpg"

const MovingCards = () => {
  const cardsData = [
    {
      mediaSrc: imagefour,
      mediaType: 'image',
      title: 'Amazing Video 1',
      description: 'Graphic Designer',
      tags: ['Brand', 'Design', 'UI'],
    },
    {
      mediaSrc: womantwo,
      mediaType: 'video',
      title: 'Amazing Video 1',
      description: 'Graphic Designer',
      tags: ['Brand', 'Design', 'UI'],
    },
    {
      mediaSrc: imageone,
      mediaType: 'image',
      title: 'Beautiful Image 1',
      description: 'Web Developer',
      tags: ['Web', 'Product', 'UI'],
    },
    {
      mediaSrc: womanthree,
      mediaType: 'video',
      title: 'Amazing Video 2',
      description: 'UI/UX Designer',
      tags: ['Mobile', 'Web', 'UI'],
    },
    {
      mediaSrc: imagethree,
      mediaType: 'image',
      title: 'Andrea Watts',
      description: 'Graphic Designer',
      tags: ['Brand', 'Illustration', 'Web'],
    },
    {
      mediaSrc: firstguy,
      mediaType: 'video',
      title: 'Amazing Video 3',
      description: 'Illustrator',
      tags: ['Graphic', 'Design', 'Illustration'],
    },
 
    {
      mediaSrc: imagetwo,
      mediaType: 'image',
      title: 'Beautiful Image 2',
      description: 'UX Designer',
      tags: ['Mobile', 'UI', 'UX'],
    },
  
  ];

  return (
    <div className="moving-cards-wrapper overflow-hidden">
      <div className="moving-cards flex animate-scroll">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            mediaSrc={card.mediaSrc}
            mediaType={card.mediaType}
            title={card.title}
            description={card.description} // Pass description prop
            tags={card.tags}
          />
        ))}
        {/* Repeat the cards to create a continuous scrolling effect */}
        {cardsData.map((card, index) => (
          <Card
            key={index + cardsData.length}
            mediaSrc={card.mediaSrc}
            mediaType={card.mediaType}
            title={card.title}
            description={card.description} // Pass description prop
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingCards;
