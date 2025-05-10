// App.js
import React from 'react';
import Card from './about6.jsx';

const AllCards = () => {
  const cards = [
    { title: 'Gratitude Journaling', description: 'Reflect on your day', icon: '📝' },
    { title: 'Journaling', description: 'Capture your thoughts', icon: '🖊️' },
    { title: 'Features', description: 'Explore app features', icon: '✨' },
    { title: 'Motivational Quote', description: 'Stay inspired', icon: '🌟' },
  ];

  return (
   <div className='justify-center items-center bg-primary'>
   <h2 className="text-2xl md:text-3xl font-bold text-hometext text-center mb-10">
   Discover What Wellie Can Do for You
        </h2>
   <div className="flex flex-wrap justify-center">     
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          icon={card.icon} 
        />
      ))}
    </div>
    </div>
  );
};

export default AllCards;