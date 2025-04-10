import React from "react";

const SupportCard = ({ image, title, description, note, buttonText, buttonLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[350px] h-full flex flex-col justify-between border">
      {/* Header Section */}
      <div>
        <div className="flex items-center gap-4">
          <img src={image} alt={title} className="w-12 h-12" />
          <h3 className="text-xl font-semibold text-hometext">{title}</h3>
        </div>

        <hr className="my-3 border-gray-300" />

        {/* Support Topics */}
        <p className="text-sm text-gray-content leading-relaxed">
          <span className="font-semibold">What's supported?</span><br />
          <span className="font-bold text-gray-800">Nintendo Switch Family & related topics</span>
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-2">{description}</p>

        {/* Optional Note */}
        {note && <p className="text-sm text-gray-500 mt-2">{note}</p>}
      </div>

      {/* Button */}
      <a
        href={buttonLink}
        className="block bg-hometext text-white hover:bg-secondary hover:text-black text-base mt-6 py-2 px-4 rounded-md font-semibold text-center transition"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default SupportCard;
