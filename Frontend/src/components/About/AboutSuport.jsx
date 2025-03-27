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
    <section className="bg-[#F8F8F8] py-16 px-6 md:px-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
        Contact Support
      </h2>

      {/* Support Cards Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        {supportOptions.map((option, index) => (
          <SupportCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

export default ContactSupport;
