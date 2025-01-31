"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import "aos/dist/aos.css";

const AboutSection = () => {
  const text = `I am a creative, persistent, and adaptive individual, with the ability to think innovatively and be solution-oriented. Experienced in the Technology Field, I am always open to new learning and committed to producing quality work. With a combination of good problem-solving and communication skills, I am able to work collaboratively and independently, and complete each project effectively and efficiently.`;
  const words = text.split(" ");

  const [isVisible, setIsVisible] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0.5, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    // Mengatur animasi marquee kanan
    const marqueeContainersRight = document.querySelectorAll(
      ".marquee-container-about-right"
    );

    marqueeContainersRight.forEach((container) => {
      const content = container.innerHTML;
      const duplicateContent = content.repeat(2);
      container.innerHTML = duplicateContent;

      let startPos = -container.scrollWidth / 2;
      const speed = 1;

      const animate = () => {
        startPos += speed;
        if (startPos >= 0) {
          startPos = -container.scrollWidth / 2;
        }
        container.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  useEffect(() => {
    // Mengatur animasi marquee kiri
    const marqueeContainerLeft = document.querySelector(
      ".marquee-container-about-left"
    );
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
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Ketika AboutSection terlihat, mulai animasi
        } else {
          setIsVisible(false); // Reset animasi jika elemen keluar viewport
        }
      },
      { threshold: 0.5 } // Elemen terlihat 50% untuk mulai animasi
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <motion.section
      className="relative bg-black text-black w-full py-16 px-6 flex flex-col items-center justify-center"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"} // Menunggu hingga elemen terlihat untuk animasi
      variants={containerVariants}
    >
      {/* Background Marquee Text */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="marquee-container-about-right whitespace-nowrap text-[9rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          GRAPHIC DESIGNER &nbsp; GRAPHIC DESIGNER &nbsp;
        </div>
        <div className="marquee-container-about-left whitespace-nowrap text-[9rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          WEB DEVELOPER &nbsp; WEB DEVELOPER &nbsp;
        </div>
        <div className="marquee-container-about-right whitespace-nowrap text-[9rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          UI/UX DEVELOPER &nbsp; UI/UX DEVELOPER &nbsp;
        </div>
      </div>

      <motion.div
        className="max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Tilt Card */}
        <motion.div
          className="w-[300px] h-[520px] mt-6 pt-4 rounded-lg mr-7 flex-shrink-0"
          data-aos="zoom-in"
        >
          <TiltCard />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="text-center lg:text-left lg:max-w-lg space-y-6 -mt-20"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          {/* Elemen <p> dengan animasi yang diperbaiki */}
          <motion.p
            className="text-lg text-white mb-6 leading-relaxed"
            variants={containerVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={wordVariants}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
          <button className="rounded-2xl border-2 border-dashed border-black bg-orange-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Download CV
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-xl overflow-hidden"
      >
        <img
          src="./img/nanta2.png"
          alt="Nanta"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default AboutSection;
