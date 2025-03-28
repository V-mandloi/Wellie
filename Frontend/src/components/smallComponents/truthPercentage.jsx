import { FaListUl, FaMeh, FaBullseye } from "react-icons/fa";

const Card = ({ icon, percentage, highlightText, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 w-60 border border-gray-200 rounded-2xl shadow-md gap-5">
      <div className="text-hometext text-8xl">{icon}</div>
      <p className="text-3xl font-bold text-red-500 mt-2">{percentage}</p>
      <p className="text-md text-gray-600">
        <span className="font-bold text-red-500">{highlightText}</span>{" "}
        {description}
      </p>
    </div>
  );
};

export default Card;
