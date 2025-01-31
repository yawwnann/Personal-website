import { useState, useEffect } from "react";
import HeroSection from "./home/HeroSection";
import BackgroundImages from "./home/BackgroundImages";
import RunningText from "./home/RunningText";
import AboutSection from "./About/about_section";
import MySkills from "./Skills/MySkills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Aos from "aos";
import ContainerScroll from "./Project/Scroll/container-scroll-demo";
import VelocityText from "./Project/VelocityText/VelocityText";
import HeroParallaxDemo from "./Project/ui_design/Ui_parallax";
import Navbar from "./Header/Header";
import GlobeLocationCard from "./home/GlobeLocationCard";

const roles = ["Graphic Designer", "Web Developer", "UI/UX Designer"];
const runningText =
  "✦   Full Stack Developer   ✦   Graphic Designer   ✦   Video Editing   ✦   UI/UX Design   ✦   Front End Developer   ✦  Back End Developer";

export const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (charIndex < currentRole.length) {
        const typingTimer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentRole[charIndex]);
          setCharIndex(charIndex + 1);
        }, 150);
        return () => clearTimeout(typingTimer);
      } else {
        const pauseTimer = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(pauseTimer);
      }
    } else {
      if (charIndex > 0) {
        const deletingTimer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 100);
        return () => clearTimeout(deletingTimer);
      } else {
        setIsTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [charIndex, isTyping, roleIndex]);

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
    <div className="text-white bg-black flex flex-col items-center">
      <div className="absolute left-0 w-full h-full bg-gradient-balls z-0"></div>
      <Navbar />
      <HeroSection displayedText={displayedText} />
      <div className="absolute bottom-20 -left-20 z-50 flex items-center p-4 rounded-lg shadow-lg">
        <GlobeLocationCard />
      </div>
      <BackgroundImages />
      <RunningText runningText={runningText} />

      <div id="about" className="w-full">
        <AboutSection />
      </div>
      <div id="skills" className="w-full">
        <MySkills />
      </div>

      <div id="project" className="w-full py-16">
        <Project />
      </div>

      <div id="ui-parallax" className="w-full mt-16 py-16 z-100">
        <HeroParallaxDemo />
      </div>
      <div id="ContainerScroll" className="w-full mt-80 py-16-2">
        <ContainerScroll />
      </div>
      <div id="VelocityText" className="w-full py-16">
        <VelocityText />
      </div>
      <div id="contact" className="w-full min-h-screen mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
