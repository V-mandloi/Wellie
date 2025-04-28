import { FaApple, FaGooglePlay } from "react-icons/fa";
import logo from "../../assets/logo.png";
import started from "../../assets/started.jpeg";
import signup from "../../assets/signup.jpeg";

const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-lg shadow-lg ${className}`} {...props}>
    {children}
  </button>
);

export default function HealioLanding() {
  return (
    <div className="relative bg-primary min-h-screen flex items-center justify-center p-4 overflow-hidden">
     <div
        className="absolute top-0 -left-20 w-[500px] h-[500px] bg-red-100/30 border-[3px] border-green-300/50 opacity-80 animate-float"
        style={{
          clipPath:
            "polygon(25% 15%, 75% 5%, 95% 40%, 85% 80%, 45% 95%, 10% 65%)",
          borderRadius: "50% 40% 60% 45% / 40% 60% 50% 55%",
        }}
      ></div>

     
      <div
        className="absolute top-0 -left-20 w-[500px] h-[500px] bg-red-100/30 border-[3px] border-green-300/50 opacity-80 animate-float"
        style={{
          clipPath:
            "polygon(25% 15%, 75% 5%, 95% 40%, 85% 80%, 45% 95%, 10% 65%)",
          borderRadius: "50% 40% 60% 45% / 40% 60% 50% 55%",
        }}
      ></div>

      <div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-red-200/30 border-[3px] border-green-300/50 opacity-80 animate-float-slow"
        style={{
          clipPath:
            "polygon(20% 10%, 80% 15%, 95% 50%, 75% 85%, 35% 95%, 5% 50%)",
          borderRadius: "45% 55% 35% 65% / 50% 40% 60% 50%",
        }}
      ></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-6xl items-center justify-center text-center relative z-10">
        <div className="flex flex-col items-center sm:items-start">
          <header>
            <div className="flex justify-center sm:justify-center mb-4">
              <img
                src={logo}
                alt="Healio Logo"
                className="w-20 h-20 md:w-40 md:h-40"
              />
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
              <button className="bg-hometext text-white hover:bg-secondary hover:text-black flex items-center px-4 py-2 text-xs rounded-lg">
                <FaApple className="text-lg mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Download on the</span>
                  <strong className="text-sm">App Store</strong>
                </div>
              </button>

              <button className="bg-secondary border border-black-700 text-content flex items-center px-4 py-2 text-xs rounded-lg hover:bg-hometext hover:text-white">
                <FaGooglePlay className="text-lg mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px]">Get it on</span>
                  <strong className="text-sm">Google Play</strong>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center space-y-20 -space-x-10 group">
          {/* First Image */}
          <div className="w-54 sm:w-45 md:w-30 lg:w-60 transition-transform duration-300">
            <img
              src={started}
              alt="Mindfulness"
              className="rounded-2xl shadow-lg w-full border-black border-2"
            />
          </div>

          {/* Second Image - Moves Right on Hover */}
          <div className="w-54 sm:w-45 md:w-30 lg:w-60 transition-transform duration-300 group-hover:translate-x-12">
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
