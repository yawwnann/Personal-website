import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import Header from "./header";
import MySkills from "./MySkills";
import AboutSection from "./about_section";

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
    AOS.init({
      duration: 1000,
      once: false,
    });
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
    const marqueeContainer = document.querySelector(".marquee-container");
    const content = marqueeContainer.innerHTML;
    marqueeContainer.innerHTML += content;

    let startPos = 0;
    const speed = 1;

    const animate = () => {
      startPos -= speed;
      if (startPos <= -marqueeContainer.scrollWidth / 2) {
        startPos = 0;
      }
      marqueeContainer.style.transform = `translateX(${startPos}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="text-white bg-black flex flex-col items-center">
      {/* Header */}
      <Header className="fixed top-0 left-0 w-full bg-black" />

      {/* Background Gradient Balls */}
      <div className="absolute top-[70px] left-0 w-full h-full bg-gradient-balls"></div>

      {/* Main Section */}
      <div className="relative min-h-screen flex flex-col z-10 items-center justify-center">
        <div className="text-center max-w-3xl" data-aos="fade-up">
          <span className="text-xl font-[Poppins] bg-transparency border-2 py-2 px-4 rounded-full transition-transform transform hover:scale-110 duration-500 ease-in-out">
            Hello Gaes
          </span>
          <h1 className="text-6xl mt-4 font-extrabold mb-4 font-[Poppins]">
            <span>I am </span>
            <span className="text-orange-500 transition-transform transform hover:scale-110 duration-500 ease-in-out">
              Nanta
            </span>
            <br />
            <span className="text-6xl  transition-transform transform hover:scale-110 duration-500 ease-in-out hover:cursor-default">
              {displayedText}
            </span>
            <span className="caret"></span>
          </h1>
          <p className="text-xl mb-6 font-[Press Start 2P]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4 flex justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-4xl hover:text-orange-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-4xl hover:text-orange-500" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-4xl hover:text-orange-500" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="character-image absolute top-[-300px] right-1/2 transform mr-40 mt-80 -translate-x-2/2 w-[500px] h-[500px] mb-8"
        data-aos="slide-right"
      >
        <img src="/Saly-13.png" alt="Character" className="animation-loop" />
      </div>

      <div
        className="hand-image absolute bottom-0 left-1/2 transform ml-20 -translate-x-2/2 w-[600px] h-[600px]"
        data-aos="slide-left"
      >
        <img src="/Saly-8.png" alt="Hand" className="animation-move" />
      </div>

      {/* Running Text */}
      <div className="w-full bg-orange-500 py-5 overflow-hidden">
        <div className="bg-black py-3 -rotate-2 ">
          <div className="marquee-container flex items-center whitespace-nowrap">
            <span className="text-white text-xl font-semibold mx-2">
              {runningText}
            </span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" data-section className="w-full">
        <AboutSection />
      </div>

      {/* MySkills */}
      <div id="Myskills" data-section className="w-full">
        <MySkills />
      </div>
    </div>
  );
};

export default Home;
