import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 font-custom rounded-lg shadow-md max-w-md text-center">
      {/* Image */}
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />

      {/* Title */}
      <h3 className="text-2xl font-bold text-hometext">{title}</h3>

      {/* Description */}
      <p className="text-content text-xl mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
