import React from "react";

const MindshineSection = () => {
  return (
    <section className="bg-primary py-12 px-4 sm:px-6 md:px-12 lg:px-20 lg:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-hometext">
            How Wellie can help you
          </h2>
          <p className="text-lg sm:text-xl text-content mt-4">
            There are exercises to suit all environments (busy bus vs relaxing
            room), and all levels of experience.
          </p>
          <p className="text-lg sm:text-xl text-content mt-2">
            The app leads you through each exercise, which develops and enhances
            the mindset through guided actionable steps, helping you to develop
            positive thought patterns, build confidence, and become happier
            overall.
          </p>
          <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-hometext text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-teal-700 transition duration-300">
            Get the App
          </button>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {[
            { text: "Less Stress", color: "bg-yellow-300" },
            { text: "Think positive", color: "bg-teal-500" },
            { text: "More Motivation", color: "bg-blue-500" },
            { text: "Love yourself", color: "bg-teal-300" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${item.color} rounded-2xl p-6 shadow-lg`}
            >
              <p className="text-white text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindshineSection;
