import React from "react";
import SupportCard from "./AboutSuportCard";

import chatImg from "../../assets/chatImg.png"; 
import textImg from "../../assets/textImg.png"; 

const supportOptions = [
  {
    image: chatImg,
    title: "Chat",
    description: "Chat with a specialist from Nintendo's support team for quick answers.",
    buttonText: "Start Chat",
    buttonLink: "#", // Add actual link
  },
  {
    image: textImg,
    title: "Text Message",
    description: "Send a text from your mobile device.",
    note: "Note: Text-messaging rates apply.",
    buttonText: "Text (425) 970-9648",
    buttonLink: "#", // Add actual link
  },
];

const ContactSupport = () => {
  return (
    <div className="font-custom bg-primary flex flex-col items-center justify-center  px-4">
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-16">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-hometext text-center mb-10">
          Contact Support
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10">
          {supportOptions.map((option, index) => (
            <div key={index} className="flex-1 flex">
              <SupportCard {...option} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
