import { FaApple, FaGooglePlay } from "react-icons/fa";
import loginimage1 from "../../assets/loginimage1.png";
import loginimage2 from "../../assets/loginimage2.png";

const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-lg shadow-lg ${className}`} {...props}>
    {children}
  </button>
);

export default function HealioLanding() {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
      {/* Main Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-6xl items-center justify-center text-center">
        {/* Left Side - Text & Buttons */}
        <div className="flex flex-col items-center sm:items-start">
          {/* Header Section */}
          <header>
            <div className="flex justify-center sm:justify-center mb-4">
              <img src="/logo.svg" alt="Healio Logo" className="w-12 h-12" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">
              Healio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-700 mt-2">
              Self-treatments for mindfulness, mental health, and wellbeing
            </p>
            <p className="mt-4 text-green-800 text-md sm:text-lg">
              Healing starts here
            </p>
          </header>

          {/* App Store Buttons */}
          <div className="flex justify-center mt-6 w-full">
            <div className="flex flex-row space-x-3">
              <button className="bg-green-700 text-white flex items-center px-4 py-2 text-xs rounded-lg">
                <FaApple className="text-lg mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Download on the</span>
                  <strong className="text-sm">App Store</strong>
                </div>
              </button>

              <button className="border border-green-700 text-green-700 flex items-center px-4 py-2 text-xs rounded-lg">
                <FaGooglePlay className="text-lg mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Get it on</span>
                  <strong className="text-sm">Google Play</strong>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex flex-row items-center space-y-12 space-x-7">
          <div className="w-54 sm:w-45 md:w-30 lg:w-60">
            <img
              src={loginimage1}
              alt="Mindfulness"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="w-54 sm:w-45 md:w-30 lg:w-60">
            <img
              src={loginimage1}
              alt="Meditation"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
