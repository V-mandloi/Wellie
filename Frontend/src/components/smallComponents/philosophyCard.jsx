import React from "react";

const CheckmarkText = ({ text = "Embrace challenges" }) => {
  return (
    <div className="relative flex items-center space-x-2 p-2">
      {/* Background effect */}
      <div className="absolute left-0 w-10 h-10 bg-pink-100 rounded-full opacity-50"></div>

      {/* Checkmark icon */}
      <div className="relative w-6 h-6 border-2 border-hometext rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-hometext"
        >
          <path d="M5 12l4 4L19 7" />
        </svg>
      </div>

      {/* Dynamic Text */}
      <span
        className="text-hometext text-lg font-medium"
        style={{ fontFamily: "inherit" }}
      >
        {text}
      </span>
    </div>
  );
};

export default CheckmarkText;
