import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, forwardRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);
const roles = ["Graphic Designer", "Web Developer", "UI/UX Designer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roleTextRef = useRef(null);

  useEffect(() => {
    if (roleTextRef.current) {
      gsap.fromTo(
        roleTextRef.current,
        { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            setTimeout(() => {
              gsap.to(roleTextRef.current, {
                clipPath: "inset(0% 0% 0% 100%)",
                opacity: 0,
                duration: 2,
                ease: "power3.in",
                onComplete: () => {
                  setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                },
              });
            }, 4000);
          },
        }
      );
    }
  }, [roleIndex]);

  return (
    <div
      className="relative min-h-screen flex flex-col z-10 items-center justify-center px-4 sm:px-6 lg:px-8"
      id="home"
      data-aos="fade-up"
    >
      <motion.div className="text-center max-w-3xl">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-extrabold mb-1 font-sans"
          data-aos="fade-right"
        >
          <span>I am </span>
          <motion.span
            className="text-orange-500 transition-transform italic font-bold transform hover:scale-110 duration-500 ease-in-out"
            whileHover={{ scale: 1.2 }}
          >
            Nanta
          </motion.span>
          <br />
          <motion.span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-transform transform hover:scale-110 duration-500  ease-in-out hover:cursor-default">
            <div className="text-center  p-3">
              <h2
                ref={roleTextRef}
                className="role-text text-4xl sm:text-8xl md:text-8xl lg:text-7xl xl:text-7xl font-extrabold font-sans"
              >
                {roles[roleIndex]}
              </h2>
            </div>
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base lg:text-lg m-6 italic "
          data-aos="fade-left"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          I am a dedicated graphic designer and web developer, ready to help
          turn your creative ideas into reality. Lets build something amazing
          together.
        </motion.p>
      </motion.div>
    </div>
  );
};

const SpotlightButton = forwardRef((props, ref) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate(
        { left },
        { duration: 500, fill: "forwards", easing: "ease-out" }
      );
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 300, fill: "forwards", easing: "ease-in" }
      );
    };

    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref, spanRef]);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={ref}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-transparency px-4 py-3 text-lg font-medium"
    >
      <span className="pointer-events-none text-white relative z-10">
        Hello
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-orange-500"
      />
    </motion.button>
  );
});

SpotlightButton.displayName = "SpotlightButton";

HeroSection.propTypes = {
  displayedText: PropTypes.string.isRequired,
};

export default HeroSection;
