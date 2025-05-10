import { FaApple, FaGooglePlay, FaDesktop } from "react-icons/fa";

import TextBlock from "../smallComponents/heading&subtitle";
import QR from "../../assets/QR.png";

const StoreButton = ({ icon, label, link, isBlack }) => {
  return (
    <a
      href={link}
      className={`flex items-center justify-center gap-3 w-full sm:w-80 px-5 py-3 text-lg font-medium rounded-full shadow-md hover:shadow-lg transition duration-300 ${
        isBlack
          ? "bg-hometext text-white hover:bg-secondary hover:text-black"
          : "bg-secondary text-black hover:bg-hometext hover:text-white"
      }`}
    >
      {icon}
      {label}
    </a>
  );
};

const AppDownloadSection = () => {
  return (
    <div className="flex flex-col items-center px-6 sm:px-10 py-12 sm:py-16 w-full bg-primary">
      <div className="max-w-2xl text-center px-4">
        <TextBlock
          title="Get clarity and peace of mind, wherever you are."
          subtitle="Download Wellie.app to start your journey. (It's free!)"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly w-full max-w-6xl mt-6 sm:mt-8 gap-6 sm:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto text-hometext">
          <StoreButton
            icon={<FaApple />}
            label="Apple App Store"
            link="#"
            isBlack={true}
          />
          <StoreButton
            icon={<FaGooglePlay />}
            label="Google Play Store"
            link="#"
            isBlack={false}
          />
        </div>

        <div className="flex flex-col items-center bg-white py-3 sm:py-4 px-4 sm:px-6 rounded-2xl shadow-md w-full sm:w-auto">
          <img src={QR} alt="QR Code" className="w-20 sm:w-24 h-20 sm:h-24" />
          <p className="text-xs sm:text-sm text-placeholder mt-2 text-center px-4 sm:px-5">
            QR Code opens app on your phone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
