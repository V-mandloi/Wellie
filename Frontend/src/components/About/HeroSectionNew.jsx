
import React from 'react';

const HeroSectionNew = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/inpok4MKVLM?autoplay=1&mute=1&loop=1&playlist=inpok4MKVLM"
          title="Weelie Introduction Video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 p-4">
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-bold mb-4">What is Weelie?</h1>
          <p className="text-xl mb-6">
            Weelie is a revolutionary platform designed to help users make the most of their time while managing tasks and projects seamlessly. Whether you're at work or on the go, Weelie ensures you stay productive and connected.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionNew;



// <video
// className="absolute top-0 left-0 w-full h-full object-cover z-0"
// autoPlay
// muted
// loop
// playsInline
// >
// <source src="/videos/meditation-bg.mp4" type="video/mp4" />

// </video>