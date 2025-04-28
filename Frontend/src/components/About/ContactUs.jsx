import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactCard = () => {
  return (
  
        
    
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
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
       {/* <div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-red-200/30 border-[3px] border-green-300/50 opacity-80 animate-float-slow"
        style={{
          clipPath:
            "polygon(20% 10%, 80% 15%, 95% 50%, 75% 85%, 35% 95%, 5% 50%)",
          borderRadius: "45% 55% 35% 65% / 50% 40% 60% 50%",
        }}
      ></div> */}
     

      {/* Main black contact card */}
      <div className="relative bg-secondary text-hometext rounded-2xl p-10 z-10 w-[90%] max-w-md shadow-2xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-hometext text-2xl mt-1" />
            <p>156, Dravid Nagar
                2nd Floor, Above SBI Bank, Usha Nagar Branch
                Ranjeet Hanuman Temple Road
                Indore (M.P.)</p>
          </div>
          <div className="border-t border-dashed border-hometext"></div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-hometext text-2xl mt-1" />
            <p>+91 626 362 8392</p>
          </div>
          <div className="border-t border-dashed border-hometext"></div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-hometext text-2xl mt-1" />
            <p> <a href="hello@averybit.com"> hello@averybit.com</a></p>
          </div>
          <div className="border-t border-dashed border-hometext"></div>

          {/* Website */}
          <div className="flex items-start space-x-4">
            <FaGlobe className="text-hometext text-2xl mt-1" />
            <p>www.reallygreatsite.com</p>
          </div>
        </div>

        {/* Chat bubbles */}
        <div className="absolute -bottom-6 -right-6 flex flex-col space-y-[-20px]">

            {/* Sender's Bubble (Right side) */}
            <div className="relative bg-hometext rounded-full w-20 h-20 flex items-center justify-center shadow-lg z-10 translate-y-4 hover:scale-95 hover:translate-y-1 hover:shadow-2xl transition-all duration-200">
            {/* Dots */}
            <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            {/* Tail (sharp corner) */}
            <div className="absolute bottom-0 right-[-8px] w-4 h-4 bg-hometext rotate-45 translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Receiver's Bubble (Left side) */}
            <div className="relative bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-0 -translate-x-8 hover:scale-95 hover:translate-y-1 hover:shadow-2xl transition-all duration-200">
            {/* Dots */}
            <div className="flex space-x-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            {/* Tail (sharp corner) */}
            <div className="absolute bottom-0 left-[-8px] w-3 h-3 bg-gray-200 rotate-45 -translate-x-1/2 translate-y-1/2"></div>
            </div>

            </div>


      </div>
    </div>
    
  );
};

export default ContactCard;
