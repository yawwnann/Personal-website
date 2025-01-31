import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useScroll, useTransform, motion } from "framer-motion";
// Pindahkan komponen Header ke atas sebelum digunakan
const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    };
    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  // Animasi yang lebih halus dengan easing function
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isTouchDevice ? [1, 0.98] : [1.05, 1],
    { clamp: false }
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isTouchDevice ? [0, 0] : [15, 0],
    { clamp: false }
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isTouchDevice ? [0, -30] : [0, -100],
    {
      clamp: false,
      ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    }
  );

  return (
    <div
      className="flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          scale={scale}
          translate={translate}
          isTouchDevice={isTouchDevice}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

const Card = ({ rotate, scale, translate, children, isTouchDevice }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        transformPerspective: 1200,
        willChange: "transform",
        transformOrigin: "top center",
        boxShadow: isTouchDevice
          ? "0 4px 6px rgba(0, 0, 0, 0.1)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className={`max-w-5xl mx-auto ${
        isTouchDevice
          ? "h-[25rem] sm:h-[35rem] md:h-[45rem] lg:h-[50rem]"
          : "h-[50rem] sm:h-[35rem] md:h-[60rem] lg:h-[65rem]"
      } w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px]`}
    >
      <div className="h-full w-full bg-gray-100 dark:bg-zinc-900 p-4">
        {children}
      </div>
    </motion.div>
  );
};
// Prop Types
ContainerScroll.propTypes = {
  titleComponent: PropTypes.node,
  children: PropTypes.node,
};

Header.propTypes = {
  translate: PropTypes.object,
  titleComponent: PropTypes.node,
};

Card.propTypes = {
  rotate: PropTypes.object,
  scale: PropTypes.object,
  translate: PropTypes.object,
  children: PropTypes.node,
  isTouchDevice: PropTypes.bool,
};

export default ContainerScroll;
