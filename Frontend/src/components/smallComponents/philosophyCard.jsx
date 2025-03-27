import React from "react";

const CheckmarkText = ({ text = "Embrace challenges" }) => {
  return (
    <div className="relative flex items-center space-x-2 p-2">
      {/* Background effect */}
      <div className="absolute left-0 w-10 h-10 bg-green-100 rounded-full opacity-50"></div>

      {/* Checkmark icon */}
      <div className="relative w-6 h-6 border-2 border-green-700 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-green-700"
        >
          <path d="M5 12l4 4L19 7" />
        </svg>
      </div>

      {/* Dynamic Text */}
      <span
        className="text-green-900 text-lg font-medium"
        style={{ fontFamily: "inherit" }}
      >
        {text}
      </span>
    </div>
  );
};

export default CheckmarkText;
