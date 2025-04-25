import React from 'react';

const Card = ({ title, description, image }) => {  
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-6 m-4 text-center transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-stone-100">
      <div className="mb-4">
        <img 
          src={image}  
          alt={title} 
          className="w-20 h-20 object-cover mx-auto" 
        />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-grey-700">{description}</p>
    </div>
  );
};

export default Card ;
