import React from "react";
import AboutContentCard from "./AboutContentCard";

// Import Images (Ensure they are in the `public` folder or assets)
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const contentData = [
  {
    image: img1,
    title: "What is Mindshine?",
    description:
      "Mindshine is a digital mental health platform that helps you train your mind like a muscle and feel better. Our 3-pillar approach will help you with powerful habit-forming exercises, a peer-to-peer support community, and the education necessary to understand the science and principles behind the methods via audio, video, and written articles.",
    reverse: false,
  },
  {
    image: img2,
    title: "Why do we do it?",
    description:
      "There are over 1 billion people in the world with untreated mental health issues. Professional help can be inaccessible, inflexible, expensive, and daunting, and we believe a simple, accessible, and fun solution can measurably improve the lives of all of them.",
    reverse: true, // Image on the right
  },
  {
    image: img3,
    title: "Who do we help?",
    description:
      "We help people suffering from light to moderate mental health problems. The most common issues include Anxiety, Depression, Stress, Poor self-esteem or low confidence, and low motivation.",
    reverse: false,
  },
];

const AboutContent = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-16">
      {contentData.map((content, index) => (
        <AboutContentCard key={index} {...content} />
      ))}
    </section>
  );
};

export default AboutContent;
