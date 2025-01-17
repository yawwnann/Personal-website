import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import Header from "./header"; // Pastikan header sudah terpasang di sini.

const text = " Nanta"; // Tetapkan konstanta di luar komponen

export const Home = () => {
  const [typedText, setTypedText] = useState(""); // State for typed text
  const [index, setIndex] = useState(0); // Index of the character to be typed
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Flag to track typing completion

  // Typing effect
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timer);
    } else if (index === text.length && !isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [index, isTypingComplete]);

  // Reset typing effect
  useEffect(() => {
    if (isTypingComplete) {
      const resetTimer = setTimeout(() => {
        setTypedText("");
        setIndex(0);
        setIsTypingComplete(false);
      }, 10000); // Reset after 10 seconds
      return () => clearTimeout(resetTimer);
    }
  }, [isTypingComplete]);

  return (
    <div className="relative text-white bg-black min-h-screen flex flex-col items-center">
      {/* Header berada di atas dengan z-index lebih tinggi */}
      <Header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-80 backdrop-blur-lg p-4 shadow-md" />

      {/* Background Gradient Balls di bawah header */}
      <div className="absolute inset-0 bg-gradient-balls"></div>

      {/* Konten utama */}
      <div className="relative mt-[70px] flex-grow flex flex-col items-center justify-center z-10">
        <div className="text-center sm:text-center max-w-3xl">
          <h1 className="text-6xl font-extrabold mb-4 font-[Poppins]">
            <span>Hello Gaes 👋 </span>
            <br />
            <span>I am</span>
            <span className="text-orange-500">{typedText}</span>
            <span className="caret"></span>
          </h1>
          <p className="text-xl mb-6 font-[Press Start 2P]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg font-[Poppins]">
              About me
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg font-[Poppins]">
              😮 Let’s see portfolios
            </button>
          </div>
        </div>
        <div className="absolute top-[-200px] right-1/2 transform mr-40 mt-80 -translate-x-2/2 z-0 w-[500px] h-[500px] mb-8">
          <img
            src="/Saly-13.png"
            alt="Character"
            className="absolute top-0 left-0 w-full h-auto animation-loop"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform ml-20 -translate-x-2/2 z-[1] w-[600px] h-[600px]">
        <img
          src="/Saly-8.png"
          alt="Hand"
          className="w-full h-full object-contain animation-move"
        />
      </div>
      <footer className="absolute bottom-0 p-7 text-sm text-center w-full z-10 flex justify-between items-center px-10 backdrop-blur-lg bg-opacity-30 bg-black">
        <p className="text-white">Copyright © 2021 All rights reserved.</p>
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl hover:text-yellow-500" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl hover:text-yellow-500" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white text-2xl hover:text-yellow-500" />
          </a>
        </div>
        <p className="text-white">Yuwananta Valencia Afshandy</p>
      </footer>
    </div>
  );
};

export default Home;
