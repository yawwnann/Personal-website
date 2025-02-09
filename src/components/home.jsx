import { useEffect } from "react";

import HeroSection from "./home/HeroSection";
import BackgroundImages from "./home/BackgroundImages";
import RunningText from "./home/RunningText";
import AboutSection from "./About/about_section";
import MySkills from "./Skills/MySkills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Navbar from "./Header/Header";

import ContainerScroll from "./Project/Scroll/container-scroll";
import VelocityText from "./Project/VelocityText/VelocityText";
import HeroParallaxDemo from "./Project/ui_design/Ui_parallax";
import GlobeLocationCard from "./home/GlobeLocationCard";

const runningText =
  "✦   Full Stack Developer   ✦   Graphic Designer   ✦   Video Editing   ✦   UI/UX Design   ✦   Front End Developer   ✦  Back End Developer";

export const Home = () => {
  useEffect(() => {
    const marqueeContainerLeft = document.querySelector(".marquee-container");
    if (marqueeContainerLeft) {
      const content = marqueeContainerLeft.innerHTML;
      marqueeContainerLeft.innerHTML += content;

      let startPos = 0;
      const speed = 1;

      const animate = () => {
        startPos -= speed;
        if (startPos <= -marqueeContainerLeft.scrollWidth / 2) {
          startPos = 0;
        }
        marqueeContainerLeft.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <div className="text-white bg-gray-900 flex flex-col items-center overflow-x-hidden">
      <div className="absolute left-0 w-full h-full bg-gradient-balls z-0"></div>
      <div className="w-full pl-4 sm:pl-8 z-[999]">
        <Navbar />
      </div>

      <HeroSection />

      <div className="absolute bottom-10 sm:bottom-20 -left-4 sm:-left-10 z-50 flex items-center p-2 sm:p-4 rounded-lg shadow-lg">
        <GlobeLocationCard />
      </div>

      <BackgroundImages />
      <RunningText runningText={runningText} />

      <div id="about" className="w-full mt-8 sm:mt-16">
        <AboutSection />
      </div>

      <div id="skills" className="w-full mt-8 sm:mt-16">
        <MySkills />
      </div>

      <div id="project" className="w-full py-8 sm:py-16">
        <Project />
      </div>

      <div
        id="ui-parallax"
        className="w-full mt-8 sm:mt-16 py-8 sm:py-16 z-[100]"
      >
        <HeroParallaxDemo />
      </div>

      <div
        id="ContainerScroll"
        className="w-full mt-20 sm:mt-40 lg:mt-80 py-8 sm:py-16"
      >
        <ContainerScroll />
      </div>

      <div id="VelocityText" className="w-full py-8 sm:py-16">
        <VelocityText />
      </div>

      <div id="contact" className="w-full min-h-screen mt-8 sm:mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
