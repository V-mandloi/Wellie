// about6.js (or Card.js)
import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-hometext rounded-lg shadow-lg overflow-hidden w-72 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      
      {/* Image on Top */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-50 object-cover" 
      />

      {/* Content below the Image */}
      <div className="p-6 text-center transition-colors duration-300 hover:bg-secondary group">
        <h2 className="text-xl font-bold mb-2 text-white group-hover:text-black">{title}</h2>
        <p className="text-white group-hover:text-black">{description}</p>
      </div>

    </div>
  );
};

export default Card;
