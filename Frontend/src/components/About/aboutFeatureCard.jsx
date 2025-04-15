import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-sm h-[350px] flex flex-col justify-between 
      transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]">
      {/* Image Wrapper with Color Overlay */}
      <div className="relative w-full h-40 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-[#EDD4B9] mix-blend-multiply opacity-60 rounded-lg"></div>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
