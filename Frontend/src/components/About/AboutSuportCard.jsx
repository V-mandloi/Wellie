import React from "react";

const SupportCard = ({ image, title, description, note, buttonText, buttonLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[350px] flex flex-col justify-between border">
      {/* Image */}
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="w-12 h-12" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Divider */}
      <hr className="my-3 border-gray-300" />

      {/* Supported Topics */}
      <p className="text-sm text-gray-600">
        <span className="font-semibold">What's supported?</span> <br />
        <span className="font-bold text-gray-800">Nintendo Switch Family & related topics</span>
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>

      {/* Note (if available) */}
      {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}

      {/* Button */}
      <a
        href={buttonLink}
        className="block bg-stone-300 mt-4 py-2 px-4 rounded-md font-semibold text-center hover:bg-orange-100 transition"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default SupportCard;
