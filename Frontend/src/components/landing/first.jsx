import { FaApple, FaGooglePlay } from "react-icons/fa";
import loginimage1 from "../../assets/loginimage1.png";
import loginimage2 from "../../assets/loginimage2.png";
import logo from "../../assets/logo.png";
import started from "../../assets/started.jpeg";
import home from "../../assets/home.jpeg";
import search from "../../assets/search.jpeg";
import profile from "../../assets/profile.jpeg";
import signup from "../../assets/signup.jpeg";

const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-lg shadow-lg ${className}`} {...props}>
    {children}
  </button>
);

export default function HealioLanding() {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-6xl items-center justify-center text-center">
        <div className="flex flex-col items-center sm:items-start">
          <header>
            <div className="flex justify-center sm:justify-center mb-4">
              <img src={logo} alt="Healio Logo" className="w-40 h-40" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-hometext">
              Wellie
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-content mt-2">
              Self-treatments for mindfulness, mental health, and wellbeing
            </p>
            <p className="mt-4 text-content text-md sm:text-lg">
              Healing starts here
            </p>
          </header>

          <div className="flex justify-center mt-6 w-full">
            <div className="flex flex-row space-x-3">
              <button className="bg-hometext text-white flex items-center px-4 py-2 text-xs rounded-lg">
                <FaApple className="text-lg mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Download on the</span>
                  <strong className="text-sm">App Store</strong>
                </div>
              </button>

              <button className="border border-black-700 text-content flex items-center px-4 py-2 text-xs rounded-lg">
                <FaGooglePlay className="text-lg mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Get it on</span>
                  <strong className="text-sm">Google Play</strong>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center space-y-12 space-x-7">
          <div className="w-54 sm:w-45 md:w-30 lg:w-60">
            <img
              src={started}
              alt="Mindfulness"
              className="rounded-2xl shadow-lg w-full border-black border-2"
            />
          </div>
          <div className="w-54 sm:w-45 md:w-30 lg:w-60">
            <img
              src={signup}
              alt="Meditation"
              className="rounded-2xl shadow-lg w-full border-black border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
