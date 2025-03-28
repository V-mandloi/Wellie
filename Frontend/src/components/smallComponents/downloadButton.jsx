import React from "react";

const StoreButton = ({ icon, label, link }) => {
  return (
    <a
      href={link}
      className="flex items-center gap-3 w-full sm:w-80 px-5 py-3 text-lg font-medium bg-white rounded-full shadow-md hover:shadow-lg transition duration-300"
    >
      {icon}
      {label}
    </a>
  );
};

export default StoreButton;
