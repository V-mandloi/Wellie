import AboutContent from "../components/About/aboutContent";
import AboutHeroSection from "../components/About/aboutHeroSection";

import AboutSupport from "../components/About/AboutSuport";

import AboutFeature from "../components/About/aboutFeature";


export default function Hero() {
  return (
    <div>
      <AboutHeroSection />
      <AboutContent/>
      <AboutFeature/>
      <AboutSupport/>

      

    </div>
  );
}
