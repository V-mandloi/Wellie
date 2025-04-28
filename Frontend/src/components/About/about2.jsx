const InfoCard = ({ title, description }) => {
  return (
    <div
      className="
        p-8 rounded-xl shadow-md 
        bg-hometext text-white 
        hover:bg-secondary hover:text-black 
        transition-all duration-300 ease-in-out 
        cursor-pointer transform hover:scale-105 active:scale-95
      "
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;
