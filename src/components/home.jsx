import { useState, useEffect, Suspense, lazy } from "react";
import HeroSection from "./home/HeroSection";
import BackgroundImages from "./home/BackgroundImages";
import RunningText from "./home/RunningText";
import AboutSection from "./About/about_section";
import MySkills from "./Skills/MySkills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Aos from "aos";
import Navbar from "./Header/Header";

const ContainerScroll = lazy(() => import("./Project/Scroll/container-scroll"));
const VelocityText = lazy(() => import("./Project/VelocityText/VelocityText"));
const HeroParallaxDemo = lazy(() => import("./Project/ui_design/Ui_parallax"));
const GlobeLocationCard = lazy(() => import("./home/GlobeLocationCard"));

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
    <div className="text-white bg-gray-900 flex flex-col items-center overflow-x-hidden">
      <div className="absolute left-0 w-full h-full bg-gradient-balls z-0"></div>
      <div className="w-full pl-4 sm:pl-8 z-[999]">
        <Navbar />
      </div>
      <HeroSection displayedText={displayedText} />

      <div className="absolute bottom-10 sm:bottom-20 -left-4 sm:-left-10 z-50 flex items-center p-2 sm:p-4 rounded-lg shadow-lg">
        <Suspense
          fallback={
            <div className="w-24 h-24 bg-gray-800 rounded-lg animate-pulse" />
          }
        >
          <GlobeLocationCard />
        </Suspense>
      </div>

      <BackgroundImages />
      <RunningText runningText={runningText} />

      <div id="about" className="w-full mt-8 sm:mt-16">
        <AboutSection />
      </div>

      <div id="skills" className="w-full mt-8 sm:mt-16">
        <MySkills />
      </div>

      <div id="project" className="w-full py-8 sm:py-16 ">
        <Project />
      </div>

      <div
        id="ui-parallax"
        className="w-full mt-8 sm:mt-16 py-8 sm:py-16 z-[100]"
      >
        <Suspense
          fallback={
            <div className="h-[40vh] bg-gradient-to-b from-gray-900 to-black animate-pulse" />
          }
        >
          <HeroParallaxDemo />
        </Suspense>
      </div>

      <div
        id="ContainerScroll"
        className="w-full mt-20 sm:mt-40 lg:mt-80 py-8 sm:py-16"
      >
        <Suspense
          fallback={
            <div className="h-[80vh] bg-gradient-to-b from-black to-gray-900 animate-pulse" />
          }
        >
          <ContainerScroll />
        </Suspense>
      </div>

      <div id="VelocityText" className="w-full py-8 sm:py-16">
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
          <VelocityText />
        </Suspense>
      </div>

      <div id="contact" className="w-full min-h-screen mt-8 sm:mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
