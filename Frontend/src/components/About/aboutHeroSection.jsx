import React from "react";
import Hero from "../../assets/hero.png";
const HeroSection = () => {
  return (
    
    <div className=" font-custom bg-primary">
    <div className="flex flex-col md:flex-row items-center mr-10 ml-5 justify-center gap-10 py-5 bg-primary px-4 md:px-12">
    
    <div
        className="absolute top-0 -left-20 w-[500px] h-[500px] py-52 bg-red-100/30 border-[3px] border-green-300/50 opacity-80 animate-float "
        style={{
          clipPath:
            "polygon(25% 15%, 75% 5%, 95% 40%, 85% 80%, 45% 95%, 10% 65%)",
          borderRadius: "50% 40% 60% 45% / 40% 60% 50% 55%",
        }}
      ></div>


    
    <div className="flex flex-col  gap-6 md:w-1/2">
                 <h1 className="text-5xl font-extrabold text-hometext">About Us</h1>
                  <p className="font-poppins text-lg text-gray-700 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos vel blanditiis dicta cumque maiores recusandae tempore dolore, fugit corporis!</p>
                </div>

                {/* <div className="w-full sm:w-[45%] py-10 flex justify-center"> */}
 
                {/* <div className="w-full sm:w-[45%] py-10 flex justify-center relative"> */}

        {/* shadow with float image */}
       
        <div className="w-full sm:w-[45%] py-10 flex justify-center relative">
  {/* Shadow behind the image */}
  <div
    className="absolute w-[150px] h-[150px] bg-black/20 rounded-full blur-[30px] z-0"
    style={{
      animation: "float 3s ease-in-out infinite",
    }}
  ></div>

  {/* Floating Illustration */}
  <img
    src={Hero}
    alt="Illustration Design"
    className="z-10"
    style={{
      animation: "float 3s ease-in-out infinite",
    }}
  />
</div>


      {/* <div className="w-100 sm:w-45 py-10 ">
              <img
                src={Hero}
                alt="Illustration Design"
                className= ""
                style={{
                  animation: "float 3s ease-in-out infinite",
                }} 
                 
              />
            </div> */}
         
                </div>
      </div>
    
  );
};

export default HeroSection;



{/* font-poppins text-lg text-gray-700 mt-2 */}