import React from "react";
import CheckmarkText from "../smallComponents/philosophyCard";
import loginimage1 from "../../assets/loginimage1.png";
import loginimage2 from "../../assets/loginimage2.png";
import TextBlock from "../smallComponents/heading&subtitle";

const PhilosophySection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary py-16 px-4">
      <TextBlock
        title="The Wellie Philosophy"
        subtitle="Life is noisy (and that's the way it’s supposed to be!) Nurture your inner quiet with Healio."
      />

      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full">
        <div className="space-y-10 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
          <CheckmarkText text="Find peace" />
          <CheckmarkText text="Live with uncertainty" />
          <CheckmarkText text="Reduce stress" />
        </div>
        <div className="flex justify-center items-center relative">
          <div className="w-44 sm:w-40 md:w-36 lg:w-52 absolute -left-24 sm:-left-28 md:-left-32 lg:-left-36">
            <img
              src={loginimage1}
              alt="Mindfulness"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="w-48 sm:w-44 md:w-40 lg:w-56 relative z-10">
            <img
              src={loginimage2}
              alt="Meditation"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="w-44 sm:w-40 md:w-36 lg:w-52 absolute -right-24 sm:-right-28 md:-right-32 lg:-right-36">
            <img
              src={loginimage1}
              alt="Relaxation"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="space-y-10 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
          <CheckmarkText text="Embrace challenges" />
          <CheckmarkText text="Be mindful" />
          <CheckmarkText text="Manage panic attacks" />
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
