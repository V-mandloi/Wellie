const AboutButton = ({ label, link, isBlack }) => {
    return (
      <a
        href={link}
        className={`flex items-center justify-center gap-3  sm:w-80 px-5 py-3 text-lg font-medium rounded-md shadow-md hover:shadow-lg transition duration-300 ${
          isBlack
            ? "bg-hometext text-white hover:bg-secondary hover:text-black"
            : "bg-secondary text-black hover:bg-hometext hover:text-white"
        }`}
      >
        {label}
      </a>
    );
  };
  
  export default AboutButton;
  