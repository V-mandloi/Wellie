import { FaListUl, FaMeh, FaBullseye } from "react-icons/fa";
import TruthPercentage from "../smallComponents/truthPercentage";
import TextBlock from "../smallComponents/heading&subtitle";

const cardData = [
  {
    icon: <FaListUl />,
    percentage: "84%",
    highlightText: "have not listed",
    description: "their goals somewhere",
  },
  {
    icon: <FaMeh />,
    percentage: "73%",
    highlightText: "are not satisfied",
    description: "with the time spent on realizing their goals",
  },
  {
    icon: <FaBullseye />,
    percentage: "56%",
    highlightText: "lack of focus",
    description: "the main reason for not succeeding",
  },
];

const CardContainer = ({ heading }) => {
  return (
    <div className="px-4 py-0 text-center bg-primary flex flex-col gap-8">
      <TextBlock
        title="The hard Truth"
        subtitle="Most of us do very little to realize our dreams"
      />

      <div className="flex flex-wrap justify-center gap-10 ">
        {cardData.map((card, index) => (
          <TruthPercentage
            key={index}
            icon={card.icon}
            percentage={card.percentage}
            highlightText={card.highlightText}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
