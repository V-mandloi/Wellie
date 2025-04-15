import React from "react";
import Hero from "../../assets/hero.png";
const HeroSection = () => {
  return (
    
    <div className=" font-custom bg-primary py-14">
    <div className="flex flex-col md:flex-row items-center mr-10 ml-5 justify-center gap-10 py-5 bg-primary px-4 md:px-12">
    
    <div
        className="absolute top-16 -left-20 w-[500px] h-[500px] py-52 bg-red-100/30 border-[3px] border-green-300/50 opacity-80 animate-float "
        style={{
          clipPath:
            "polygon(25% 15%, 75% 5%, 95% 40%, 85% 80%, 45% 95%, 10% 65%)",
          borderRadius: "50% 40% 60% 45% / 40% 60% 50% 55%",
        }}
      ></div>


    
    <div className="flex flex-col  gap-6 md:w-1/2">
                 <h1 className="text-5xl font-extrabold text-hometext">What is Wellie</h1>
                  <p className="font-poppins text-lg text-gray-700 mt-2">Wellie is a guided journaling app designed to help you reflect, grow, and create a positive mindset with simple yet powerful journaling techniques.
Start your journey towards self-awareness, mindfulness, and personal development today.
</p>
                </div>

                {/* <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `}</style> */}

<>
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes shadowPulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(0.8);
        opacity: 0.3;
      }
    }
  `}</style>

  <div className="w-full sm:w-[45%] py-0 relative flex justify-center items-end">
    {/* Floating Image */}
    <img
      src={Hero}
      alt="Illustration Design"
      className="relative z-10"
      style={{
        animation: "float 3s ease-in-out infinite",
      }}
    />

    {/* Shadow Ellipse */}
    <div
      className="absolute bottom-10 left-40 w-40 h-4 bg-gray-500 rounded-xl opacity-70 blur-sm"
      style={{
        animation: "shadowPulse 3s ease-in-out infinite",
      }}
    ></div>
  </div>
</>


          



      {/* <div className="w-100 sm:w-45 py-10 ">
              <img
                src={Hero}
                alt="Illustration Design"
                className= ""
                style={{
                  animation: "float 3s ease-in-out infinite",
                }} 
                 
              />
            </div>
          */}
                </div>
      </div>
    
  );
};

export default HeroSection;



{/* font-poppins text-lg text-gray-700 mt-2 */}