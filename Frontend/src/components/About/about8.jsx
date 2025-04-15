import React from 'react';
export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-primary min-h-screen p-8 md:p-16">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-hometext text-lg mb-2">How can we help you?</p>
        <h1 className="text-gray-800 text-5xl md:text-6xl font-bold mb-6">Contact us</h1>
        <div className="my-4">
          <p className="text-gray-700 text-lg mb-8">
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
            <p className="text-gray-800">Søren Frichs Vej 42B, 8230 Åbyhøj</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-gray-800">+45 71 99 77 07</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:mail@sleeknote.com" className="text-purple-600 hover:underline">mail@sleeknote.com</a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-64 md:w-80">
          {/* Illustration goes here - using placeholder */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-orange-200 absolute right-6 top-4"></div>
            <div className="relative z-10">
              <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  {/* Simple person with hat illustration */}
                  <path d="M170,100 Q190,90 200,110 Q210,130 190,150 Q170,170 150,150" stroke="black" fill="none" />
                  {/* Face */}
                  <circle cx="160" cy="120" r="40" fill="#FFF" stroke="black" />
                  {/* Hat */}
                  <path d="M130,100 Q160,80 190,100 L190,120 L130,120 Z" fill="#FFF" stroke="black" />
                  <path d="M190,120 Q210,120 210,140" stroke="black" fill="none" />
                  {/* Speech bubble */}
                  <rect x="200" y="80" width="60" height="40" rx="5" fill="#FFF" stroke="black" />
                  <text x="210" y="105" fontSize="16" fontFamily="sans-serif" fontWeight="bold">HELLO</text>
                  {/* Dots on shirt */}
                  <circle cx="150" cy="180" r="3" fill="orange" />
                  <circle cx="170" cy="190" r="3" fill="orange" />
                  <circle cx="185" cy="175" r="3" fill="orange" />
                  <path d="M140,170 C145,175 155,175 160,170" stroke="orange" strokeWidth="1" />
                  <path d="M180,180 C185,185 190,180 195,175" stroke="orange" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
