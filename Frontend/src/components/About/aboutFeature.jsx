import React from "react";
import FeatureCard from "./aboutFeatureCard";


import featureImg1 from "../../assets/featureImg1.png";
import featureImg2 from "../../assets/featureImg2.png";

const features = [
  {
    image: featureImg1,
    title: "Research",
    description:
      "We research the best evidence-based practices and adapt techniques from the world of psychology and neuroscience to fit into short, actionable steps that help you reach your goals.",
  },
  {
    image: featureImg2,
    title: "Testing",
    description:
      "Our team holds weekly meetings where we test all of our exercises and courses, give feedback, and make improvements to ensure that they are the best that they can be.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-#F8F8F8">
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        The Science behind Mindshine
      </h2>

      {/* Feature Cards Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default FeaturesSection;
