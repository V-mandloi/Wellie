import React from "react";

const AboutContentCard = ({ image, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0  ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-3/5 ">
        <h2 className="text-2xl md:text-3xl  font-bold text-hometext">{title}</h2>
        <p className=" text-xl text-content mt-4 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AboutContentCard;
