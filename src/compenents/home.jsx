import { useState, useEffect } from "react";
import Header from "./header";
import HeroSection from "./HeroSection";
import BackgroundImages from "./BackgroundImages";
import RunningText from "./RunningText";
import AboutSection from "./about_section";
import MySkills from "./MySkills";

import AOS from "aos";
import "aos/dist/aos.css";

const roles = ["Graphic Designer", "Web Developer", "UI/UX Designer"];
const runningText =
  "✦   Developer   ✦   Graphic Designer   ✦   Video Editing   ✦   UI/UX Design   ✦   Front End Developer   ✦  Web Developer";

export const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
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

  return (
    <div className="text-white bg-black flex flex-col items-center">
      <Header className="fixed top-0 left-0 w-full bg-black" />
      <div className="absolute top-[70px] left-0 w-full h-full bg-gradient-balls"></div>
      <HeroSection displayedText={displayedText} />
      <BackgroundImages />
      <RunningText runningText={runningText} />
      <div id="about" className="w-full">
        <AboutSection />
      </div>
      <div id="skills" className="w-full">
        <MySkills />
      </div>
    </div>
  );
};

export default Home;
