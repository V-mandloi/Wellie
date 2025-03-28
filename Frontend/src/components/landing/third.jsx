import React from "react";
import InfoCard from "../smallComponents/benefitCard";
import { BeakerIcon } from "@heroicons/react/24/outline";
import { ScissorsIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
import TextBlock from "../smallComponents/heading&subtitle";

const BenefitsSection = () => {
  return (
    <div className="bg-primary py-16 px-6 text-center">
      <TextBlock
        title="The benefits of Wellie"
        subtitle="Over 350 audio and video-guided sessions that break down complex scientific principles into 
        simple, easy, and fun practices with the Mindshine coach at the center, recommending your 
        next action and helping to keep you accountable."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <InfoCard
          icon={<BeakerIcon className="w-10 h-10 text-white" />}
          title="Science based"
          description="We have adapted techniques from psychology and neuroscience into short, audio-guided sessions, We have adapted techniques from psychology and neuroscience."
        />
        <InfoCard
          icon={<ScissorsIcon className="w-10 h-10 text-white" />}
          title="Tailored to you"
          description="Our sessions are based around your goals. You choose the destination, and we recommend the path, We have adapted techniques from psychology and neuroscience."
        />
        <InfoCard
          icon={<PuzzlePieceIcon className="w-10 h-10 text-white" />}
          title="Actionable Steps"
          description="Our coaching plans are simple, fun, and come in bite-sized daily chunks that fit your schedule, We have adapted techniques from psychology and neuroscience."
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
