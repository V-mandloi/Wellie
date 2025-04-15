import React from 'react';
import ContactImg from "../../assets/contactimg.png"
export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row justify-center top-0 bg-primary  p-2 md:p-2">
      <div className="w-full md:w-1/2 flex flex-col ml-12 justify-center">
        {/* <p className="text-hometext text-lg ">How can we help you?</p> */}
        <h1 className="text-hometext text-5xl md:text-6xl font-bold ">Contact us</h1>
        <div className="my-4">
          <p className="text-gray-700 text-lg ">
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-800">156, Dravid Nagar
2nd Floor, Above SBI Bank, Usha Nagar Branch
Ranjeet Hanuman Temple Road
Indore (M.P.)</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-gray-800">+91 626 362 8392</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="hello@averybit.com" className="text-purple-600 hover:underline">hello@averybit.com</a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-64 md:w-80">
          {/* Illustration goes here - using placeholder */}
          <div className="relative">
            
            <div className="relative z-10">
             <img
             src={ContactImg}
             />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
