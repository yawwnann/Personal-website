import PropTypes from "prop-types";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { useEffect, useRef } from "react";

const HeroSection = ({ displayedText }) => {
  const containerRef = useRef(null);
  const y = useMotionValue(0);
  const yTransform = useTransform(y, [0, 500], [0, -200]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        y.set(window.scrollY - rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <div
      className="relative min-h-screen flex flex-col z-10 items-center justify-center"
      id="home"
      ref={containerRef}
    >
      <motion.div className="text-center max-w-3xl" style={{ y: yTransform }}>
        {/* Hello Gaes */}
        <div>
          <SpotlightButton />
        </div>

        {/* Title */}
        <motion.h1 className="text-6xl mt-4 font-extrabold mb-4 font-[Poppins]">
          <span>I am </span>
          <motion.span className="text-orange-500 transition-transform transform hover:scale-110 duration-500 ease-in-out">
            Nanta
          </motion.span>
          <br />
          <motion.span className="text-6xl transition-transform transform hover:scale-110 duration-500 ease-in-out hover:cursor-default">
            {displayedText}
          </motion.span>
          <span className="caret"></span>
        </motion.h1>

        {/* Description */}
        <motion.p className="text-xl mb-6 font-[Press Start 2P]">
          Saya adalah seorang desainer grafis dan pengembang web yang
          berdedikasi, siap membantu mewujudkan ide-ide kreatif Anda menjadi
          kenyataan.
        </motion.p>

        {/* Icons */}
        <motion.div className="space-x-4 flex justify-center">
          <a
            href="https://github.com/yawwnann"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
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

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-transparency border-2 px-4 py-3 text-lg font-medium "
    >
      <span className="pointer-events-none text-white relative z-10">
        Hello Gaes
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-orange-500"
      />
    </motion.button>
  );
};

HeroSection.propTypes = {
  displayedText: PropTypes.string.isRequired,
};

export default HeroSection;
