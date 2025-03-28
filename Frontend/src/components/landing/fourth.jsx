import React from "react";

const MindshineSection = () => {
  return (
    <section className="bg-primary py-12 px-4 sm:px-6 md:px-12 lg:px-20 lg:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-evenly items-center gap-10">
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
          <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-hometext text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-secondary hover:text-hometext transition duration-300">
            Get the App
          </button>
        </div>

        {/* Right side content replaced with an image */}
        <div className="">
          <img
            src="https://cdn.prod.website-files.com/616d7653e56075eae1bf8e70/62a8980981ca72827c2c52d6_cp_en.svg"
            alt="Mindshine App Illustration"
            className="w-96 h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default MindshineSection;
