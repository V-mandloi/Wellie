import React from "react";
import { motion } from "framer-motion";

const AboutContentCard = ({ image, title, description, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex-shrink-0"
      >
        <img
          src={image}
          alt={title}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.4 }}
        className="md:w-3/5"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-hometext">{title}</h2>
        <p className=" text-content mt-4 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutContentCard;
