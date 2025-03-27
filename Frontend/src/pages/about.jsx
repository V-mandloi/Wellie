import AboutContent from "../components/About/aboutContent";
import AboutHeroSection from "../components/About/aboutHeroSection";
import AboutSupport from "../components/About/AboutSuport";

export default function Hero() {
  return (
    <div>
      <AboutHeroSection />
      <AboutContent/>
      <AboutSupport/>
    </div>
  );
}
