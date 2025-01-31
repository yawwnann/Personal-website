import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ displayedText }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
        "<"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0 },
        { scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=1"
      );
  }, []);

  useEffect(() => {
    gsap.to(textRef.current, {
      yPercent: -20,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col z-10 items-center justify-center px-4 sm:px-6 lg:px-8"
      id="home"
      ref={containerRef}
      data-aos="fade-up"
    >
      <motion.div ref={textRef} className="text-center max-w-3xl">
        <div data-aos="zoom-in">
          <SpotlightButton ref={buttonRef} />
        </div>

        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-extrabold mb-4 font-[Poppins]"
          data-aos="fade-right"
        >
          <span>I am </span>
          <motion.span
            className="text-orange-500 transition-transform transform hover:scale-110 duration-500 ease-in-out"
            whileHover={{ scale: 1.2 }}
          >
            Nanta
          </motion.span>
          <br />
          <motion.span className="text-3xl sm:text-4xl lg:text-5xl transition-transform transform hover:scale-110 duration-500 mt-4 ease-in-out hover:cursor-default">
            {displayedText}
          </motion.span>
          <span className="caret"></span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base lg:text-lg mb-6 font-[Poppins]"
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
