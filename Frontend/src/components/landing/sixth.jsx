import { FaApple, FaGooglePlay, FaDesktop } from "react-icons/fa";

import TextBlock from "../smallComponents/heading&subtitle";
import QR from "../../assets/QR.png";

const StoreButton = ({ icon, label, link }) => {
  return (
    <a
      href={link}
      className="flex items-center gap-3 w-full sm:w-80 px-5 py-3 text-lg font-medium bg-white rounded-full shadow-md hover:shadow-lg transition duration-300"
    >
      {icon}
      {label}
    </a>
  );
};

const AppDownloadSection = () => {
  return (
    <div className="flex flex-col items-center px-10 py-16 w-full bg-primary">
      <div className="max-w-2xl text-center">
        <TextBlock
          title="Get clarity and peace of mind, wherever you are."
          subtitle="Download Wellie.app to start your journey. (It's free!)"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full max-w-6xl mt-8">
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <StoreButton icon={<FaApple />} label="Apple App Store" link="#" />
          <StoreButton
            icon={<FaGooglePlay />}
            label="Google Play Store"
            link="#"
          />
        </div>

        <div className="flex flex-col items-center bg-white py-2 rounded-2xl shadow-md">
          <img src={QR} alt="QR Code" className="w-24 h-24" />
          <p className="text-sm text-gray-600 mt-2 text-center px-5">
            QR Code opens app on your phone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
