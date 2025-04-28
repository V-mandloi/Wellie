import React from 'react';
import Card from './about6';
import CardImg1 from '../../assets/card1.png';
import CardImg2 from '../../assets/card2.png';
import CardImg3 from '../../assets/card3.png';
import CardImg4 from '../../assets/card4.png';

const AllCards = () => {
  const cards = [
    { title: 'Gratitude Journaling', description: 'Reflect on your day', image: CardImg1 },
    { title: 'Journaling', description: 'Capture your thoughts', image: CardImg2 },
    { title: 'Features', description: 'Explore app features', image: CardImg3 },
    { title: 'Motivational Quote', description: 'Stay inspired', image: CardImg4 },
  ];

  return (
    <div className="bg-primary py-0">
      <h2 className="text-3xl md:text-4xl font-bold text-hometext text-center mb-10">
        Discover What Wellie Can Do for You
      </h2>
      
      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-8 px-4 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

    </div>
  );
};

export default AllCards;
