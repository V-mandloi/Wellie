import React from "react";
import SupportCard from "../About/AboutSuportCard";

import chatImg from "../../assets/chatImg.png"; 
import textImg from "../../assets/textImg.png"; 

const supportOptions = [
  {
    image: chatImg,
    title: "Chat",
    description: "Chat with a specialist from Nintendo's support team for quick answers.",
    buttonText: "Start Chat",
    buttonLink: "#",
  },
  {
    image: textImg,
    title: "Text Message",
    description: "Send a text from your mobile device.",
    note: "Note: Text-messaging rates apply.",
    buttonText: "Text (425) 970-9648",
    buttonLink: "#",
  },
];

const ContactSupport = () => {
  return (
    <div className="font-custom bg-primary flex flex-col items-center justify-center py-16 px-4">
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 space-y-16">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-hometext text-center mb-10">
          Contact Support
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10">
          {supportOptions.map((option, index) => (
            <div className="flex-1 flex">
              <SupportCard key={index} {...option} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
