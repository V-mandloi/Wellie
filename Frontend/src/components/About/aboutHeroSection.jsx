import React from "react";
import HeroImg from "../../../public/About.jpg";
const HeroSection = () => {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 lg:px-24 flex items-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20  space-y-6">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text:underline">ABOUT</span> US
            </h2>

            <p className="text-gray-600 mb-15 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <br />
            <a
              href="#"
              className="bg-pink-50 px-6 py-3 rounded-lg shadow-md m text-sm font-semibold mt-10 transition hover:bg-slate-400 "
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
