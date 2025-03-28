
import React from "react";
import Social1 from "../../assets/Social1.png"
import Social2 from "../../assets/Social2.png"
import Social3 from "../../assets/Social3.png"
import Social4 from "../../assets/Social4.png"


const Footer = () => {
    return (
      <footer className="bg-[#EDEDED] py-10 border-t md:justify-center md:items-center text-center ">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 md:justify-center md:items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
            
            {/* Left Section */}
            <div>
              <p className="text-sm">
                Appland is completely creative, lightweight, clean app landing page.
              </p>
              {/* <p className="text-sm mt-2">
                Made with <span className="text-blue-500 font-semibold">by Designing World</span>.
              </p> */}
              {/* Social Icons */}
              <div className="flex space-x-3 mt-4 justify-center items-center">
                    <img src={Social1} alt="Facebook" className="w-6 h-6 cursor-pointer filter invert" />
                    <img src={Social2} alt="Pinterest" className="w-6 h-6 cursor-pointer filter invert" />
                    <img src={Social3} alt="Skype" className="w-6 h-6 cursor-pointer filter invert" />
                    <img src={Social4} alt="Twitter" className="w-6 h-6 cursor-pointer filter invert" />
                </div>

            </div>
  
            {/* About */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">About</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-[#aabac3]">About Us</a></li>
                
                <li><a href="/terms" className="hover:text-[#aabac3]">Terms & Policy</a></li>
                {/* <li><a href="#" className="hover:text-[#aabac3]">Community</a></li> */}
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#0077b6]">Help</a></li>
                <li><a href="#" className="hover:text-[#0077b6]">Support</a></li>
                <li><a href="/privacy" className="hover:text-[#0077b6]">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-[#0077b6]">Term & Conditions</a></li>
                
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#0077b6]">Call Centre</a></li>
                <li><a href="#" className="hover:text-[#0077b6]">Email Us</a></li>
                <li><a href="#" className="hover:text-[#0077b6]">Term & Conditions</a></li>
                <li><a href="#" className="hover:text-[#0077b6]">Help Center</a></li>
              </ul>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

