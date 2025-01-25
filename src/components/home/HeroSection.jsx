import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import SocialMediaIcons from "./SocialMediaIcons";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ displayedText }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // Initial animation when the page is loaded
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "<" // Start the animation together with the container
      )
      .fromTo(
        buttonRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5" // Start before the previous animation ends
      );
  }, []);

  // Parallax effect using GSAP and ScrollTrigger
  useEffect(() => {
    gsap.to(textRef.current, {
      yPercent: -20, // Parallax movement upwards
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true, // Smooth parallax effect while scrolling
      },
    });
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col z-10 items-center justify-center"
      id="home"
      ref={containerRef}
      data-aos="fade-up" // AOS animation
    >
      <motion.div ref={textRef} className="text-center max-w-3xl">
        {/* Button */}
        <div data-aos="zoom-in">
          {" "}
          {/* AOS animation */}
          <SpotlightButton ref={buttonRef} />
        </div>

        {/* Title */}
        <motion.h1
          className="text-6xl mt-4 font-extrabold mb-4 font-[Poppins]"
          data-aos="fade-right" // AOS animation
        >
          <span> I am </span>
          <motion.span className="text-orange-500 transition-transform transform hover:scale-110 duration-500 ease-in-out">
            Nanta
          </motion.span>
          <br />
          <motion.span className="text-6xl transition-transform transform hover:scale-110 duration-500 mt-4 ease-in-out hover:cursor-default">
            {displayedText}
          </motion.span>
          <span className="caret"></span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl mb-6 font-[Press Start 2P]"
          data-aos="fade-left" // AOS animation
        >
          I am a dedicated graphic designer and web developer, ready to help
          turn your creative ideas into reality. Lets build something amazing
          together.
        </motion.p>
        <SocialMediaIcons />
      </motion.div>
    </div>
  );
};

// SpotlightButton with forwardRef
const SpotlightButton = forwardRef((props, ref) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
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
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-transparency  px-4 py-3 text-lg font-medium"
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

SpotlightButton.propTypes = {};

export default HeroSection;
