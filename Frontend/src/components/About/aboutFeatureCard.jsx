import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
      {/* Image */}
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
