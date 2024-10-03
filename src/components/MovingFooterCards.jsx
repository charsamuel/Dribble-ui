// src/components/MovingCards.jsx

import React from 'react';
import Card from './Card';
import womantwo from '../assets/womantwo.mp4';
import womanthree from '../assets/womanthree.mp4';
import firstguy from '../assets/firstguy.mp4';
import imageone from '../assets/guyred.jpg';
import imagetwo from '../assets/flowergirl.jpg';
import imagethree from '../assets/guyglasses.jpg';

const MovingFooterCards = () => {
  const cardsData = [
    {
      mediaSrc: womantwo,
      mediaType: 'video',
      title: 'Amazing Video 1',
      description:'Graphic Designer',
      tags: ['Brand', 'Design', 'UI'],
    },
    {
      mediaSrc: womanthree,
      mediaType: 'video',
      title: 'Amazing Video 2',
      tags: ['Mobile', 'Web', 'UI'],
    },
    {
      mediaSrc: firstguy,
      mediaType: 'video',
      title: 'Amazing Video 3',
      tags: ['Graphic', 'Design', 'Illustration'],
    },
    {
      mediaSrc: imageone,
      mediaType: 'image',
      title: 'Beautiful Image 1',
      tags: ['Web', 'Product', 'UI'],
    },
    {
      mediaSrc: imagetwo,
      mediaType: 'image',
      title: 'Beautiful Image 2',
      tags: ['Mobile', 'UI', 'UX'],
    },
    {
      mediaSrc: imagethree,
      mediaType: 'image',
      title: 'Andrea Watts',
      description:'Graphic Designer',
      tags: ['Brand', 'Illustration', 'Web'],
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
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingFooterCards;
